import * as React from 'react';
import {Text, ScrollView, TouchableOpacity, View, Button} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {styles} from '../public/styleSheets/styleViewInfo';
import {Icon} from 'react-native-elements';
import AvatarCard from '../components/AvatarCard';
import {connect} from 'react-redux';
import {auth} from '../config/helper';
import {getInfo} from '../action/userAction';
import {logout} from '../action/authAction';
import * as Animatable from 'react-native-animatable';
import RBSheet from 'react-native-raw-bottom-sheet';

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
    const {getInfo} = this.props;
    const data = await auth.isAuthenticated();
    if (data) {
      await getInfo(data, data.user._id);
    }
  };

  onClickLogout = async () => {
    const {logout, navigation} = this.props;
    logout();
    const data = await auth.isAuthenticated();
    if (!data) {
      this.RBSheet.close();
    }
  };

  async componentDidUpdate(prevProps) {
    const {isAuthenticated, navigation} = this.props;
    if (isAuthenticated !== prevProps.isAuthenticated) {
      if (!isAuthenticated) {
        navigation.navigate('Login');
      } else {
        this.loadData();
      }
    }
  }

  onClickEdit = () => {
    const {navigation, profile} = this.props;
    this.RBSheet.close();
    navigation.navigate('EditInfo', {
      profile: profile,
    });
  };

  onClickViewPost = () => {
    const {navigation, profile} = this.props;
    this.RBSheet.close();
    navigation.navigate('PostUser', {
      profile: profile,
    });
  };

  render() {
    const {navigation, profile} = this.props;
    console.log("B",profile)
    return (
      <ScrollView style={styles.container}>
        <AvatarCard navigation={navigation} />

        <View style={styles.iconOption}>
          <TouchableOpacity onPress={() => this.RBSheet.open()}>
            <Icon
              size={30}
              type="font-awesome"
              name="navicon"
              iconStyle={styles.labelIconAdd}
              color="#f1f1f1"
            />
          </TouchableOpacity>
          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={200}
            openDuration={250}
            customStyles={{
              container: {
                justifyContent: 'center',
                alignItems: 'center',
              },
              wrapper: {
                backgroundColor: 'transparent',
              },
            }}>
            <Animatable.View animation="fadeInUp" style={styles.viewOption}>
              <TouchableOpacity
                style={styles.touchEdit}
                onPress={this.onClickEdit}>
                <Icon
                  size={30}
                  type="font-awesome"
                  name="edit"
                  iconStyle={styles.labelIconEdit}
                  color="black"
                />
                <Text style={styles.labelEdit}>Chỉnh sửa thông tin</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchEdit}
                onPress={this.onClickViewPost}>
                <Icon
                  size={30}
                  type="font-awesome"
                  name="newspaper-o"
                  iconStyle={styles.labelIconEdit}
                  color="black"
                />
                <Text style={styles.labelEdit}>Xem bài viết cá nhân</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchEdit}
                onPress={this.onClickLogout}>
                <Icon
                  size={30}
                  type="font-awesome"
                  name="sign-out"
                  iconStyle={styles.labelIconLogout}
                  color="black"
                />

                <Text style={styles.labelEdit}>Đăng xuất</Text>
              </TouchableOpacity>
            </Animatable.View>
          </RBSheet>
        </View>

        {profile ? (
          <Row size={60} style={styles.viewInfo}>
            <Grid>
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
        ) : (
          <ActivityIndicator size="large" color="#33CC08" />
        )}
      </ScrollView>
    );
  }
}

function mapStateToProp(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    profile: state.user.profile,
    avatar: state.user.avatar,
  };
}

export default connect(
  mapStateToProp,
  {getInfo, logout},
)(ViewInfo);
