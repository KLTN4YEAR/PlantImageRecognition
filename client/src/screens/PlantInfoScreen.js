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
import {viewFlowerByName, viewImagesById} from '../sqlite/dbFlowerOffline';
const windowWidth = Dimensions.get('window').width;
export default class ResultScreen extends React.Component {
  state = {
    dialogVisible: false,

    resultPlant: {},
    resultImg:{},

    images: [],
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
      this.setState({images: [result[0].img1,result[0].img2,result[0].img3,result[0].img4,result[0].img5,result[0].img6]});
    }
  };

  // async getImagesById(){
  //   const {resultPlant}=this.state;

  //   //Xử lý lấy image
  //   await this.getImagesById(resultPlant._id,this.getResultImg)
  // }

  // getResultImg=result=>{
  //   if(result){
  //     this.setState({resultImg:result[0]});
  //     console.log("img",this.state.resultImg)
  //   }
  // }

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
    const {resultPlant,images} = this.state;
    console.log('img',images)
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.viewImage}>
          <Carousel
            layout={'tinder'}
            layoutCardOffset={9}
            ref={ref => (this.carousel = ref)}
            data={images}
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
