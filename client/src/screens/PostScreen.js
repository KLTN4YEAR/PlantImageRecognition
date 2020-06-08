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
import Toast from 'react-native-simple-toast';
import {getListPost} from '../action/postAction';
import {getInfo} from '../action/userAction';
// Gọi các sqlite function
import {viewAllFlower,addDataToDb} from '../sqlite/dbFlowerOffline';

class PostScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      dataSource: [],
      dataSQLite: [],
      loading: false,
      isListEnd: false,
      serverData: [],
      fetching_from_server: false,
    };
    this.offset = '111111111111';
  }
  //định nghĩa các prop
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.2,
          width: '90%',
          backgroundColor: '#808080',
        }}
      />
    );
  };

  async componentDidMount() {
    await this.checkLogin();
    await this.loadMoreData();
    await this.loadData();
    //xu ly bat dong bo sqlite
    await viewAllFlower(this.getResultFromVA);
  }

  getResultFromVA(result){
    // console.log('re',result);
  }

  loadData = async () => {
    const {getInfo} = this.props;
    const data = await auth.isAuthenticated();
    if (data) {
      await getInfo(data, data.user._id);
    }
  };
  onRefresh() {
    this.setState({
      loading: false,
      isListEnd: false,
      serverData: [],
      fetching_from_server: false,
    });
    this.offset = '111111111111';
    this.loadMoreData();
  }

  checkLogin = async () => {
    const data = await auth.isAuthenticated();
    if (!data) {
      Toast.show('Chưa login!');
    } else {
      Toast.show('Đã login!');
    }
  };

  loadMoreData = async () => {
    const {getListPost} = this.props;
    const {fetching_from_server, isListEnd, serverData} = this.state;

    if (!fetching_from_server && !isListEnd) {
      this.setState(
        {
          fetching_from_server: true,
        },
        async () => {
          const credentials = await auth.isAuthenticated();
          let lstPost = await getListPost(credentials, this.offset);
          if (lstPost.length > 0) {
            this.offset = lstPost[lstPost.length - 1]._id;
            this.setState({
              serverData: [...serverData, ...lstPost],
              fetching_from_server: false,
            });
          } else {
            this.setState({
              fetching_from_server: false,
              isListEnd: true,
            });
          }
        },
      );
    }
  };

  renderFooter() {
    return (
      <View style={styles.footer}>
        {this.state.fetching_from_server ? (
          <ActivityIndicator color="black" style={{margin: 15}} />
        ) : null}
      </View>
    );
  }

  render() {
    const {profile} = this.props;
    return (
      <SafeAreaView style={styles.viewSafeArea}>
        <View style={styles.stylesHead}>
          <Image
            source={require('../public/images/logohead.png')}
            style={styles.imgLogoHead}
          />
          <Text style={styles.txtLogoHead}>RECOGNITION PLANT</Text>
          <TouchableOpacity>
            <Avatar
              rounded
              source={{
                uri: profile.avatar,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnAdd}
            onPress={() => this.props.navigation.navigate('ImageBefore')}>
            <Icon
              size={35}
              type="font-awesome"
              name="plus"
              iconStyle={styles.labelIconAdd}
              color="#DCF2DE"
            />
          </TouchableOpacity>
        </View>
        {this.state.loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            style={styles.viewFlatList}
            keyExtractor={(item, index) => index.toString()}
            data={this.state.serverData}
            onEndReached={() => this.loadMoreData()}
            onEndReachedThreshold={0.5}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh.bind(this)}
              />
            }
            renderItem={({item, index}) => (
              <Grid>
                <Row key={index}>
                  <View style={styles.viewCard}>
                    <View style={styles.viewPostBy}>
                      <Row style={styles.rowPostBy}>
                        <Col size={15}>
                          <Avatar
                            rounded
                            source={{
                              uri: item.postedBy.avatar,
                            }}
                          />
                        </Col>
                        <Col size={85}>
                          <Text style={styles.txtUserName}>
                            {item.postedBy.fullName}
                          </Text>
                        </Col>
                      </Row>
                    </View>
                    <View style={styles.viewDetail}>
                      <Text style={styles.txtDec} numberOfLines={4}>
                        {item.content}
                      </Text>
                    </View>
                    <View style={styles.viewImg}>
                      <Image
                        source={{
                          uri: item.images[0],
                        }}
                        style={styles.imgCard}
                      />
                    </View>
                    <View style={styles.viewBtn}>
                      <Row>
                        <Col size={1}>
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
                                color="rgb(242,235,223)"
                              />
                              <Text style={styles.labelAdd}>
                                Thêm thông tin
                              </Text>
                            </Col>
                          </TouchableOpacity>
                        </Col>
                        <Col size={1}>
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
                                name="info-circle"
                                iconStyle={styles.labelIconAdd}
                                color="rgb(242,235,223)"
                              />
                              <Text style={styles.labelAdd}>Xem chi tiết</Text>
                            </Col>
                          </TouchableOpacity>
                        </Col>
                      </Row>
                    </View>
                  </View>
                </Row>
              </Grid>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListFooterComponent={this.renderFooter.bind(this)}
          />
        )}
      </SafeAreaView>
    );
  }
}

function mapStateToProp(state) {
  return {
    loaded: state.post.loaded,
    isAuthenticate: state.auth.isAuthenticated,
    listPost: state.post.listPost,
    profile: state.user.profile,
  };
}

export default connect(
  mapStateToProp,
  {getListPost, getInfo},
)(PostScreen);
