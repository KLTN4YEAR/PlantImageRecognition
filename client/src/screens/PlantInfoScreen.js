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

// Gọi các sqlite function
import {viewFlowerByName} from '../sqlite/dbFlowerOffline';
const windowWidth = Dimensions.get('window').width;
export default class ResultScreen extends React.Component {
  state = {
    dialogVisible: false,

    resultPlant: [],

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

  async componentDidMount() {
    await this.getFlowerByName();
  }

  async componentDidUpdate(prevProps) {
    const {route} = this.props;
    if (route !== prevProps.route) {
      await this.getFlowerByName();
    }
  }

  async getFlowerByName() {
    const {route} = this.props;
    const f_name = route.params?.f_name;
    // Xư lý bất đồng bộ sqlite
    await viewFlowerByName(f_name, this.getResult);
  }

  getResult = result => {
    if (result) {
      this.setState({resultPlant: result[0]});
    }
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
    const {resultPlant} = this.state;
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
            {resultPlant ? (
              <Text style={styles.txtName}>{resultPlant.nameVN}</Text>
            ) : (
              <Text style={styles.txtName}>Unknown</Text>
            )}

            <View style={styles.viewKind}>
              <Icon
                type="font-awesome"
                name="pagelines"
                style={styles.icKind}
                size={20}
                color="#59c393"
              />
              {resultPlant ? (
                <>
                  <Text style={styles.txtKind}>{resultPlant.familiar}</Text>
                  <Text style={styles.txtLoc}>| {resultPlant.location}</Text>
                </>
              ) : (
                <>
                  <Text style={styles.txtKind}>Unknown</Text>
                  <Text style={styles.txtLoc}>| Unknown</Text>
                </>
              )}
            </View>
          </View>
        </View>
        <LinearGradient
          colors={['#303030', '#121212', '#000000']}
          style={styles.linearGradient}>
          <ScrollView style={styles.viewDesc}>
            <View style={styles.viewBasic}>
              {resultPlant ? (
                <>
                  <Text style={styles.txtNamevi}>{resultPlant.nameVN}</Text>
                  <Text style={styles.txtNameen}>| {resultPlant.name}</Text>
                </>
              ) : (
                <>
                  <Text style={styles.txtNamevi}>Unknown</Text>
                  <Text style={styles.txtNameen}>| Unknown</Text>
                </>
              )}
            </View>
            <View style={styles.viewScience}>
              {resultPlant ? (
                <Text style={styles.txtNamesce}>
                  Tên khoa học: {resultPlant.nameScience}
                </Text>
              ) : (
                <Text style={styles.txtNamesce}>Tên khoa học: Unknown</Text>
              )}
            </View>

            <View style={styles.viewCharacter}>
              <Text style={styles.lblName}>Đặc điểm</Text>
              {resultPlant ? (
                <TextInput
                  multiline={true}
                  style={styles.txtDesc}
                  editable={false}
                  defaultValue={resultPlant.characteristics}
                />
              ) : (
                <TextInput
                  multiline={true}
                  style={styles.txtDesc}
                  editable={false}
                  defaultValue="Unknown"
                />
              )}
            </View>
            <View style={styles.viewCharacter}>
              <Text style={styles.lblName}>Ý nghĩa | tượng trưng</Text>
              {resultPlant ? (
                <TextInput
                  multiline={true}
                  style={styles.txtDesc}
                  editable={false}
                  defaultValue={resultPlant.meaning}
                />
              ) : (
                <TextInput
                  multiline={true}
                  style={styles.txtDesc}
                  editable={false}
                  defaultValue="Unknown"
                />
              )}
            </View>
          </ScrollView>
        </LinearGradient>
      </ScrollView>
    );
  }
}
