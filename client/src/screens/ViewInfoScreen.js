import * as React from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles } from '../public/styleSheets/styleViewInfo';
import { Icon } from 'react-native-elements'
import AvatarCard from '../components/AvatarCard';
import { connect } from 'react-redux';
import { auth } from '../config/helper';
import { getInfo } from '../action/userAction';
import {logout} from '../action/authAction';
class ViewInfo extends React.Component {
  state={
    email:'',
    fullName:'',
    birthday:'',
    gender:'',
    address:'',
    created:'',  
    updated:''    
  };
 
  componentDidMount = async () => {
    console.log('vu')
    this.loadData();
    
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    //console.log(nextProps);
    if(nextProps.profile!=this.props.profile)
    {
      this.setState({ email:nextProps.profile.email});
      this.setState({ fullName: nextProps.profile.fullName });
      this.setState({ address: nextProps.profile.address });
      if(nextProps.profile.birthday!=null){
        this.setState({ birthday: this.formatDate(nextProps.birthday) })
      }
      if (nextProps.profile.gender == 0)
        this.setState({ gender: 'Nam' })
      else
        this.setState({ gender: 'Nữ' })
    }
  }
  formatDate(value){
    const date = value;
    const d = new Date(date);
    const dateFormat = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + " ";
    return dateFormat;
  };
  loadData=async()=>{
    const data = await auth.isAuthenticated();
    if (data) {
      await this.props.getInfo(data, data.user._id);
      await this.initValueForUser();
    }
  };
  onClickLogout = async()=>{
    await this.props.logout();
    const data = await auth.isAuthenticated();
    if(!data){
      await this.props.navigation.navigate('Login');
    }
  };
  initValueForUser = async () => {
    if (this.props.profile.email == undefined || this.props.profile.email == null) {
      this.setState({ email: 'Đang cập nhật!' })
    }
    else {
      this.setState({ email: this.props.profile.email })
    }
    if (this.props.profile.fullName == undefined || this.props.profile.fullName == null) {
      this.setState({ fullName: 'Đang cập nhật!' })
    }
    else {
      this.setState({ fullName: this.props.profile.fullName })
    }
    if (this.props.profile.birthday == undefined || this.props.profile.birthday == null) {
      this.setState({ birthday: 'Đang cập nhật!' })
    }
    else {
      this.setState({ birthday: this.formatDate(this.props.profile.birthday)})
    }
    if (this.props.profile.gender == undefined || this.props.profile.gender == null) {
      this.setState({ gender: 'Đang cập nhật!' })
    }
    else {
      if (this.props.profile.gender == 0)
        this.setState({ gender: 'Nam' })
      else
        this.setState({ gender: 'Nữ' })
    }
    if (this.props.profile.address == undefined || this.props.profile.address == null) {
      this.setState({ address: 'Đang cập nhật!' })
    }
    else {
      this.setState({ address: this.props.profile.address })
    }
  };
  render() {
    var birthVal
    if (this.props.profile.birthday!=null) {
      birthVal = this.formatDate(this.props.profile.birthday);
    }
   
    return (
      <ScrollView style={styles.container}>
        <AvatarCard navigation={this.props.navigation} />
        <Row size={60} style={styles.viewInfo}>
          <Grid>
            <Row style={styles.rowEdit}>
              <Col size={85} style={styles.editCol}>
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
              </Col>
              <Col size={15} style={styles.logoutCol}>
                <TouchableOpacity style={styles.touchLogout} onPress={this.onClickLogout}>
                  <Col size={30} style={styles.colBtnLogout}>
                    <Icon
                      size={20}
                      type='font-awesome'
                      name='sign-out'
                      iconStyle={styles.labelIconLogout}
                      color='white' />
                  </Col>
                </TouchableOpacity>
              </Col>
              
              
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
                  <Text style={styles.contentTxt}>{this.state.fullName}</Text>
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
                <Text style={styles.contentTxt}>{this.state.gender}</Text>
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
                <Text style={styles.contentTxt}>{this.state.email}</Text>
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
                <Text style={styles.contentTxt}>{birthVal}</Text>
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
  return {
    authenticate: state.auth.isAuthenticated,
    profile: state.user.profile,
    avatar: state.user.avatar,
  }
}


export default connect(mapStateToProp, { getInfo,logout })(ViewInfo);