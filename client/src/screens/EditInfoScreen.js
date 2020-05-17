
'use strict';
import * as React from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles } from '../public/styleSheets/styleEditInfo';
import { Icon } from 'react-native-elements';
import RadioForm from 'react-native-simple-radio-button';
import { connect } from 'react-redux';
import { auth } from '../config/helper';
import { UpdateUserInfo, successMess } from '../action/userAction';
import ValidationComponent from 'react-native-form-validator';

class EditInfo extends ValidationComponent {
  state = {
    email: '',
    fullName: '',
    birthday: '',
    gender: 0,
    address: '',
    profile: {
      email: '',
      fullName: '',
      birthday: '',
      gender: '',
      address: '',
    },
  };

  componentDidMount = async () => {
    await this.useLayoutEffect();
    await this.initValueForUser();
  };

  successAlert = () => {
    Alert.alert(
      'Chúc mừng bạn đã cập nhật thành công!'
    )
  }

  failAlert = () => {
    Alert.alert(
      'Lỗi trong quá trình xử lý!'
    )
  }

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
      this.setState({ birthday: '1999-1-1' })
    }
    else {
      this.setState({ birthday: this.formatDate(this.props.profile.birthday) })
    }

    if (this.props.profile.address == undefined || this.props.profile.address == null) {
      this.setState({ address: 'Đang cập nhật!' })
    }
    else {
      this.setState({ address: this.props.profile.address })
    }
  };

  useLayoutEffect = async () => {
    this.props.navigation.setOptions({
      headerRight: () => (
        <Button buttonStyle={styles.btnDone} onPress={this.onSubmit} icon={
          <Icon
            name="check"
            size={24}
            color="white"
          />
        } iconRight />
        // onPress={() => this.props.navigation.goBack()}
      ),
    });
  };

  //lưu những thay đổi nơi input vào state
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });

  };

  formatDate(value) {
    const date = value;
    const d = new Date(date);
    const dateFormat = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " ";
    return dateFormat;
  };

  onValidate() {
    return this.validate({
      name: { minlength: 4, maxlength: 25, required: true },
      email: { email: true },
      number: { numbers: true },
      birthday: { date: 'YYYY-MM-DD' }
    });
  }

  onSubmit = e => {
    e.preventDefault();//chấp nó bấm submit liên tục nè
    if (this.onValidate()) {
      const profile = this.state.profile;
      profile["email"] = this.state.email;
      profile["fullName"] = this.state.fullName;
      profile["birthday"] = Date.parse(this.state.birthday.toString());
      profile["gender"] = this.state.gender;
      profile["address"] = this.state.address;
      this.updateUser(profile);

    }
  }

  updateUser = async (profile) => {
    const credentials = await auth.isAuthenticated();
    await this.props.UpdateUserInfo(credentials, credentials.user._id, profile);
    if (successMess == 'update success') {
      this.successAlert();
      this.props.navigation.goBack();
    } else {
      this.failAlert();
      this.props.navigation.goBack();
    }
  }

  render() {
    const genderValue = [{ label: 'Nam', value: 0 }, { label: 'Nữ', value: 1 }];
    var initGender;
    if (this.props.profile.gender == 1) {
      initGender = 1;
    }
    else {
      initGender = 0;
    }
    return (
      <ScrollView style={styles.container}>
        <Row size={60} style={styles.viewInfo}>

          <Grid>
            <Row>
              <Text style={styles.validateMess}>
                {this.getErrorMessages()}
              </Text>
            </Row>
            <Row style={styles.rowInfo}>
              <Col size={30} style={styles.colInfo}>
                <Icon
                  type='font-awesome'
                  name='user'
                  style={styles.labelIcon}
                  color='#59c393' />
                <Text style={styles.labelTxt}>Tên</Text>
              </Col>
              <Col size={70}>
                <Input
                  ref="name"
                  value={this.state.fullName}
                  inputStyle={styles.labelEdit}
                  underlineColorAndroid="transparent"
                  multiline={true}
                  onChangeText={name => this.setState({ fullName: name })}
                />
              </Col>
            </Row>
            <Row style={styles.rowInfo}>
              <Col size={30} style={styles.colInfo}>
                <Icon
                  type='font-awesome'
                  name='venus-mars'
                  style={styles.labelIcon}
                  color='#59c393' />
                <Text style={styles.labelTxt}>Giới tính</Text>
              </Col>
              <Col size={70}>
                <View style={styles.viewGender}>
                  <RadioForm
                    radio_props={genderValue}
                    initial={initGender} // you can set as per requirement, initial i set here 0 for male
                    // initial={-1} // you can set as per requirement, initial i set here 0 for male
                    onPress={(number) => { this.setState({ gender: number }) }}
                    buttonSize={12} // size of radiobutton
                    buttonOuterSize={18}
                    selectedButtonColor={'#59c393'}
                    selectedLabelColor={'#59c393'}
                    labelStyle={styles.radioGender}
                    formHorizontal={true}
                    ref="number"
                  />
                </View>
              </Col>
            </Row>
            <Row style={styles.rowInfo}>
              <Col size={30} style={styles.colInfo}>
                <Icon
                  type='font-awesome'
                  name='envelope-square'
                  style={styles.labelIcon}
                  color='#59c393' />
                <Text style={styles.labelTxt}>Email</Text>
              </Col>
              <Col size={70}>
                <Input
                  ref="email"
                  value={this.state.email}
                  inputStyle={styles.labelEdit}
                  underlineColorAndroid="transparent"
                  multiline={true}
                  onChangeText={email => this.setState({ email: email })}
                />
              </Col>
            </Row>
            <Row style={styles.rowInfo}>
              <Col size={30} style={styles.colInfo}>
                <Icon
                  name='place'
                  style={styles.labelIcon}
                  color='#59c393' />
                <Text style={styles.labelTxt}>Địa chỉ</Text>
              </Col>
              <Col size={70}>
                <Input
                  value={this.state.address}
                  underlineColorAndroid="transparent"
                  multiline={true}
                  inputStyle={styles.labelEdit}
                  onChangeText={text => this.setState({ address: text })}
                />
              </Col>
            </Row>

            <Row style={styles.rowInfo}>
              <Col size={30} style={styles.colInfo}>
                <Icon
                  type='font-awesome'
                  name='birthday-cake'
                  style={styles.labelIcon}
                  color='#59c393' />
                <Text style={styles.labelTxt}>Sinh nhật</Text>
              </Col>
              <Col size={70}>
                <Input
                  value={this.state.birthday}
                  ref="birthday"
                  underlineColorAndroid="transparent"
                  multiline={true}
                  inputStyle={styles.labelEdit}
                  onChangeText={birthday => this.setState({ birthday: birthday })}
                />
                {this.isFieldInError('date') && this.getErrorsInField('date').map(errorMessage => <Text>{errorMessage}</Text>)}
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
  }
}

export default connect(mapStateToProp, { UpdateUserInfo })(EditInfo);