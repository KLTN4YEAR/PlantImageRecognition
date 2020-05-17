import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { styles } from '../public/styleSheets/styleHomeCard';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Avatar } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth } from '../config/helper';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      dataSource: [],
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

  componentDidMount() {
    this.checkLogin();
    // const jwt = auth.isAuthenticated();
    // // const userID = jwt.user._id;
    // console.log('a',jwt);
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
        <View style={styles.viewCreatePost}>
          <TouchableOpacity
            style={styles.btnCreate}
            onPress={() => this.props.navigation.navigate('CreatePost')}>
            <Icon
              size={35}
              type="font-awesome"
              name="plus"
              iconStyle={styles.labelIconCreate}
              color="tomato"
            />
          </TouchableOpacity>
        </View>

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
            <Row>
              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewPostBy}>
                    <Row style={styles.rowPostBy}>
                      <Col size={15}>
                        <Avatar
                          rounded
                          source={{
                            uri:
                              'https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/p960x960/50688968_787150878155428_8692489284222976000_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=NgLLgz0HThwAX8QSxZN&_nc_ht=scontent.fvca1-1.fna&_nc_tp=6&oh=395bd4faa92119e933b439c13699cd65&oe=5EB28331',
                          }}
                        />
                      </Col>
                      <Col size={85}>
                        <Text style={styles.txtUserName}>
                          Nguyen Tuan Vu
                        </Text>
                      </Col>
                    </Row>
                  </View>

                  <View style={styles.viewDetail}>
                    <Text style={styles.txtDec}>
                      Cho mình hỏi đây là hoa gì
                    </Text>
                  </View>
                  <View style={styles.viewImg}>
                    <Image
                      source={{
                        uri:
                          'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg',
                      }}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewBtn}>
                    <TouchableOpacity
                      style={styles.touchAdd}
                      onPress={() =>
                        this.props.navigation.navigate('AddDetail')
                      }>
                      <Col size={15} style={styles.colBtnAdd}>
                        <Icon
                          size={20}
                          type="font-awesome"
                          name="edit"
                          iconStyle={styles.labelIconAdd}
                          color="#606770"
                        />
                        <Text style={styles.labelAdd}>Thêm thông tin</Text>
                      </Col>
                    </TouchableOpacity>
                  </View>
                </View>
              </Col>
            </Row>

            <Row>
              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewPostBy}>
                    <Row style={styles.rowPostBy}>
                      <Col size={15}>
                        <Avatar
                          rounded
                          source={{
                            uri:
                              'https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/p960x960/50688968_787150878155428_8692489284222976000_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=NgLLgz0HThwAX8QSxZN&_nc_ht=scontent.fvca1-1.fna&_nc_tp=6&oh=395bd4faa92119e933b439c13699cd65&oe=5EB28331',
                          }}
                        />
                      </Col>
                      <Col size={85}>
                        <Text style={styles.txtUserName}>
                          Nguyen Tuan Vu
                        </Text>
                      </Col>
                    </Row>
                  </View>
                  <View style={styles.viewDetail}>
                    <Text style={styles.txtDec}>
                      Cho mình hỏi đây là hoa gì
                    </Text>
                  </View>
                  <View style={styles.viewImg}>
                    <Image
                      source={{
                        uri:
                          'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg',
                      }}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewBtn}>
                    <TouchableOpacity
                      style={styles.touchAdd}
                      onPress={() =>
                        this.props.navigation.navigate('AddDetail')
                      }>
                      <Col size={15} style={styles.colBtnAdd}>
                        <Icon
                          size={20}
                          type="font-awesome"
                          name="edit"
                          iconStyle={styles.labelIconAdd}
                          color="#606770"
                        />
                        <Text style={styles.labelAdd}>Thêm thông tin</Text>
                      </Col>
                    </TouchableOpacity>
                  </View>
                </View>
              </Col>
            </Row>

            <Row>
              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewPostBy}>
                    <Row style={styles.rowPostBy}>
                      <Col size={15}>
                        <Avatar
                          rounded
                          source={{
                            uri:
                              'https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/p960x960/50688968_787150878155428_8692489284222976000_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=NgLLgz0HThwAX8QSxZN&_nc_ht=scontent.fvca1-1.fna&_nc_tp=6&oh=395bd4faa92119e933b439c13699cd65&oe=5EB28331',
                          }}
                        />
                      </Col>
                      <Col size={85}>
                        <Text style={styles.txtUserName}>
                          Nguyen Tuan Vu
                        </Text>
                      </Col>
                    </Row>
                  </View>
                  <View style={styles.viewDetail}>
                    <Text style={styles.txtDec}>
                      Cho mình hỏi đây là hoa gì
                    </Text>
                  </View>
                  <View style={styles.viewImg}>
                    <Image
                      source={{
                        uri:
                          'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg',
                      }}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewBtn}>
                    <TouchableOpacity
                      style={styles.touchAdd}
                      onPress={() =>
                        this.props.navigation.navigate('AddDetail')
                      }>
                      <Col size={15} style={styles.colBtnAdd}>
                        <Icon
                          size={20}
                          type="font-awesome"
                          name="edit"
                          iconStyle={styles.labelIconAdd}
                          color="#606770"
                        />
                        <Text style={styles.labelAdd}>Thêm thông tin</Text>
                      </Col>
                    </TouchableOpacity>
                  </View>
                </View>
              </Col>
            </Row>
          </Grid>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(HomeScreen);