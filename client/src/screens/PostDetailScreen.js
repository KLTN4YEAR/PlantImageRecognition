import * as React from 'react';
import {Text, View, TextInput, Image} from 'react-native';
import {styles} from '../public/styleSheets/styleDetailPost';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {auth} from '../config/helper';
import {getPostInfo} from '../action/postAction';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Avatar} from 'react-native-elements';
import {Icon} from 'react-native-elements';
const listImage = [
  {
    url:
      'https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    url:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/index-shade-plants-1519417512.jpg?crop=1.00xw:1.00xh;0,0&resize=480:*',
  },
  {
    url:
      'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];
class DetailPostScreen extends React.Component {
  UNSAFE_componentWillMount = async () => {
    const idPost = this.props.route.params?.post._id;
    const data = await auth.isAuthenticated();
    await this.props.getPostInfo(data, idPost);
  };
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.viewImages}>
          {this.props.post.post.images.map((item, index) => {
            return (
              <Image
                key={index}
                source={{uri: item}}
                style={styles.imgPlantCarousel}
              />
            );
          })}
        </View>
        <View style={styles.viewPostBy}>
          <Grid style={styles.viewPostBy}>
            <Row style={styles.rowPostBy}>
              <Col size={15}>
                <Avatar
                  rounded
                  source={{uri: this.props.post.post.postedBy.avatar}}
                />
              </Col>
              <Col size={60}>
                <Text style={styles.txtUserName}>
                  {this.props.post.post.postedBy.fullName}
                </Text>
                <Text style={styles.txtCreated}>
                  {this.props.post.post.created}
                </Text>
              </Col>
              <Col size={25}>
                <TouchableOpacity style={styles.btnPlantKind}>
                  <Text style={styles.txtKind}>#Cúc</Text>
                </TouchableOpacity>
              </Col>
            </Row>
          </Grid>
        </View>
        <View style={styles.viewContent}>
          <TextInput
            multiline={true}
            style={styles.txtDec}
            editable={false}
            placeholder={this.props.post.post.content}
          />
        </View>

        {/* Đóng góp ở đây nè */}
        <View style={styles.viewContribute}>
          <Text style={styles.txtContribute}>Đóng góp ở đây nè !!!!</Text>
        </View>
      </ScrollView>
    );
  }
}
function mapStateToProp(state) {
 
  return {
    authenticate: state.auth.isAuthenticated,
    post: state.post,
  };
}

export default connect(
  mapStateToProp,
  {getPostInfo},
)(DetailPostScreen);
