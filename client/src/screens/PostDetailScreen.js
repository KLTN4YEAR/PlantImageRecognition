import * as React from 'react';
import {Text, View, TextInput, Image, FlatList} from 'react-native';
import {styles} from '../public/styleSheets/styleDetailPost';
import {connect} from 'react-redux';
import {getPostInfo} from '../action/postAction';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Avatar, Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {auth} from '../config/helper';
import moment from 'moment';
import localization from 'moment/locale/vi';
import {contribute} from '../json/contribute';
import {
  Button,
  Modal,
  Provider,
  List,
  TextareaItem,
} from '@ant-design/react-native';

const Item = List.Item;
const Brief = Item.Brief;

moment.updateLocale('vi', localization);

class DetailPostScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      modalItem: {},
    };
  }
  async componentDidMount() {
    const {route, getPostInfo} = this.props;
    const id = route.params?.post._id;
    const credentials = await auth.isAuthenticated();
    if (id) {
      await getPostInfo(credentials, id);
    }
  }

  async componentDidUpdate(prevProps) {
    const {route, getPostInfo} = this.props;
    const id = route.params?.post._id;
    const credentials = await auth.isAuthenticated();
    if (route !== prevProps.route) {
      await getPostInfo(credentials, id);
    }
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onClickComment = () => {
    const {navigation, route} = this.props;
    navigation.navigate('AddDetail', {
      post: route.params?.post,
    });
  };

  renderInfor() {
    const {post, route, contributes,navigation} = this.props;
   
    return (
      <View style={styles.scrollView}>
        {route.params?.post ? (
          <>
            {/* <Animatable.View animation="fadeInUp" style={styles.viewImages}> */}
            {route.params?.post.images ? (
              route.params?.post.images.map((item, index) => {
                return (
                  <Image
                    key={index}
                    source={{uri: item}}
                    style={styles.imgPlantCarousel}
                  />
                );
              })
            ) : (
              <Text>Không có ảnh</Text>
            )}
            {/* </Animatable.View> */}
            <View style={styles.viewPostBy}>
              <Grid style={styles.viewPostBy}>
                <Row style={styles.rowPostBy}>
                  <Col size={15}>
                    <Avatar
                      rounded
                      source={{
                        uri: route.params?.post.postedBy.avatar,
                      }}
                      size={50}
                    />
                  </Col>
                  <Col size={85} style={styles.colPostBy}>
                    <Text style={styles.txtUserName}>
                      {route.params?.post.postedBy.fullName
                        ? route.params?.post.postedBy.fullName.trim()
                        : 'Unknown'}
                    </Text>
                    <Text style={styles.txtCreated}>
                      {route.params?.post.created
                        ? moment(
                            route.params?.post.created,
                            'YYYY-MM-DD HH:mm:ss.SSS[Z]',
                          )
                            .startOf('day')
                            .fromNow()
                        : '01/01/1900'}
                    </Text>
                    {route.params?.post?.mentionedPlant?.nameVN && (
                      <TouchableOpacity
                        style={styles.btnPlantKind}
                        onPress={() => {
                          navigation.navigate(
                            'PlantInfo',
                            {
                              fId:
                                route.params?.post
                                  ?.mentionedPlant
                                  ?._id,
                              backScreen: 'Post',
                            },
                          );
                        }}>
                        <Text style={styles.txtKind}>
                          # {route.params?.post.mentionedPlant.nameVN}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </Col>
                </Row>
              </Grid>
            </View>
            <View style={styles.viewContent}>
              <TextInput
                multiline={true}
                style={styles.txtDec}
                editable={false}
                value={route.params?.post.content.trim()}
              />
            </View>
            <View style={styles.lblContribute}>
              <Image
                source={{
                  uri:
                    'https://img.icons8.com/plasticine/25/000000/delete-chat--v2.png',
                }}
                style={{width: 25, height: 25}}
              />
              <Text style={styles.txtLblContribute}>Bình luận & Đóng góp</Text>
              <TouchableOpacity
                onPress={this.onClickComment}
                style={styles.btnComment}>
                <Icon
                  size={20}
                  type="font-awesome"
                  name="comments-o"
                  iconStyle={styles.labelIconAdd}
                  color="rgb(242,235,223)"
                />
              </TouchableOpacity>
            </View>
            {contributes?.length === 0 && (
              <Text
                style={{
                  color: '#ffffff',
                  padding: 10,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}>
                Chưa có đóng góp nào!!!
              </Text>
            )}
          </>
        ) : (
          <Text>Không có dữ liệu</Text>
        )}
      </View>
    );
  }
  render() {
    const {contributes, navigation} = this.props;

    return (
      <Provider style={{marginTop: 30}}>
        <View style={styles.viewHeader}>
          <TouchableOpacity
            style={styles.btnBack}
            onPress={() => navigation.goBack()}>
            <Icon
              type="font-awesome"
              name="arrow-left"
              style={styles.icKind}
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.viewFlatList}
          keyExtractor={(item, index) => index.toString()}
          data={contributes}
          scrollEnabled={true}
          renderItem={({item, index}) =>
            item ? (
              <View style={styles.viewList}>
                <View style={styles.viewContribute}>
                  <View style={styles.avatarContribute}>
                    {item.contributedBy.avatar ? (
                      <Image
                        source={{
                          uri: item.contributedBy.avatar,
                        }}
                        style={styles.imgContribute}
                      />
                    ) : (
                      <Image
                        source={{
                          uri:
                            'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/p960x960/86754934_110028183920634_6159064582288572416_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=6gDoX1dsaNIAX8O-dLU&_nc_ht=scontent.fsgn2-2.fna&_nc_tp=6&oh=0082922dc1055e1846287b6e6b420ad1&oe=5F1D6D21',
                        }}
                        style={styles.imgContribute}
                      />
                    )}
                    {item.nameVN && (
                      <TouchableOpacity
                        key={item.nameVN}
                        onPress={() =>
                          navigation.navigate('Contribute', {
                            contribute: item,
                          })
                        }
                        style={styles.btnViewCB}>
                        <Text style={styles.txtBtnCB}>Xem đóng góp</Text>
                      </TouchableOpacity>
                    )}
                  </View>

                  <View style={styles.contentContribute}>
                    <View style={styles.headerContribute}>
                      <Text style={styles.nameContribute}>
                        {item.contributedBy.fullName
                          ? item.contributedBy.fullName
                          : 'unknown '}
                      </Text>
                      <Text style={styles.dateContribute}>
                        {moment(item.created).format('DD/MM/YYYY')}
                      </Text>
                    </View>
                    <View style={styles.viewCommentContribute}>
                      <Text style={styles.txtCommentContribute}>
                        {item.comment ? item.comment : item.nameVN}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ) : (
              <View style={styles.viewList}>
                <Text>loading</Text>
              </View>
            )
          }
          ListHeaderComponent={this.renderInfor.bind(this)}
          ListFooterComponent={<View style={{marginBottom: 55}} />}
        />
      </Provider>
    );
  }
}
function mapStateToProp(state) {
  return {
    authenticate: state.auth.isAuthenticated,
    post: state.post.post.post,
    contributes: state.post.post.contributes,
  };
}

export default connect(
  mapStateToProp,
  {getPostInfo},
)(DetailPostScreen);
