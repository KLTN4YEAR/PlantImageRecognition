import * as React from 'react';
import {Text, ScrollView, TouchableOpacity} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {styles} from '../public/styleSheets/styleViewInfo';
import {Icon} from 'react-native-elements';
import AvatarCard from '../components/AvatarCard';
import {connect} from 'react-redux';
import {auth} from '../config/helper';
import {getInfo} from '../action/userAction';
import {logout} from '../action/authAction';
var moment = require('moment');
class ViewInfo extends React.Component {
  state = {
    email: '',
    fullName: '',
    birthday: '',
    gender: '',
    address: '',
    created: '',
    updated: '',
  };
  async componentDidMount() {
    await this.loadData();
  }

  loadData = async () => {
    const data = await auth.isAuthenticated();
    if (data) {
      await this.props.getInfo(data, data.user._id);
    }
  };

  onClickLogout = async () => {
    await this.props.logout();
    const data = await auth.isAuthenticated();
    if (!data) {
      await this.props.navigation.navigate('Login');
    }
  };

  render() {
    const {navigation, profile} = this.props;
    return (
      <ScrollView style={styles.container}>
        <AvatarCard navigation={navigation} />
        <Row size={60} style={styles.viewInfo}>
          <Grid>
            <Row style={styles.rowEdit}>
              <Col size={85} style={styles.editCol}>
                <TouchableOpacity
                  style={styles.touchEdit}
                  onPress={() =>
                    navigation.navigate('EditInfo', {
                      profile: profile,
                    })
                  }>
                  <Col size={30} style={styles.colBtnEdit}>
                    <Icon
                      size={20}
                      type="font-awesome"
                      name="edit"
                      iconStyle={styles.labelIconEdit}
                      color="white"
                    />
                    <Text style={styles.labelEdit}>Chỉnh sửa thông tin</Text>
                  </Col>
                </TouchableOpacity>
              </Col>
              <Col size={15} style={styles.logoutCol}>
                <TouchableOpacity
                  style={styles.touchLogout}
                  onPress={this.onClickLogout}>
                  <Col size={30} style={styles.colBtnLogout}>
                    <Icon
                      size={20}
                      type="font-awesome"
                      name="sign-out"
                      iconStyle={styles.labelIconLogout}
                      color="white"
                    />
                  </Col>
                </TouchableOpacity>
              </Col>
            </Row>

            <Row style={styles.rowInfo}>
              <Col size={30} style={styles.colInfo}>
                <Icon
                  type="font-awesome"
                  name="user"
                  style={styles.labelIcon}
                  color="#59c393"
                />
                <Text style={styles.labelTxt}>Tên:</Text>
              </Col>
              <Col size={70}>
                {profile.fullName ? (
                  <Text style={styles.contentTxt}>{profile.fullName}</Text>
                ) : (
                  <Text style={styles.contentTxt}>Chưa cập nhật</Text>
                )}
              </Col>
            </Row>

            <Row style={styles.rowInfo}>
              <Col size={30}>
                <Icon
                  type="font-awesome"
                  name="venus-mars"
                  style={styles.labelIcon}
                  color="#59c393"
                />
                <Text style={styles.labelTxt}>Giới tính:</Text>
              </Col>
              <Col size={70}>
                <Text style={styles.contentTxt}>{profile.gender}</Text>
              </Col>
            </Row>

            <Row style={styles.rowInfo}>
              <Col size={30}>
                <Icon
                  type="font-awesome"
                  name="envelope-square"
                  style={styles.labelIcon}
                  color="#59c393"
                />

                <Text style={styles.labelTxt}>Email:</Text>
              </Col>
              <Col size={70}>
                {profile.email ? (
                  <Text style={styles.contentTxt}>{profile.email}</Text>
                ) : (
                  <Text style={styles.contentTxt}>Chưa cập nhật!</Text>
                )}
              </Col>
            </Row>

            <Row style={styles.rowInfo}>
              <Col size={30}>
                <Icon
                  type="font-awesome"
                  name="birthday-cake"
                  style={styles.labelIcon}
                  color="#59c393"
                />
                <Text style={styles.labelTxt}>Sinh nhật:</Text>
              </Col>
              <Col size={70}>
                {profile.birthday ? (
                  <Text style={styles.contentTxt}>
                    {moment(profile.birthday).format('DD/MM/YYYY')}
                  </Text>
                ) : (
                  <Text style={styles.contentTxt}>Chưa cập nhật!</Text>
                )}
              </Col>
            </Row>
          </Grid>
        </Row>
      </ScrollView>
    );
  }
}

function mapStateToProp(state) {
  return {
    authenticate: state.auth.isAuthenticated,
    profile: state.user.profile,
    avatar: state.user.avatar,
  };
}

export default connect(
  mapStateToProp,
  {getInfo, logout},
)(ViewInfo);
