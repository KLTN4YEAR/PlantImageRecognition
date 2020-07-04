import * as React from 'react';
import {
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import {styles} from '../public/styleSheets/styleAddDetail';
import {
  InputItem,
  List,
  TextareaItem,
  Icon,
  Switch,
} from '@ant-design/react-native';
import * as Animatable from 'react-native-animatable';

const Item = List.Item;
const Brief = Item.Brief;
export default class AddDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      checked: false,
    };
  }
  onSwitchChange = value => {
    this.setState({
      checked: value,
    });
  };
  successContribute = () => {};

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
          {/* <Animatable.View animation="fadeInUp" style={styles.rowImage}> */}
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
          {/* </Animatable.View> */}
          {/* <Animatable.View animation="fadeInDown"> */}
            {!checked ? (
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
                  clear
                  onChange={value => {
                    this.setState({
                      value,
                    });
                  }}
                  extra={<Icon name="info-circle" size="md" color="red" />}
                  placeholder="Vui lòng nhập tên hoa mà bạn biết">
                  Tên hoa
                </InputItem>
                <InputItem
                  clear
                  onChange={value => {
                    this.setState({
                      value,
                    });
                  }}
                  extra={<Icon name="info-circle" size="md" color="red" />}
                  placeholder="Loại hoa?">
                  Phân loại
                </InputItem>
                <InputItem
                  clear
                  onChange={value => {
                    this.setState({
                      value,
                    });
                  }}
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
                  extra={
                    <Icon name="plus-circle" size="md" color="green" />
                  }
                  multipleLine
                  onClick={() => {}}>
                  Đặc điểm <TextareaItem rows={2} autoHeight count={250} />
                </Item>
                <Item
                  multipleLine
                  extra={
                    <Icon name="plus-circle" size="md" color="green" />
                  }
                  onClick={() => {}}>
                  Ý nghĩa <TextareaItem rows={2} autoHeight count={250} />
                </Item>
                <Item
                  multipleLine
                  onClick={() => {}}
                  extra={
                    <Icon name="plus-circle" size="md" color="green" />
                  }>
                  Bình luận <TextareaItem rows={4} count={250} />
                </Item>
              </List>
            ) : (
              <List
                renderHeader={'Chỉ bình luận'}
                renderFooter="Đóng góp của bạn góp phần giàu dữ liệu cho cộng đồng">
                <Item
                  arrow="down"
                  thumb="https://img.icons8.com/bubbles/50/000000/topic.png"
                  onClick={() => {}}>
                  Bình luận
                </Item>

                <Item
                  multipleLine
                  onClick={() => {}}
                  extra={<Icon name="info-circle" size="md" color="red" />}>
                  Bạn nghĩ gì? <TextareaItem rows={8} count={250} />
                </Item>
              </List>
            )}
          {/* </Animatable.View> */}
        </ScrollView>
        <View style={styles.viewBtn}>
          <View style={styles.modeOnly}>
            <Switch checked={checked} onChange={this.onSwitchChange} />
            <Text style={styles.txtMode}>Chỉ bình luận</Text>
          </View>

          {!checked ? (
            <TouchableOpacity
              style={styles.btnContribute}
              onPress={this.successContribute}>
              <Text style={styles.txtContribute}>ĐÓNG GÓP</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.btnContribute}
              onPress={this.successContribute}>
              <Text style={styles.txtContribute}>BÌNH LUẬN</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}
