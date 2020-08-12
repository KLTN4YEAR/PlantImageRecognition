import * as React from 'react';
import {View} from 'react-native';
import {styles} from '../public/styleSheets/styleDetailPost';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {List, TextareaItem} from '@ant-design/react-native';

const Item = List.Item;
const Brief = Item.Brief;


class ContributeScreen extends React.Component {
  render() {
    const {route} = this.props;
    return (
      route.params?.contribute && (
        <View style={styles.viewModal}>
          <ScrollView
            style={styles.modalContribute}
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <List renderHeader={'Thông tin người dùng đã đóng góp'}>
              <Item
                arrow="down"
                thumb="https://img.icons8.com/bubbles/250/000000/edit.png"
                onClick={() => {}}>
                Thông tin cơ bản
              </Item>
              <Item
                extra={
                  route.params?.contribute.nameVN
                    ? route.params?.contribute.nameVN
                    : 'Chưa cập nhật'
                }>
                Tên hoa
              </Item>
              <Item
                extra={
                  route.params?.contribute.familiar
                    ? route.params?.contribute.familiar
                    : 'Chưa cập nhật'
                }>
                Phân loại
              </Item>
              <Item
                extra={
                  route.params?.contribute.location
                    ? route.params?.contribute.location
                    : 'Chưa cập nhật'
                }>
                Phân bố
              </Item>
              <Item
                arrow="down"
                thumb="https://img.icons8.com/bubbles/250/000000/plus.png"
                onClick={() => {}}>
                Thông tin thêm
              </Item>
              <Item multipleLine>Đặc điểm</Item>
              <TextareaItem
                autoHeight
                style={{paddingVertical: 5}}
                rows={3}
                value={route.params?.contribute.characteristics}
                editable={false}
              />
              <Item multipleLine>Ý nghĩa</Item>
              <TextareaItem
                autoHeight
                style={{paddingVertical: 5}}
                rows={3}
                value={route.params?.contribute.meaning}
                editable={false}
              />
            </List>
          </ScrollView>
        </View>
      )
    );
  }
}


export default ContributeScreen;
