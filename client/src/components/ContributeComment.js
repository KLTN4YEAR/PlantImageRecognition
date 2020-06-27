import * as React from 'react';
import {Text, View, TextInput, Image} from 'react-native';
import {styles} from '../public/styleSheets/styleContributeComment';
import {connect} from 'react-redux';
import {getPostInfo} from '../action/postAction';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Avatar} from 'react-native-elements';
import {auth} from '../config/helper';
import moment from 'moment';
import localization from 'moment/locale/vi';

moment.updateLocale('vi', localization);
class ContributeComment extends React.Component {
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
        <View style={styles.viewContribute}>
          <View style={styles.avatarContribute}>
            <Image
              source={{
                uri:
                  'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/p960x960/86754934_110028183920634_6159064582288572416_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=6gDoX1dsaNIAX8O-dLU&_nc_ht=scontent.fsgn2-2.fna&_nc_tp=6&oh=0082922dc1055e1846287b6e6b420ad1&oe=5F1D6D21',
              }}
              style={styles.imgContribute}
            />
            <TouchableOpacity style={styles.btnViewCB}><Text style={styles.txtBtnCB}>Xem đóng góp</Text></TouchableOpacity>
          </View>

          <View style={styles.contentContribute}>
            <View style={styles.headerContribute}>
              <Text style={styles.nameContribute}>Nguyen Tuan Vu</Text>
              <Text style={styles.dateContribute}>27/06/2020</Text>
            </View>
            <View style={styles.viewCommentContribute}>
              <Text style={styles.txtCommentContribute}>
                Vu da binh luan nhieu dong o day hoa nay la hoa gi da moi nguoi
                oi :)))))))))))))))
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.viewContribute}>
          <View style={styles.avatarContribute}>
            <Image
              source={{
                uri:
                  'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/p960x960/86754934_110028183920634_6159064582288572416_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=6gDoX1dsaNIAX8O-dLU&_nc_ht=scontent.fsgn2-2.fna&_nc_tp=6&oh=0082922dc1055e1846287b6e6b420ad1&oe=5F1D6D21',
              }}
              style={styles.imgContribute}
            />
          </View>

          <View style={styles.contentContribute}>
            <View style={styles.headerContribute}>
              <Text style={styles.nameContribute}>Nguyen Tuan Vu</Text>
              <Text style={styles.dateContribute}>27/06/2020</Text>
            </View>
            <View style={styles.viewCommentContribute}>
              <Text style={styles.txtCommentContribute}>
                Vu da binh luan nhieu dong o day hoa nay la hoa gi da moi nguoi
                oi :)))))))))))))))
              </Text>
            </View>
          </View>
        </View>
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
)(ContributeComment);
