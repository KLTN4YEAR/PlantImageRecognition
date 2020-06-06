import * as React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {styles} from '../public/styleSheets/stylePlantInfo';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {ConfirmDialog} from 'react-native-simple-dialogs';
import Carousel from 'react-native-snap-carousel';

const windowWidth = Dimensions.get('window').width;
export default class ResultScreen extends React.Component {
  state = {
    dialogVisible: false,

    images: [
      {
        url:
          'https://hoahongthanglong.com/wp-content/uploads/2019/04/hoa-hong-corail-gelee-rose-8.jpg',
      },
      {
        url:
          'https://hoahongthanglong.com/wp-content/uploads/2019/04/hoa-hong-corail-gelee-rose-6.jpg',
      },
      {
        url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfpxmp2pN4Qz400vJ2FRDg9xE5Uf_kGxDpjjkwxlAXIy1oRJyr&usqp=CAU',
      },
    ],
  };
  _renderItem = ({item, index}) => {
    return (
      <ImageBackground
        source={{
          uri: item.url,
        }}
        style={styles.imgPlant}
      />
    );
  };
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.viewImage}>
          <Carousel
            layout={'tinder'}
            layoutCardOffset={9}
            ref={ref => (this.carousel = ref)}
            data={this.state.images}
            sliderWidth={windowWidth}
            itemWidth={windowWidth}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({activeIndex: index})}
          />
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
        </View>
        <LinearGradient
          colors={['#303030', '#121212', '#000000']}
          style={styles.linearGradient}>
          <ScrollView style={styles.viewDesc}>
            <View style={styles.viewBasic}>
              <Text style={styles.txtNamevi}>Hoa hồng</Text>
              <Text style={styles.txtNameen}>| Rose</Text>
            </View>
            <View style={styles.viewScience}>
              <Text style={styles.txtNamesce}>Tên khoa học: Rose</Text>
            </View>

            <View style={styles.viewCharacter}>
              <Text style={styles.lblName}>Đặc điểm</Text>
              <TextInput
                multiline={true}
                style={styles.txtDesc}
                editable={false}
                defaultValue="-Là cây thuộc rễ chùm có nhiều bộ rễ lớn kèm theo khi bộ rễ lớn phát sinh.Cây hồng nhung có chiều ngang tương đối rộng,là cây thân gỗ, bụi thấp và có nhiều cành và gai cong.-Xung quanh lá hồng nhung có nhiều răng cưa nhỏ, lá kép lông chim, mỗi lá kép có khoảng 3 đến 5 hay 7 đến 9 lá chét.Tùy vào giống hồng và mỗi loại có hình dạng khác nhau,răng cưa nông hay sâu và lá có màu sắc xanh đậm hay nhạt."
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
        </LinearGradient>
      </ScrollView>
    );
  }
}
