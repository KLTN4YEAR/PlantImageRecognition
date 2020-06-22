import * as React from 'react';
import {Text, View, TextInput, Image} from 'react-native';
import {styles} from '../public/styleSheets/styleDetailPost';
import {connect} from 'react-redux';
import {getPostInfo} from '../action/postAction';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Avatar} from 'react-native-elements';
import {auth} from '../config/helper';
import moment from 'moment';
import localization from 'moment/locale/vi';

moment.updateLocale('vi', localization);
class DetailPostScreen extends React.Component {
  // async componentDidMount() {
  //   const {getPostInfo, route} = this.props;
  //   const idPost = route.params?.post._id;
  //   const data = await auth.isAuthenticated();
  //   await getPostInfo(data, idPost);
  // }
  // async componentDidUpdate(prevProps) {
  //   const {getPostInfo, post, route} = this.props;
  //   const idPost = route.params?.post._id;
  //   const data = await auth.isAuthenticated();
  //   if (post !== prevProps.post) {
  //     await getPostInfo(data, idPost);
  //   }
  // }
  render() {
    const {post, route} = this.props;
    return (
      <ScrollView style={styles.scrollView}>
        {route.params?.post ? (
          <View>
            <View style={styles.viewImages}>
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
            </View>
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
            <View style={styles.viewContribute}>
              <Text style={styles.txtContribute}>
                Chức năng đóng góp đang hoàn thiện !!!!
              </Text>
            </View>
          </View>
        ) : (
          <Text>Không có dữ liệu</Text>
        )}
      </ScrollView>
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
