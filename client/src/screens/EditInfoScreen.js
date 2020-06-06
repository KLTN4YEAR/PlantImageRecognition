'use strict';
import * as React from 'react';
import {Text, View, ScrollView, ImageBackground} from 'react-native';

import {Picker} from '@react-native-community/picker';
import {Input, Image} from 'react-native-elements';
import {styles} from '../public/styleSheets/styleEditInfo';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {auth} from '../config/helper';
import {UpdateUserInfo, successMess} from '../action/userAction';
import ValidationComponent from 'react-native-form-validator';
import Toast from 'react-native-simple-toast';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

var moment = require('moment');
class EditInfo extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fullName: '',
      birthday: '',
      gender: '',
      address: '',
      profile: {
        email: '',
        fullName: '',
        birthday: '',
        gender: '',
        address: '',
      },
      showDatePicker: false,
      selectedItems: [],
    };
  }

  async componentDidMount() {
    await this.initValueForUser();
  }

  async componentDidUpdate(prevProps) {
    const {profile} = this.props;
    if (profile !== prevProps.profile) {
      await this.initValueForUser();
    }
  }

  initValueForUser() {
    const {profile} = this.props;
    this.setState({
      email: profile.email,
      fullName: profile.fullName,
      birthday: profile.birthday,
      gender: profile.gender,
      address: profile.address,
    });
  }

  //lưu những thay đổi nơi input vào state
  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  formatDate(value) {
    const date = value;
    const d = new Date(date);
    const dateFormat =
      d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ';
    return dateFormat;
  }

  onValidate() {
    return this.validate({
      name: {minlength: 4, maxlength: 25, required: true, spacing: true},
      email: {email: true, required: true, spacing: true},
      number: {numbers: true, required: true, spacing: true},
    });
  }

  async onSubmit() {
    if (this.onValidate()) {
      const profile = this.state.profile;
      profile['email'] = this.state.email;
      profile['fullName'] = this.state.fullName;
      profile['birthday'] = this.state.birthday;
      profile['gender'] = this.state.gender;
      profile['address'] = this.state.address;
      await this.updateUser(profile);
    }
  }

  updateUser = async profile => {
    const {navigation, UpdateUserInfo} = this.props;
    const credentials = await auth.isAuthenticated();
    await UpdateUserInfo(credentials, credentials.user._id, profile);
    if (successMess == 'update success') {
      Toast.show('Cập nhật thành công!');
      navigation.goBack();
    } else {
      Toast.show('Lỗi trong quá trình xử lý!');
      navigation.goBack();
    }
  };

  showDatePicker = () => {
    this.setState({showDatePicker: true});
  };

  hideDatePicker = () => {
    this.setState({showDatePicker: false});
  };

  onChangeDate = (event, selectedDate) => {
    if (selectedDate || date) {
      const currentDate = selectedDate || date;
      this.setState({birthday: currentDate, showDatePicker: false});
    }
  };

  onSelectedItemsChange = selectedItems => {
    this.setState({selectedItems});
  };

  render() {
    const {profile} = this.props;
    const {showDatePicker} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.viewScroll}>
          {profile ? (
            <>
              <View style={styles.viewInfo}>
                <Input
                  label="Tên"
                  ref="name"
                  defaultValue={this.state.fullName}
                  inputStyle={styles.labelEdit}
                  multiline={true}
                  onChangeText={name => this.setState({fullName: name})}
                  onChange={this.onChange}
                />
                <Text style={styles.validateMess}>
                  {this.isFieldInError('name') &&
                  this.getErrorsInField('name')
                    ? this.getErrorsInField('name')
                    : ''}
                </Text>

                <Input
                  ref="email"
                  label="Email"
                  defaultValue={this.state.email}
                  inputStyle={styles.labelEdit}
                  multiline={true}
                  onChangeText={email => this.setState({email: email})}
                  onChange={this.onChange}
                />
                <Input
                  ref="gender"
                  label="Giới tính"
                  defaultValue={this.state.gender}
                  inputStyle={styles.labelEdit}
                  multiline={true}
                  onChangeText={gender => this.setState({gender: gender})}
                  onChange={this.onChange}
                />
                <Text style={styles.validateMess}>
                  {this.isFieldInError('email') &&
                  this.getErrorsInField('email')
                    ? this.getErrorsInField('email')
                    : ''}
                </Text>
                <Input
                  defaultValue={this.state.address}
                  multiline={true}
                  inputStyle={styles.labelEdit}
                  onChangeText={text => this.setState({address: text})}
                  onChange={this.onChange}
                  label="Địa chỉ"
                />
                <Text style={styles.validateMess}>
                  {this.isFieldInError('address') &&
                  this.getErrorsInField('address')
                    ? this.getErrorsInField('address')
                    : ''}
                </Text>
                <Input
                  label="Sinh nhật"
                  value={moment(this.state.birthday).format('DD/MM/YYYY')}
                  multiline={true}
                  inputStyle={styles.labelEdit}
                  disabled
                  rightIcon={
                    <TouchableOpacity onPress={this.showDatePicker}>
                      <Icon name="event" size={24} color="#59c393" />
                    </TouchableOpacity>
                  }
                />
              </View>
            </>
          ) : (
            <Text>Có lỗi xảy ra!</Text>
          )}
          {showDatePicker && (
            <DateTimePicker
              isVisible={this.state.showDatePicker}
              testID="dateTimePicker"
              value={
                this.state.birthday
                  ? Date.parse(this.state.birthday)
                  : new Date(1598051730000)
              }
              mode="date"
              display="default"
              onChange={this.onChangeDate}
              onCancel={this.hideDatePicker}
            />
          )}
        </ScrollView>
        <View style={styles.viewButton}>
          {/* <TouchableOpacity
            style={styles.btnCancel}
            onPress={this.onSubmit.bind(this)}>
            <Text style={styles.lblButton}>Huỷ</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.btnSave}
            onPress={this.onSubmit.bind(this)}>
            <Text style={styles.lblButton}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProp(state) {
  return {
    authenticate: state.auth.isAuthenticated,
    profile: state.user.profile,
  };
}

export default connect(
  mapStateToProp,
  {UpdateUserInfo},
)(EditInfo);
