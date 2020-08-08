import * as React from 'react';
import {
  Text,
  View,
  Image,
  Linking,
  Button,
} from 'react-native';
import {styles} from '../public/styleSheets/styleInfo';

export default class InfoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtTitle}>GIỚI THIỆU ỨNG DỤNG</Text>
        <View style={styles.viewIntro}>
          <Text style={styles.txtTileIntro}>
            Ứng dụng gồm các chức năng chính:
          </Text>
          <Text style={styles.txtContentIntro}>
            1. Nhận diện thực vật thông qua hình ảnh
          </Text>
          <Text style={styles.txtContentIntro}>
            2. Chia sẽ dữ liệu hình ảnh thông qua cộng đồng
          </Text>
          <Text style={styles.txtContentIntro}>
            3. Quản lý các tác vụ cá nhân
          </Text>
        </View>
        <View style={styles.viewContact}>
          <Text style={styles.txtTitleContact}>Liên hệ ngay</Text>

          <View style={styles.viewContactMail}>
            <Text style={styles.txtTitleContactMail}>
              <Image
                style={styles.logo}
                source={{
                  uri:
                    'https://img.icons8.com/clouds/50/000000/important-mail.png',
                }}
              />{' '}
              Mail
            </Text>
            <Button
              onPress={() =>
                Linking.openURL(
                  'mailto:Nguyentuanvu231198@gmail.com?subject=RecognitionPlant&body=Description',
                )
              }
              title="Nguyentuanvu231198@gmail.com"
            />
            <Text style={styles.txtOr}>or</Text>
            <Button
              onPress={() =>
                Linking.openURL(
                  'mailto:huyhoangpro1001@gmail.com?subject=RecognitionPlant&body=Description',
                )
              }
              title="huyhoangpro1001@gmail.com"
            />
          </View>
          <View style={styles.viewContactPhone}>
            <Text style={styles.txtTitleContactMail}>
              <Image
                style={styles.logo}
                source={{
                  uri: 'https://img.icons8.com/clouds/100/000000/phone.png',
                }}
              />{' '}
              Contact
            </Text>
            <Button
              onPress={() => Linking.openURL(`tel:0988515341`)}
              title="0988515341"
            />
            <Text style={styles.txtOr}>or</Text>
            <Button
              onPress={() => Linking.openURL(`tel:0336330469`)}
              title="0336330469"
            />
          </View>
        </View>

        <View>
          <Text style={styles.txtOr}>
            Copy right: @NguyenTuanVu & @VoHuyHoang
          </Text>
        </View>
      </View>
    );
  }
}
