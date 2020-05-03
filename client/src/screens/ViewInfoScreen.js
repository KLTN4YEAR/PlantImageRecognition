import * as React from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles } from '../public/styleSheets/styleViewInfo';
import { Icon } from 'react-native-elements'
import AvatarCard from '../components/AvatarCard';
import { connect } from 'react-redux';
import { auth } from '../config/helper';
import { getInfo } from '../action/userAction';
class ViewInfo extends React.Component {

  componentDidMount = async () => {
    const data = await auth.isAuthenticated();
    //console.log('info',data);
    if (data) {
        //console.log('profile',data.user._id);
         await this.props.getInfo(data, data.user._id);
    }
    
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <AvatarCard navigation={this.props.navigation} />
        <Row size={60} style={styles.viewInfo}>
          <Grid>
            <Row style={styles.rowEdit}>
              <TouchableOpacity style={styles.touchEdit} onPress={() => this.props.navigation.navigate('EditInfo')}>
                <Col size={30} style={styles.colBtnEdit}>
                  <Icon
                    size={20}
                    type='font-awesome'
                    name='edit'
                    iconStyle={styles.labelIconEdit}
                    color='white' />
                  <Text style={styles.labelEdit}>Chỉnh sửa thông tin</Text>
                </Col>
              </TouchableOpacity>
            </Row>

            <Row style={styles.rowInfo}>
              <Col size={30} style={styles.colInfo}>
                <Icon
                  type='font-awesome'
                  name='user'
                  style={styles.labelIcon}
                  color='tomato' />
                <Text style={styles.labelTxt}>Tên:</Text>
              </Col>
              <Col size={70}>
                <Text style={styles.contentTxt}>{this.props.profile.fullName}</Text>
              </Col>
            </Row>

            <Row style={styles.rowInfo}>
              <Col size={30}>
                <Icon
                  type='font-awesome'
                  name='venus-mars'
                  style={styles.labelIcon}
                  color='tomato' />
                <Text style={styles.labelTxt}>Giới tính:</Text>
              </Col>
              <Col size={70}>
                <Text style={styles.contentTxt}>Nam</Text>
              </Col>
            </Row>

            <Row style={styles.rowInfo}>
              <Col size={30}>
                <Icon
                  type='font-awesome'
                  name='envelope-square'
                  style={styles.labelIcon}
                  color='tomato' />

                <Text style={styles.labelTxt}>Email:</Text>
              </Col>
              <Col size={70}>
                <Text style={styles.contentTxt}>{this.props.email}</Text>
              </Col>
            </Row>

            <Row style={styles.rowInfo}>
              <Col size={30}>
                <Icon
                  type='font-awesome'
                  name='birthday-cake'
                  style={styles.labelIcon}
                  color='tomato' />
                <Text style={styles.labelTxt}>Sinh nhật:</Text>
              </Col>
              <Col size={70}>
                <Text style={styles.contentTxt}>23/11/1998</Text>
              </Col>
            </Row>

            <Row style={styles.rowInfo}>
              <Col size={30}>
                <Icon
                  type='font-awesome'
                  name='pagelines'
                  style={styles.labelIcon}
                  color='tomato' />
                <Text style={styles.labelTxt}>Đóng góp:</Text>
              </Col>
              <Col size={70}>
                <Text style={styles.contentTxt}>10
              </Text>
              </Col>
            </Row>
          </Grid>
        </Row>
      </ScrollView>
    );
  }
}

function mapStateToProp(state) {
  var email;
  if (state.user.profile.facebook !== undefined) {
    email = state.user.profile.facebook.email
  }
  return {
    authenticate: state.auth.isAuthenticated,
    profile: state.user.profile,
    avatar: state.user.avatar,
    email: email,
  }
}


export default connect(mapStateToProp, { getInfo })(ViewInfo);