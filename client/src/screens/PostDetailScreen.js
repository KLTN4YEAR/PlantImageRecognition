import * as React from 'react';
import {Text, View, TextInput, Image, FlatList} from 'react-native';
import {styles} from '../public/styleSheets/styleDetailPost';
import {connect} from 'react-redux';
import {getPostInfo} from '../action/postAction';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Avatar} from 'react-native-elements';
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
    };
  }
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  renderInfor() {
    const {post, route} = this.props;
    return (
      <View style={styles.scrollView}>
        {route.params?.post ? (
          <>
            <Animatable.View animation="fadeInUp" style={styles.viewImages}>
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
            </Animatable.View>
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
                  <Col size={60} style={styles.colPostBy}>
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
                  </Col>
                  <Col size={25}>
                    {route.params?.post.namePlant && (
                      <TouchableOpacity style={styles.btnPlantKind}>
                        <Text style={styles.txtKind}>
                          # {route.params?.post.namePlant}
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
              <Text style={styles.txtLblContribute}>
                Bình luận & Đóng góp
              </Text>
            </View>
          </>
        ) : (
          <Text>Không có dữ liệu</Text>
        )}
      </View>
    );
  }
  render() {
    const footerButtons = [
      {text: 'Cancel', onPress: () => console.log('cancel')},
      {text: 'Ok', onPress: () => console.log('ok')},
    ];

    return (
      <Provider>
        <FlatList
          style={styles.viewFlatList}
          keyExtractor={(item, index) => index.toString()}
          data={contribute}
          scrollEnabled={true}
          renderItem={({item, index}) =>
            item ? (
              <View style={styles.viewList}>
                <View style={styles.viewModal}>
                  <Modal
                    title="ĐÓNG GÓP"
                    transparent
                    onClose={this.onClose}
                    maskClosable
                    visible={this.state.visible}
                    closable
                    animationType="slide"
                    footer={footerButtons}>
                    <ScrollView
                      style={styles.modalContribute}
                      automaticallyAdjustContentInsets={false}
                      showsHorizontalScrollIndicator={false}
                      showsVerticalScrollIndicator={false}>
                      <List
                        renderHeader={'Thông tin người dùng đã đóng góp'}>
                        <Item
                          arrow="down"
                          thumb="https://img.icons8.com/bubbles/250/000000/edit.png"
                          onClick={() => {}}>
                          Thông tin cơ bản
                        </Item>
                        <Item
                          extra={
                            item.nameVN ? item.nameVN : 'Chưa cập nhật'
                          }>
                          Tên hoa
                        </Item>
                        <Item
                          extra={
                            item.familiar ? item.familiar : 'Chưa cập nhật'
                          }>
                          Phân loại
                        </Item>
                        <Item
                          extra={
                            item.location ? item.location : 'Chưa cập nhật'
                          }>
                          Phân bố
                        </Item>
                        <Item
                          arrow="down"
                          thumb="https://img.icons8.com/bubbles/250/000000/plus.png"
                          onClick={() => {}}>
                          Thông tin thêm
                        </Item>
                        <Item multipleLine>Đặc điểm</Item>
                        <TextareaItem
                          autoHeight
                          style={{paddingVertical: 5}}
                          rows={3}
                          value={item.characteristics}
                          editable={false}
                        />
                        <Item multipleLine>Ý nghĩa</Item>
                        <TextareaItem
                          autoHeight
                          style={{paddingVertical: 5}}
                          rows={3}
                          value={item.meaning}
                          editable={false}
                        />
                      </List>
                    </ScrollView>
                  </Modal>
                </View>

                <Animatable.View
                  animation="fadeInDown"
                  style={styles.viewContribute}>
                  <View style={styles.avatarContribute}>
                    {item.avatar ? (
                      <Image
                        source={{
                          uri: item.avatar,
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
                        onPress={() => this.setState({visible: true})}
                        style={styles.btnViewCB}>
                        <Text style={styles.txtBtnCB}>Xem đóng góp</Text>
                      </TouchableOpacity>
                    )}
                  </View>

                  <View style={styles.contentContribute}>
                    <View style={styles.headerContribute}>
                      <Text style={styles.nameContribute}>
                        {item.fullName ? item.fullName : 'unknown '}
                      </Text>
                      <Text style={styles.dateContribute}>
                        {moment(item.created).format('DD/MM/YYYY')}
                      </Text>
                    </View>
                    <View style={styles.viewCommentContribute}>
                      <Text style={styles.txtCommentContribute}>
                        {item.comment ? item.comment : ''}
                      </Text>
                    </View>
                  </View>
                </Animatable.View>
              </View>
            ) : (
              <Text>loading</Text>
            )
          }
          // ItemSeparatorComponent={() => (
          //   <View style={styles.separator} />
          // )}
          ListHeaderComponent={this.renderInfor.bind(this)}
        />

        {/* <ContributeComment /> */}
      </Provider>
    );
  }
}
function mapStateToProp(state) {
  return {
    authenticate: state.auth.isAuthenticated,
    post: state.post.post,
  };
}

export default connect(
  mapStateToProp,
  {getPostInfo},
)(DetailPostScreen);
