import * as React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../public/styleSheets/stylePlantInfo';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {ConfirmDialog} from 'react-native-simple-dialogs';
import Carousel, {Pagination} from 'react-native-snap-carousel';

// Gọi các sqlite function
import {viewFlowerByName, viewFlowerById} from '../sqlite/dbFlowerOffline';
const windowWidth = Dimensions.get('window').width;
export default class ResultScreen extends React.Component {
  state = {
    dialogVisible: false,

    resultPlant: {},
    resultImg: {},
    activeIndex: 0,
    images: [],
  };

  async componentDidMount() {
    await this.getFlowerById();
  }

  async componentDidUpdate(prevProps) {
    const {route} = this.props;
    if (route !== prevProps.route) {
      await this.getFlowerById();
    }
  }

  async getFlowerById() {
    const {route} = this.props;
    const fId = route.params?.fId;
    // Xư lý bất đồng bộ sqlite
    await viewFlowerById(fId, this.getResult);
  }

  getResult = result => {
    if (result) {
      this.setState({resultPlant: result[0]});
      this.setState({
        images: [
          result[0].img1,
          result[0].img2,
          result[0].img3,
          result[0].img4,
          result[0].img5,
          result[0].img6,
        ],
      });
    }
  };

  get pagination() {
    const {images, activeIndex} = this.state;
    return (
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.pagination}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  _renderItem = ({item, index}) => {
    return (
      <ImageBackground
        source={{
          uri: item,
        }}
        style={styles.imgPlant}
      />
    );
  };
  render() {
    const {resultPlant, images} = this.state;
    const{navigation}=this.props;
    const defaultImg=["https://www.chanchao.com.tw/VietnamPrintPack/images/default.jpg"];
    return (
      <SafeAreaView>
        <View style={styles.viewHeader}>
          <TouchableOpacity
            style={styles.btnBack}
            onPress={() => navigation.goBack()}>
            <Icon
              type="font-awesome"
              name="arrow-left"
              style={styles.icKind}
              size={20}
              color="#fff"
              // reverseColor="#59c393"
              // reverse
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnCancel}
            onPress={() => this.props.navigation.navigate('ImagePicker')}>
            <Icon
              type="font-awesome"
              name="times"
              style={styles.icKind}
              size={20}
              color="#fff"
              // reverseColor="#59c393"
              // reverse
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.viewImage}>
            <Carousel
              layout={'tinder'}
              layoutCardOffset={9}
              ref={ref => (this.carousel = ref)}
              data={images ? images : defaultImg}
              sliderWidth={windowWidth}
              itemWidth={windowWidth}
              renderItem={this._renderItem}
              onSnapToItem={index => this.setState({activeIndex: index})}
            />
            {this.pagination}
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
                    <Text style={styles.txtKind}>
                      {resultPlant.familiar}
                    </Text>
                    <Text style={styles.txtLoc}>
                      | VietNam
                    </Text>
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
                    <Text style={styles.txtNamevi}>
                      {resultPlant.nameVN}
                    </Text>
                    <Text style={styles.txtNameen}>
                      | {resultPlant.name}
                    </Text>
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
                  <Text style={styles.txtNamesce}>
                    Tên khoa học: Unknown
                  </Text>
                )}
              </View>
              <View style={styles.viewLocation}>
                {resultPlant ? (
                  <Text style={styles.txtLocation}>
                    Nguồn gốc: {resultPlant.location}
                  </Text>
                ) : (
                  <Text style={styles.txtNamesce}>Nguồn gốc: Unknown</Text>
                )}
              </View>

              <View style={styles.viewCharacter}>
                <Text style={styles.lblName}>Đặc điểm</Text>
                {resultPlant ? (
                  <TextInput
                    multiline={true}
                    style={styles.txtDesc}
                    editable={false}
                    value={resultPlant.characteristics}
                  />
                ) : (
                  <TextInput
                    multiline={true}
                    style={styles.txtDesc}
                    editable={false}
                    value="Unknown"
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
                    value={resultPlant.meaning}
                  />
                ) : (
                  <TextInput
                    multiline={true}
                    style={styles.txtDesc}
                    editable={false}
                    value="Unknown"
                  />
                )}
              </View>
            </ScrollView>
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
