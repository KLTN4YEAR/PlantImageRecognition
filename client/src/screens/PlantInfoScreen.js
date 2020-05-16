import * as React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {styles} from '../public/styleSheets/stylePlantInfo';
import {Icon} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';

export default class ResultScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible: false,
      activeIndex: 0,
      carouselItems: [
        {
          name: 'Amy Farha',
          avatar_url:
            'https://cf.shopee.vn/file/99602fd0c0626495c7cd38440878707a',
          subtitle: 'Vice President',
        },
        {
          name: 'Chris Jackson',
          avatar_url:
            'https://hatgiongphuongnam.com/asset/upload/image/hat-giong-hoa-hong-1.jpg',
          subtitle: 'Vice Chairman',
        },
        {
          name: 'Chris Jackson',
          avatar_url:
            'https://giaithuongtinhnguyen.vn/wp-content/uploads/2019/12/hoa-hong.jpg',
          subtitle: 'Vice Chairman',
        },
        {
          name: 'Chris Jackson',
          avatar_url:
            'https://im0-tub-com.yandex.net/i?id=c6671bb8c9ba2577cdf8e77f840f9efc&n=13',
          subtitle: 'Vice Chairman',
        },
        {
          name: 'Chris Jackson',
          avatar_url:
            'https://im0-tub-com.yandex.net/i?id=e262783aee2003e5b0e5bb2f31a789d6&n=13',
          subtitle: 'Vice Chairman',
        },
        {
          name: 'Chris Jackson',
          avatar_url:
            'https://im0-tub-com.yandex.net/i?id=22e5c4346f58a81f42289579bfd96a07&n=13',
          subtitle: 'Vice Chairman',
        },
      ],
    };
  }
  _renderItem({item, index}) {
    return (
      <Image source={{uri: item.avatar_url}} style={styles.imgPlantCarousel} />
    );
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
        {/* <SafeAreaView style={styles.viewListImage}>
          <Carousel
            layout={'default'}
            ref={ref => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={250}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({activeIndex: index})}
          />
        </SafeAreaView> */}
        <View style={styles.viewImageList}>
          {this.state.carouselItems.map((item, index) => {
            return (
              <Image
                key={index}
                source={{uri: item.avatar_url}}
                style={styles.imgPlantCarousel1}
              />
            );
          })}
        </View>
      </ScrollView>
    );
  }
}
