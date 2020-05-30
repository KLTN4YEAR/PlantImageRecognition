import * as React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {styles} from '../public/styleSheets/stylePlantInfo';
import {Icon} from 'react-native-elements';
import {ConfirmDialog} from 'react-native-simple-dialogs';

export default class ResultScreen extends React.Component {
  state = {
    dialogVisible: false,
  };

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.viewImage}>
          <ImageBackground
            source={{
              uri:
                'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg',
            }}
            style={styles.imgPlant}>
            <View style={styles.viewInfoHead}>
              <Text style={styles.txtName}>Hoa Hồng</Text>
              <View style={styles.viewKind}>
                <Icon
                  type="font-awesome"
                  name="pagelines"
                  style={styles.icKind}
                  size={20}
                  color="#59c393"
                />
                <Text style={styles.txtKind}>Hồng</Text>
                <Text style={styles.txtLoc}>| VietNam</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <ScrollView style={styles.viewDesc}>
          <View style={styles.viewBasic}>
            <Text style={styles.txtNamevi}>Hoa hồng</Text>
            <Text style={styles.txtNameen}>| Rose</Text>
          </View>
          {/* <View>
            <Text style={styles.txtNamesce}>Tên khoa học: Rose</Text>
          </View> */}
          <View style={styles.viewCharacter}>
            <Text style={styles.lblName}>Đặc điểm</Text>
            <TextInput
              multiline={true}
              style={styles.txtDesc}
              editable={false}
              defaultValue="Hồng hay hường là tên gọi chung cho các loài thực vật có hoa dạng cây bụi hoặc cây leo lâu năm thuộc chi Rosa, họ Rosaceae, với hơn 100 loài với màu hoa đa dạng, phân bố từ miền ôn đới đến nhiệt đới. Các loài này nổi tiếng vì hoa đẹp nên thường gọi là hoa hồng"
            />
          </View>
          <View style={styles.viewCharacter}>
            <Text style={styles.lblName}>Ý nghĩa | tượng trưng</Text>
            <TextInput
              multiline={true}
              style={styles.txtDesc}
              editable={false}
              defaultValue="Hồng hay hường là tên gọi chung cho các loài thực vật có hoa dạng cây bụi hoặc cây leo lâu năm thuộc chi Rosa, họ Rosaceae, với hơn 100 loài với màu hoa đa dạng, phân bố từ miền ôn đới đến nhiệt đới. Các loài này nổi tiếng vì hoa đẹp nên thường gọi là hoa hồng"
            />
          </View>
        </ScrollView>

        <ConfirmDialog
          title="Confirm Dialog"
          visible={this.state.dialogVisible}
          onTouchOutside={() => this.setState({dialogVisible: false})}
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
