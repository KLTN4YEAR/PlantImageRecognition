import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Alert,
  RefreshControl,
} from 'react-native';
import {styles} from '../public/styleSheets/styleHomeCard';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Avatar} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {auth} from '../config/helper';
// Gọi các sqlite function
import {
  addDataToDb,
  insertFlower,
  viewAllFlower,
  getIDByName,
  insertImages,
  removeData,
} from '../sqlite/dbFlowerOffline';

import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({name: 'FlowerDatabase.db'}); 
const listPost = [
  {
    _id: '5eb1875a89302e0908142f10',
    images:
      'https://storage.googleapis.com/recognition-plant/imagePost/oldPlant/daisy/fcd767c9-5dd9-4688-8a07-e4625ca0111e.jpg',

    hiden: false,
    content: 'Cúc nè',
    postedBy: '5eb17e2ec8c4ce2fb45d9c7a',
    nameUser: 'Nguyễn Tuấn Vũ',
    avatarUrl:
      'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/p960x960/50688968_787150878305428_8692489284222976000_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=zcJBX5vIb8wAX90Dc2L&_nc_ht=scontent.fsgn2-2.fna&_nc_tp=6&oh=f014004fd64fff9d405ece955bde47b7&oe=5EE5EDB1',
  },
  {
    _id: '5eb1876d89302e0908142f11',
    images:
      'https://storage.googleapis.com/recognition-plant/imagePost/oldPlant/daisy/1890ac32-e365-438d-bca3-203f1cd39339.jpg',
    nameUser: 'Nguyễn Tuấn Vũ',
    avatarUrl:
      'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/p960x960/50688968_787150878305428_8692489284222976000_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=zcJBX5vIb8wAX90Dc2L&_nc_ht=scontent.fsgn2-2.fna&_nc_tp=6&oh=f014004fd64fff9d405ece955bde47b7&oe=5EE5EDB1',
    hiden: false,
    content: 'Hoa Cúc xinh đẹp',
    postedBy: '5eb17e2ec8c4ce2fb45d9c7a',
  },
  {
    _id: '5eb1876d89302e0908142f11',
    images:
      'https://storage.googleapis.com/recognition-plant/imagePost/oldPlant/daisy/1890ac32-e365-438d-bca3-203f1cd39339.jpg',
    nameUser: 'Nguyễn Tuấn Vũ',
    avatarUrl:
      'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/p960x960/50688968_787150878305428_8692489284222976000_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=zcJBX5vIb8wAX90Dc2L&_nc_ht=scontent.fsgn2-2.fna&_nc_tp=6&oh=f014004fd64fff9d405ece955bde47b7&oe=5EE5EDB1',
    hiden: false,
    content: 'Hoa Cúc xinh đẹp',
    postedBy: '5eb17e2ec8c4ce2fb45d9c7a',
  },
  {
    _id: '5eb1876d89302e0908142f11',
    images:
      'https://storage.googleapis.com/recognition-plant/imagePost/oldPlant/daisy/1890ac32-e365-438d-bca3-203f1cd39339.jpg',
    nameUser: 'Nguyễn Tuấn Vũ',
    avatarUrl:
      'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/p960x960/50688968_787150878305428_8692489284222976000_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=zcJBX5vIb8wAX90Dc2L&_nc_ht=scontent.fsgn2-2.fna&_nc_tp=6&oh=f014004fd64fff9d405ece955bde47b7&oe=5EE5EDB1',
    hiden: false,
    content: 'Hoa Cúc xinh đẹp',
    postedBy: '5eb17e2ec8c4ce2fb45d9c7a',
  },
];

class PostScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      dataSource: [],

      dataSQLite:[],
    };
  }
  ListViewItemSeparator = () => {
    return (
      //returning the listview item saparator view
      <View
        style={{
          height: 0.2,
          width: '90%',
          backgroundColor: '#808080',
        }}
      />
    );
  };
  onRefresh() {
    //Clear old data of the list
    this.setState({dataSource: []});
    //Call the Service to get the latest data
    //this.GetData();
  }

  //định nghĩa các prop
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };
  componentDidMount=async()=> {
    this.checkLogin();
  
  }
  checkLogin = async () => {
    const data = await auth.isAuthenticated();
    if (!data) {
      console.log('Chưa login!');
      //await this.props.navigation.navigate('Login');
    } else {
      console.log('Đã login!');
    }
  };
  render() {
    if (this.state.refreshing) {
      return (
        //loading view while data is loading
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <SafeAreaView style={styles.viewSafeArea}>
        <ScrollView
          style={styles.viewScroll}
          refreshControl={
            <RefreshControl
              //refresh control used for the Pull to Refresh
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }>
          <Grid>
            <Row style={styles.rowCreate}>
              <Col size={20}>
                <Avatar
                  rounded
                  source={{
                    uri:
                      'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/p960x960/50688968_787150878305428_8692489284222976000_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=zcJBX5vIb8wAX_TOhha&_nc_ht=scontent.fsgn2-2.fna&_nc_tp=6&oh=fb5db39206db9f0b26ad10b268a91f5b&oe=5EE5EDB1',
                  }}
                />
              </Col>
              <Col size={90}>
                <Text style={styles.txtUserNameCreate}>Nguyễn Tuấn Vũ</Text>
              </Col>
              <Col size={10}>
                <TouchableOpacity
                  style={styles.btnCreatePost}
                  onPress={() => this.props.navigation.navigate('CreatePost')}>
                  <Text style={styles.txtUserNameCreate}>+</Text>
                </TouchableOpacity>
              </Col>
            </Row>
            {listPost.length > 0 ? (
              listPost.map((item, i) => {
                return (
                  <Row key={i}>
                    <View style={styles.viewCard}>
                      <View style={styles.viewPostBy}>
                        <Row style={styles.rowPostBy}>
                          <Col size={15}>
                            <Avatar
                              rounded
                              source={{
                                uri: item.avatarUrl,
                              }}
                            />
                          </Col>
                          <Col size={85}>
                            <Text style={styles.txtUserName}>
                              {item.nameUser}
                            </Text>
                          </Col>
                        </Row>
                      </View>

                      <View style={styles.viewDetail}>
                        <Text style={styles.txtDec}>{item.content}</Text>
                      </View>
                      <View style={styles.viewImg}>
                        <Image
                          source={{
                            uri: item.images,
                          }}
                          style={styles.imgCard}
                        />
                      </View>
                      <View style={styles.viewBtn}>
                        {/* <TouchableOpacity
                          style={styles.touchAdd}
                          onPress={() =>
                            this.props.navigation.navigate(
                              'AddDetail',
                            )
                          }>
                          <Col
                            size={15}
                            style={styles.colBtnAdd}>
                            <Icon
                              size={20}
                              type="font-awesome"
                              name="edit"
                              iconStyle={styles.labelIconAdd}
                              color="#606770"
                            />
                            <Text style={styles.labelAdd}>
                              Thêm thông tin
                            </Text>
                          </Col>
                        </TouchableOpacity> */}
                        <TouchableOpacity
                          style={styles.touchAdd}
                          onPress={() =>
                            this.props.navigation.navigate('DetailPost', {
                              post: item,
                            })
                          }>
                          <Col size={15} style={styles.colBtnAdd}>
                            <Icon
                              size={20}
                              type="font-awesome"
                              name="edit"
                              iconStyle={styles.labelIconAdd}
                              color="#606770"
                            />
                            <Text style={styles.labelAdd}>Xem chi tiết</Text>
                          </Col>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Row>
                );
              })
            ) : (
              <Text>Không có kết quả</Text>
            )}
          </Grid>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PostScreen);
