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

import ImageResizer from 'react-native-image-resizer';

class CreatePostScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        token: null,
        user: {
          avatar: null,
          fullName: null,
        },
      },
      resizedImageUri: null,
      postedBy: null,
      LocalImage: [],
      content: null,
      mentionedPlant: null,
      namePlant: null,
      post: {
        mentionedPlant: '111111111111',
        namePlant: '',
        content: '',
        plant_images: [''],
      },
    };
  }

  onValidate() {
    return this.validate({
      name: {minlength: 4, maxlength: 25, required: true, spacing: true},
      email: {email: true, required: true, spacing: true},
      number: {numbers: true, required: true, spacing: true},
    });
  }

  async componentDidMount() {
    const {route} = this.props;
    const data = await auth.isAuthenticated();
    this.setState({userInfo: data});
    await this.onGetIDflower(route.params?.nameVN);
    this.setState({namePlant: route.params?.nameVN});

    //optimize image
    this.resize();
  }

  async componentDidUpdate(prevProps) {
    const {route} = this.props;
    const name = route.params?.nameVN;
    if (route !== prevProps.route) {
      await this.onGetIDflower(name);
    }
  }

  async onGetIDflower(name) {
    await getIdByVNName(name, this.getResult);
  }

  getResult = result => {
    if (result) {
      this.setState({
        mentionedPlant: result[0]._id,
      });
    }
  };

  //Optimize image before post
  resize = () => {
    const {route} = this.props;
    ImageResizer.createResizedImage(
      route.params?.image.path,
      500,
      500,
      'JPEG',
      80,
    )
      .then(({uri}) => {
        this.setState({
          resizedImageUri: uri,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  //lưu những thay đổi nơi input vào state
  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault(); //chấp nó bấm submit liên tục nè
    if (this.onValidate()) {
      const {post, resizedImageUri} = this.state;
      const {route} = this.props;

      //const imagePlant = resizedImageUri;
      post['mentionedPlant'] = this.state.mentionedPlant;
      post['namePlant'] = route.params?.nameVN?route.params?.nameVN:this.state.namePlant;
      post['content'] = this.state.content;
      post['plant_images'] = resizedImageUri;

      // create fromData to create post
      let formData = new FormData();
      formData.append('mentionedPlant', post.mentionedPlant);
      formData.append('namePlant', post.namePlant);
      formData.append('content', post.content);

      let fileType = post.plant_images.substring(
        post.plant_images.lastIndexOf('.') + 1,
      );
      let fileName = post.plant_images.substring(
        post.plant_images.lastIndexOf('/') + 1,
      );
      formData.append('plant_images', {
        uri: post.plant_images,
        name: fileName,
        type: `image/${fileType}`,
      });
      this.addPost(formData);
    }
  };

  addPost = async formatData => {
    const {newPost, navigation} = this.props;
    const credentials = await auth.isAuthenticated();
    if (credentials) {
      newPost(credentials, formatData);
      navigation.navigate('Post');
    } else {
      Toast.show('Có lỗi xảy ra. Xin thử lại!');
    }
  };

  render() {
    const {profile, navigation, route} = this.props;
    const {userInfo, resizedImageUri} = this.state;

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
              color="#fff"
            />
          </TouchableOpacity>
          <Text style={styles.lblCreate}>ĐĂNG BÀI</Text>
          <TouchableOpacity
            style={styles.btnSave}
            onPress={this.onSubmit.bind(this)}>
            <Text style={styles.lblButton}>ĐĂNG</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.viewUser}>
            <Grid>
              <Row style={styles.rowPostBy}>
                <Col size={20}>
                  {userInfo.user.avatar ? (
                    <Avatar
                      rounded
                      size={50}
                      source={{
                        uri: userInfo.user.avatar,
                      }}
                    />
                  ) : (
                    <Avatar
                      rounded
                      size={50}
                      source={require('../public/images/man.png')}
                    />
                  )}
                </Col>
                <Col size={80}>
                  {userInfo.user.fullName ? (
                    <Text style={styles.txtUserName}>
                      {userInfo.user.fullName}
                    </Text>
                  ) : (
                    <Text style={styles.txtUserName}>Unknown</Text>
                  )}
                  {route.params?.nameVN ? (
                    <TouchableOpacity style={styles.btnPlantName}>
                      <Text style={styles.txtPlantName}>
                        # {route.params?.nameVN}
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity style={styles.btnPlantName}>
                      <Text style={styles.txtPlantName}>"Unknown"</Text>
                    </TouchableOpacity>
                  )}
                </Col>
              </Row>
            </Grid>
          </View>
          <View style={styles.viewDataInput}>
            <View style={styles.viewInputContent}>
              <View style={styles.viewContent}>
                <TextInput
                  placeholder="Bạn muốn viết gì?"
                  placeholderTextColor="#fff"
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
                  source={{
                    uri: resizedImageUri
                      ? resizedImageUri
                      : route.params?.image.path,
                  }}
                  style={styles.imgDisplay}
                />
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
