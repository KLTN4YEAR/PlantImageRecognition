'use strict';
import * as React from 'react';
import {Text, ScrollView, Image, TouchableOpacity, View} from 'react-native';
import {Input} from 'react-native-elements';
import {styles} from '../public/styleSheets/styleAddDetail';
import {
  InputItem,
  List,
  TextareaItem,
  Icon,
  Switch,
} from '@ant-design/react-native';
import {connect} from 'react-redux';
import ValidationComponent from 'react-native-form-validator';
import {CreateContribute} from '../action/postAction';
import Toast from 'react-native-simple-toast';
import {auth} from '../config/helper';

const Item = List.Item;
const Brief = Item.Brief;
class AddDetailScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      nameVN: '',
      familiar: '',
      location: '',
      characteristics: '',
      meaning: '',
      comment: '',
    };
  }

  onChange = fieldName => e => {
    console.log(fieldName,e)
    this.setState({[fieldName]: e});
  };

  onValidate() {
    return this.validate({
      name: {minlength: 2, maxlength: 100, required: true, spacing: true},
      nameVN: {minlength: 2, maxlength: 100, required: true, spacing: true},
      familiar: {
        required: true,
        minlength: 2,
        maxlength: 100,
        spacing: true,
      },
      location: {
        minlength: 2,
        maxlength: 100,
        required: true,
        spacing: true,
      },
      characteristics: {
        minlength: 2,
        maxlength: 1000,
        required: true,
        spacing: true,
      },
    });
  }

  async successContribute() {
    const {route, CreateContribute, navigation} = this.props;
    const postContributed = route.params?.post._id;
    const {
      nameVN,
      familiar,
      location,
      characteristics,
      meaning,
      comment,
    } = this.state;
    const body = {
      nameVN,
      familiar,
      location,
      characteristics,
      meaning,
      comment,
      postContributed,
    };

    const credentials =await auth.isAuthenticated();

    if (this.onValidate()) {
      if (postContributed && credentials) {
        await CreateContribute(credentials, body);
        navigation.navigate('Post');
      }
    } else {
      {
        if (
          this.isFieldInError('nameVN') ||
          this.isFieldInError('familiar') ||
          this.isFieldInError('location') ||
          this.isFieldInError('characteristics')
        ) {
          return Toast.show(
            'Dữ liệu nhập vào không thích hợp. Vui lòng thử lại',
          );
        }
      }
    }
  }

  render() {
    const {route} = this.props;
    const {checked} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.lstContribute}
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          {route.params?.post.images ? (
            route.params?.post.images.map((item, index) => {
              return (
                <Image
                  key={index}
                  source={{uri: item}}
                  style={styles.imgCard}
                />
              );
            })
          ) : (
            <Text>Không có ảnh</Text>
          )}

          <List
            renderHeader={'Đóng góp'}
            renderFooter="Đóng góp của bạn góp phần giàu dữ liệu cho cộng đồng">
            <Item
              arrow="down"
              thumb="https://img.icons8.com/bubbles/250/000000/edit.png"
              onClick={() => {}}>
              Thông tin cơ bản
            </Item>
            <InputItem
              ref="nameVN"
              clear
              onChange={this.onChange('nameVN')}
              extra={<Icon name="info-circle" size="md" color="red" />}
              placeholder="Vui lòng nhập tên hoa mà bạn biết">
              Tên hoa
            </InputItem>
            <InputItem
              ref="familiar"
              clear
              onChange={this.onChange('familiar')}
              extra={<Icon name="info-circle" size="md" color="red" />}
              placeholder="Loại hoa?">
              Phân loại
            </InputItem>
            <InputItem
              ref="location"
              clear
              onChange={this.onChange('location')}
              extra={<Icon name="info-circle" size="md" color="red" />}
              placeholder="Bạn đã gặp nó ở đâu?">
              Phân bố
            </InputItem>
            <Item
              arrow="down"
              thumb="https://img.icons8.com/bubbles/250/000000/plus.png"
              onClick={() => {}}>
              Thông tin thêm
            </Item>
            <Item
              extra={<Icon name="info-circle" size="md" color="red" />}
              multipleLine
              onClick={() => {}}>
              Đặc điểm{' '}
              <TextareaItem
                ref="characteristics"
                rows={2}
                onChange={this.onChange('characteristics')}
                autoHeight
                count={250}
              />
            </Item>
            <Item
              multipleLine
              extra={<Icon name="plus-circle" size="md" color="green" />}>
              Ý nghĩa{' '}
              <TextareaItem
                rows={2}
                ref="meaning"
                onChange={this.onChange('meaning')}
                autoHeight
                count={250}
              />
            </Item>
            <Item
              multipleLine
              extra={<Icon name="plus-circle" size="md" color="green" />}>
              Bình luận{' '}
              <TextareaItem
                ref="comment"
                onChange={this.onChange('comment')}
                rows={4}
                count={250}
              />
            </Item>
          </List>
        </ScrollView>
        <View style={styles.viewBtn}>
          <TouchableOpacity
            style={styles.btnContribute}
            onPress={this.successContribute.bind(this)}>
            <Text style={styles.txtContribute}>ĐÓNG GÓP</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  {CreateContribute},
)(AddDetailScreen);
