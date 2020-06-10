import * as React from 'react';
import {
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  SafeAreaView,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {styles} from '../public/styleSheets/styleCreatePost';
import {Text, Button, Avatar} from 'react-native-elements';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Icon} from 'react-native-elements';
import {newPost, successMess} from '../action/postAction';
import {auth} from '../config/helper';

import {connect} from 'react-redux';
import Toast from 'react-native-simple-toast';
import ValidationComponent from 'react-native-form-validator';

import {getIdByVNName} from '../sqlite/dbFlowerOffline';

class CreatePostScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      postedBy: '',
      LocalImage: [],
      content: '',
      mentionedPlant: '',
      namePlant: '',
      post: {
        mentionedPlant: '111111111111',
        namePlant: '',
        content: '',
        plant_images: [''],
      },
    };
  }

  // successAlert = () => {
  //   Toast.show('Chúc mừng bạn đã đăng thành công!');
  // };

  // failAlert = () => {
  //   Toast.show('Bài viết không hợp lệ, vui lòng thử lại!');
  // };

  onValidate() {
    return this.validate({
      name: {minlength: 4, maxlength: 25, required: true, spacing: true},
      email: {email: true, required: true, spacing: true},
      number: {numbers: true, required: true, spacing: true},
    });
  }

  async componentDidMount() {
    const {route} = this.props;
    await this.onGetIDflower(route.params?.nameVN);
    this.setState({namePlant:route.params?.nameVN});
  }

  async componentDidUpdate(prevProps) {
    const {route} = this.props;
    const name = route.params?.nameVN;
    const data = await auth.isAuthenticated();
    if (route !== prevProps.route) {
      await this.onGetIDflower(route.params?.nameVN);
    }
  }

  async onGetIDflower(name) {
    await getIdByVNName(name, this.getResult);
  }

  getResult = result => {
    console.log('result');
    if (result) {
      this.setState({
        mentionedPlant: result[0]._id,
      });
    }
  };

  //lưu những thay đổi nơi input vào state
  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault(); //chấp nó bấm submit liên tục nè
    if (this.onValidate()) {
      const {post} = this.state;
      post['mentionedPlant'] = '123456789000';
      post['namePlant'] = this.state.namePlant;
      post['content'] = this.state.content;
      post['plant_images'] = this.state.LocalImage;
      console.log('post', post);
      // create fromData to create post
      let formData = new FormData();
      formData.append('mentionedPlant', post.mentionedPlant);
      formData.append('namePlant', post.namePlant);
      formData.append('content', post.content);
      post.plant_images.map((item, index) => {
        // let fileType = item.substring(item.lastIndexOf('.') + 1);
        let fileName = item.path.substring(item.path.lastIndexOf('/') + 1);
        console.log('s', item);
        return formData.append('plant_images', {
          uri: Platform.OS === 'ios' ? item.uri : 'file://' + item.path,
          name: fileName,
          type: item.mime,
        });
      });
      // console.log('fm', formData);
      this.addPost(formData);
    }
  };

  addPost = async formatData => {
    const {newPost, navigation} = this.props;
    const credentials = await auth.isAuthenticated();
    newPost(credentials, formatData);
    navigation.navigate('CreatePost');
    // if (successMess == 'Created was successful') {
    //   this.successAlert();
    //   navigation.goBack();
    // } else {
    //   this.failAlert();
    //   navigation.goBack();
    // }
  };

  _pickImage = async () => {
    const options = {
      //cropping: true,
      compressImageQuality: 1.0,
      showCropFrame: true,
      showCropGuidelines: true,
      cropperToolbarTitle: 'Cắt ảnh',
      cropperToolbarColor: 'white',
      mediaType: 'photo',
    };
    ImagePicker.openPicker(options)
      .then(image => {
        var path = Platform.OS === 'ios' ? image.uri : 'file://' + image.path;
        this.setState({
          LocalImage: this.state.LocalImage.concat([image]),
        });
      })
      .catch(err => {
        Toast.show('Có lỗi xảy ra!');
      });
  };
  //Mode of get image from direct camera
  _takePhoto = async () => {
    const options = {
      cropping: true,
      compressImageQuality: 1.0,
      showCropFrame: true,
      showCropGuidelines: true,
      cropperToolbarTitle: 'Cắt ảnh',
      cropperToolbarColor: 'white',
      mediaType: 'photo',
    };
    ImagePicker.openCamera(options)
      .then(image => {
        var path = Platform.OS === 'ios' ? image.uri : 'file://' + image.path;
        this.setState({
          LocalImage: this.state.LocalImage.concat([image]),
        });
      })
      .catch(err => {
        Toast.show('Có lỗi xảy ra!');
      });
  };
  _renderImages() {
    let images = [];
    this.state.LocalImage.map((item, index) => {
      images.push(
        <Image
          key={index}
          source={{uri: item.path}}
          style={styles.imgDisplay}
        />,
      );
    });
    return images;
  }

  render() {
    const {profile, navigation, route} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.viewHeader}>
          <TouchableOpacity
            style={styles.btnBack}
            onPress={() => navigation.goBack()}>
            <Icon
              type="font-awesome"
              name="arrow-left"
              style={styles.icKind}
              size={20}
              color="#000"
              // reverseColor="#59c393"
              // reverse
            />
          </TouchableOpacity>
          <Text style={styles.lblCreate}>ĐĂNG BÀI</Text>
          <TouchableOpacity
            style={styles.btnSave}
            onPress={this.onSubmit.bind(this)}>
            <Text style={styles.lblButton}>ĐĂNG</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.viewImage}>
          <TouchableOpacity
            onPress={this._pickImage}
            style={styles.btnGallery}>
            <Grid>
              <Row>
                <Col size={20}>
                  <Icon
                    type="material"
                    name="photo-library"
                    style={styles.labelIcon}
                    color="#59c393"
                  />
                </Col>
                <Col size={80}>
                  <Text style={styles.labelTxt}>Ảnh từ thư viện</Text>
                </Col>
              </Row>
            </Grid>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._takePhoto}
            style={styles.btnCamera}>
            <Grid>
              <Row>
                <Col size={20}>
                  <Icon
                    type="material"
                    name="photo-camera"
                    style={styles.labelIcon}
                    color="#59c393"
                  />
                </Col>
                <Col size={80}>
                  <Text style={styles.labelTxt}>Camera</Text>
                </Col>
              </Row>
            </Grid>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnCancel}
            onPress={() => navigation.goBack()}>
            <Grid>
              <Row>
                <Col size={20}>
                  <Icon
                    type="material"
                    name="cancel"
                    style={styles.labelIcon}
                    color="#59c393"
                  />
                </Col>
                <Col size={80}>
                  <Text style={styles.labelTxt}>Huỷ</Text>
                </Col>
              </Row>
            </Grid>
          </TouchableOpacity>
        </View> */}
        <ScrollView style={styles.scrollView}>
          <View style={styles.viewUser}>
            <Grid>
              <Row style={styles.rowPostBy}>
                <Col size={15}>
                  {profile.Avatar ? (
                    <Avatar
                      rounded
                      size={40}
                      source={{
                        uri: profile.avatar,
                      }}
                    />
                  ) : (
                    <Avatar
                      rounded
                      size={40}
                      source={require('../public/images/man.png')}
                    />
                  )}
                </Col>
                <Col size={85}>
                  {profile.fullName ? (
                    <Text style={styles.txtUserName}>{profile.fullName}</Text>
                  ) : (
                    <Text style={styles.txtUserName}>Unknown</Text>
                  )}
                </Col>
              </Row>
            </Grid>
          </View>
          <View style={styles.viewDataInput}>
            <View style={styles.viewInputContent}>
              {/* <View style={styles.viewMentioned}>
                <TextInput
                  defaultValue="Id của thực vật (trên 12 ký tự số)?"
                  style={styles.inputMention}
                  underlineColorAndroid="transparent"
                  multiline={true}
                  onChangeText={text =>
                    this.setState({mentionedPlant: text})
                  }
                />
              </View> */}
              <View style={styles.viewPlantName}>
                <TextInput
                  //defaultValue="Bạn có biết thực vật này tên gì không?"
                  value={
                    route.params?.nameVN ? route.params?.nameVN : 'Unknown'
                  }
                  style={styles.inputMention}
                  underlineColorAndroid="transparent"
                  multiline={true}
                  onChangeText={text => this.setState({namePlant: text})}
                />
              </View>
              <View style={styles.viewContent}>
                <TextInput
                  defaultValue="Bạn muốn viết gì?"
                  style={styles.inputContent}
                  underlineColorAndroid="transparent"
                  multiline={true}
                  onChangeText={text => this.setState({content: text})}
                />
              </View>
            </View>
            <View style={styles.viewDisplayImage}>
              <View style={styles.viewImgDisplay}>
                <Image
                  source={{uri: route.params?.image.path}}
                  style={styles.imgDisplay}
                />
                {this._renderImages()}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
function mapStateToProp(state) {
  return {
    authenticate: state.auth.isAuthenticated,
    profile: state.user.profile,
  };
}
export default connect(
  mapStateToProp,
  {newPost},
)(CreatePostScreen);
