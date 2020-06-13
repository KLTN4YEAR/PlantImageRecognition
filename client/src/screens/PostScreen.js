import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from 'react-native';
import {styles} from '../public/styleSheets/styleHomeCard';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Avatar} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {auth} from '../config/helper';
import {getListPost} from '../action/postAction';
import {getInfo} from '../action/userAction';

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
    await this.loadMoreData();
    await this.loadData();
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

  loadMoreData = async () => {
    const {getListPost, listPost} = this.props;
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

    const {loading, serverData, refreshing} = this.state;

    return (
      <SafeAreaView style={styles.viewSafeArea}>
        <View style={styles.stylesHead}>
          <TouchableOpacity style={styles.imgAva}>
            {profile.avatar ? (
              <Avatar
                rounded
                source={{
                  uri: profile.avatar,
                }}
              />
            ) : (
              <Avatar
                rounded
                source={require('../public/images/man.png')}
              />
            )}
          </TouchableOpacity>
          <View style={styles.viewLogoHead}>
            <Text style={styles.txtLogoHead}>Cộng đồng</Text>
          </View>
          <TouchableOpacity
            style={styles.btnAdd}
            onPress={() => this.props.navigation.navigate('ImageBefore')}>
            <Icon
              size={30}
              type="material"
              name="add"
              iconStyle={styles.labelIconAdd}
              color="yellow"
            />
          </TouchableOpacity>
        </View>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            style={styles.viewFlatList}
            keyExtractor={(item, index) => index.toString()}
            data={serverData}
            onEndReached={() => this.loadMoreData()}
            onEndReachedThreshold={0.5}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={this.onRefresh.bind(this)}
              />
            }
            renderItem={({item, index}) =>
              item ? (
                <Grid>
                  <Row key={index}>
                    <View style={styles.viewCard}>
                      <View style={styles.viewPostBy}>
                        <Row style={styles.rowPostBy}>
                          <Col size={15}>
                            {item.postedBy.avatar ? (
                              <Avatar
                                rounded
                                source={{
                                  uri: item.postedBy.avatar
                                    ? item.postedBy.avatar
                                    : 'data:image/png;base64,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',
                                }}
                              />
                            ) : (
                              <Avatar
                                rounded
                                source={require('../public/images/man.png')}
                              />
                            )}
                          </Col>
                          <Col size={85}>
                            <Text style={styles.txtUserName} >{item.postedBy?item.postedBy.fullName:"Unknown"}</Text>
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
                                this.props.navigation.navigate(
                                  'DetailPost',
                                  {
                                    post: item,
                                  },
                                )
                              }>
                              <Col size={15} style={styles.colBtnAdd}>
                                <Icon
                                  size={20}
                                  type="font-awesome"
                                  name="info-circle"
                                  iconStyle={styles.labelIconAdd}
                                  color="rgb(242,235,223)"
                                />
                                <Text style={styles.labelAdd}>
                                  Xem chi tiết
                                </Text>
                              </Col>
                            </TouchableOpacity>
                          </Col>
                        </Row>
                      </View>
                    </View>
                  </Row>
                </Grid>
              ) : (
                <Text>loading</Text>
              )
            }
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
