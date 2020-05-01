import * as React from 'react';
import { Image, View, ScrollView, TouchableOpacity, TextInput, Alert, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {styles} from '../public/styleSheets/styleCreatePost';
import { Tooltip, Text, Button, Avatar, Input } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Icon } from 'react-native-elements'
import ImageView from 'react-native-image-view';
import { auth } from '../config/helper';
import { newPost, successMess } from '../action/postAction';

class CreatePostScreen extends React.Component {
    state = {
        postedBy:'',
        LocalImage: [],
        multipleUrl: [],
        content:'',
        mentionedPlant:'',
        post: {
            mentionedPlant:'',
            namePlant:'',
            content:'',
            plant_images:[''],
        },
    }
    successAlert = () => {
        Alert.alert(
            'Chúc mừng bạn đã đăng thành công!'
        )
    }
    failAlert = () => {
        Alert.alert(
            'Bài viết không hợp lệ, vui lòng thử lại!'
        )
    }
    componentDidMount() {
        this.getPermissionAsync();
        this.useLayoutEffect();
        //this.postData = new FormData();
    }
    //lưu những thay đổi nơi input vào state
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        
    };
    onSubmit = e => {
        e.preventDefault();//chấp nó bấm submit liên tục nè
        const post = this.state.post;
        post["mentionedPlant"] = this.state.mentionedPlant;
        post["namePlant"] = 'rose';
        post["content"] = this.state.content;
        post["plant_images"]=this.state.LocalImage;
        // create fromData to create post
        let formData = new FormData();
        formData.append('mentionedPlant', post.mentionedPlant);
        formData.append('namePlant', post.namePlant);
        formData.append('content', post.content);
        this.state.LocalImage.map((item, index) => {
            let fileType = item.substring(item.lastIndexOf(".") + 1);
            let fileName = item.substring(item.lastIndexOf('/') + 1);
            return formData.append("plant_images", {
                uri: item,
                name: fileName,
                type: `image/${fileType}`
            });
        });
        this.addPost(formData);
    };
    addPost = async (formatData) =>{
        newPost(formatData);
        console.log(successMess);
        if (successMess =='Created was successful'){
            this.successAlert();
            this.props.navigation.goBack();
        }else{
            this.failAlert();
            this.props.navigation.goBack();
            }
    }
    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this             work!')
            }
        }
    }
    useLayoutEffect=async () => {
        this.props.navigation.setOptions({
        headerRight: () => (
                <Button buttonStyle={styles.btnDone} onPress={this.onSubmit} iconRight title="ĐĂNG"/>
                // onPress={() => this.props.navigation.goBack()}
        ),
    });
    };
    _pickImage = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            base64: true,
            allowsEditing: true,
            aspect: [4, 3],
        })
        let imageUri = pickerResult ? `data:image/jpg;base64,${pickerResult.base64}` : null
        imageUri && { uri: imageUri }
        this.state.multipleUrl.push(imageUri)
        this.setState({
            LocalImage: this.state.LocalImage.concat([pickerResult.uri]),
        })
    }
    _takePhoto = async () => {
        const {
            status: cameraPerm
        } = await Permissions.askAsync(Permissions.CAMERA)
        const {
            status: cameraRollPerm
        } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        // only if user allows permission to camera AND camera roll
        if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
            let pickerResult = await ImagePicker.launchCameraAsync({
                base64: true,
                allowsEditing: true,
                aspect: [4, 3],
            })
            if (!pickerResult.cancelled) {
                let imageUri = pickerResult ? `data:image/jpg;base64,${pickerResult.base64}` : null
                this.state.multipleUrl.push(imageUri)
                this.setState({
                    LocalImage: this.state.LocalImage.concat([pickerResult.uri]),
                })
            }
        }
    }
    _renderImages() {
        let images = []
        this.state.LocalImage.map((item, index) => {
            images.push(
                <Image key={index} source={{ uri: item }} style={styles.imgDisplay} />
                
            )
        })
        return images
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.viewImage}>
                    <TouchableOpacity onPress={this._pickImage} style={styles.btnGallery}>
                        <Grid>
                            <Row>
                                <Col size={20}>
                                    <Icon
                                        type='material'
                                        name='photo-library'
                                        style={styles.labelIcon}
                                        color='tomato' />
                                </Col>
                                <Col size={80}>
                                    <Text style={styles.labelTxt}>Ảnh từ thư viện</Text>
                                </Col>
                            </Row>
                        </Grid>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._takePhoto} style={styles.btnCamera}>
                        <Grid>
                            <Row>
                                <Col size={20}>
                                    <Icon
                                        type='material'
                                        name='photo-camera'
                                        style={styles.labelIcon}
                                        color='tomato' />
                                </Col>
                                <Col size={80}>
                                    <Text style={styles.labelTxt}>Camera</Text>
                                </Col>
                            </Row>
                        </Grid>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnCancel} onPress={() => this.props.navigation.goBack()}>
                        <Grid>
                            <Row>
                                <Col size={20}>
                                    <Icon
                                        type='material'
                                        name='cancel'
                                        style={styles.labelIcon}
                                        color='tomato' />
                                </Col>
                                <Col size={80}>
                                    <Text style={styles.labelTxt}>Huỷ</Text>
                                </Col>
                            </Row>
                        </Grid>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.viewUser}>
                        <Grid>
                            <Row style={styles.rowPostBy}>
                                <Col size={15}>
                                    <Avatar
                                        rounded
                                        size={40}
                                        source={{
                                            uri:
                                                'https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/p960x960/50688968_787150878305428_8692489284222976000_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=47b_1pEflRMAX-noq9N&_nc_ht=scontent.fsgn5-7.fna&_nc_tp=6&oh=65351c2246646f2adbaf49549f9746e8&oe=5ECE32B1',
                                        }}
                                    />
                                </Col>
                                <Col size={85}>
                                    <Text style={styles.txtUserName}>Nguyễn Tuấn Vũ</Text>
                                </Col>
                            </Row>
                        </Grid>
                    </View>
                    <View style={styles.viewDataInput}>
                        <View style={styles.viewInputContent}>
                            <View style={styles.viewMentioned}>
                                <TextInput
                                    placeholder="Thực vật này trong thế nào nhỉ?"
                                    style={styles.inputMention}
                                    underlineColorAndroid="transparent"
                                    multiline={true}
                                    onChangeText={text => this.setState({ mentionedPlant: text })} 
                                />
                            </View>
                            <View style={styles.viewContent}>
                                <TextInput
                                    placeholder="Bạn muốn viết gì?"
                                    style={styles.inputContent}
                                    underlineColorAndroid="transparent"
                                    multiline={true}
                                    onChangeText={text => this.setState({ content: text })} 
                                />
                            </View>
                        </View>
                        <View style={styles.viewDisplayImage}>
                            <View style={styles.viewImgDisplay}>{this._renderImages()}</View>
                        </View>
                    </View>
                </ScrollView>
                
            </SafeAreaView>
        );

    }
} 
export default CreatePostScreen;