import * as React from 'react';
import {Text, View, TextInput, Image, FlatList} from 'react-native';
import {styles} from '../public/styleSheets/styleDetailPost';
import {connect} from 'react-redux';
import {getPostInfo} from '../action/postAction';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Avatar, Icon} from 'react-native-elements';
import {auth} from '../config/helper';
import moment from 'moment';
import localization from 'moment/locale/vi';
import {List, TextareaItem} from '@ant-design/react-native';

const Item = List.Item;
const Brief = Item.Brief;

moment.updateLocale('vi', localization);

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
function mapStateToProp(state) {
  return {
    authenticate: state.auth.isAuthenticated,
    post: state.post.post.post,
    contributes: state.post.post.contributes,
  };
}

export default connect(
  mapStateToProp,
  {getPostInfo},
)(ContributeScreen);
