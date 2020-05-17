import * as React from 'react';
import { Text, View, Image, TextInput, ScrollView } from 'react-native';
import { styles } from '../public/styleSheets/stylePlantInfo';
import { Icon } from 'react-native-elements';
import { ConfirmDialog } from 'react-native-simple-dialogs';

export default class ResultScreen extends React.Component {
  state = {
    dialogVisible: false,
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.viewImage}>
          <Image
            source={{
              uri:
                'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg',
            }}
            style={styles.imgPlant}
          />
        </View>
        <View style={styles.viewInfo}>
          <Text style={styles.txtName}>Hoa Hồng</Text>
          <View style={styles.viewKind}>
            <Icon
              type="font-awesome"
              name="pagelines"
              style={styles.icKind}
              size={13}
              color="#59c393"
            />
            <Text style={styles.txtKind}>Hồng</Text>
          </View>
          <View style={styles.viewLoc}>
            <Icon
              type="font-awesome"
              name="map-marker"
              style={styles.labelIcon}
              size={13}
              color="#59c393"
            />
            <Text style={styles.txtLoc}>VietNam</Text>
          </View>
        </View>
        <View style={styles.viewDesc}>
          <TextInput
            multiline={true}
            style={styles.txtDesc}
            editable={false}
            placeholder="Hồng hay hường là tên gọi chung cho các loài thực vật có hoa dạng cây bụi hoặc cây leo lâu năm thuộc chi Rosa, họ Rosaceae, với hơn 100 loài với màu hoa đa dạng, phân bố từ miền ôn đới đến nhiệt đới. Các loài này nổi tiếng vì hoa đẹp nên thường gọi là hoa hồng"
          />
        </View>

        <ConfirmDialog
          title="Confirm Dialog"
          visible={this.state.dialogVisible}
          onTouchOutside={() => this.setState({ dialogVisible: false })}
          positiveButton={{
            title: 'OK',
            onPress: () => alert('Ok touched!'),
          }}>
          <View>
            <Image
              source={{
                uri:
                  'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg',
              }}
              style={styles.imgPlant}
            />
          </View>
        </ConfirmDialog>
        {/* //create list image and using dialog to view full image */}
        <View style={styles.viewListImage} />
      </ScrollView>
    );
  }
}
