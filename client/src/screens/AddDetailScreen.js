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
import {InputItem, List, TextareaItem, Icon} from '@ant-design/react-native';
const Item = List.Item;
const Brief = Item.Brief;
export default class AddDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    
    };
  }

  successContribute = () => {};

  render() {
    const {route} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.lstContribute}
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.rowImage}>
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
          </View>
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
              extra={<Icon name="plus-circle" size="md" color="green" />}
              multipleLine
              onClick={() => {}}>
              Đặc điểm <TextareaItem rows={2} autoHeight count={250} />
            </Item>
            <Item
              multipleLine
              extra={<Icon name="plus-circle" size="md" color="green" />}
              onClick={() => {}}>
              Ý nghĩa <TextareaItem rows={2} autoHeight count={250} />
            </Item>
            <Item
              multipleLine
              onClick={() => {}}
              extra={<Icon name="plus-circle" size="md" color="green" />}>
              Bình luận <TextareaItem rows={4} count={250} />
            </Item>
          </List>
          <Item/>
        </ScrollView>

        <View style={styles.viewBtn}>
          <TouchableOpacity
            style={styles.btnContribute}
            onPress={this.successContribute}>
            <Text style={styles.txtContribute}>ĐÓNG GÓP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
