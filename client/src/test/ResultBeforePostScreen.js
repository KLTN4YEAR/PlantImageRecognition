'use strict';
import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Icon, Input} from 'react-native-elements';
import {styles} from '../public/styleSheets/styleResultBefore';
import Tflite from 'tflite-react-native';

import InfoPlantBeforePost from '../components/InfoPlantBeforePostCard';

// Gọi các sqlite function
import {viewAllFlower, viewInfoByEngName} from '../sqlite/dbFlowerOffline';

import Autocomplete from 'react-native-autocomplete-input';

let tflite = new Tflite();
const height = 350;
const width = 350;
const flower = 'Flower';

class ResultBeforePostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: null,
      source: null,
      imageHeight: height,
      imageWidth: width,
      recognitions: [],
      getNamePlant: '',

      getAllPlant: [],
    };
  }
  async componentDidMount() {
    await this.onSelectModel(flower);
    await this.onRunModel();

    //xu ly bat dong bo sqlite
    await viewAllFlower(this.getResultFromVA);
  }

  getResultFromVA = result => {
    this.setState({getAllPlant: result});
  };

  async getVNNamePlant(EngName) {
    await viewInfoByEngName(EngName, this.getResultInfo);
  };
  
  getResultInfo = result => {
    if (result) {
      this.setState({
        getNamePlant: result[0].nameVN,
      });
    }
  };

  findPlants(query) {
    if (query === '') {
      return [];
    }

    const {getAllPlant} = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return getAllPlant.filter(
      getAllPlant => getAllPlant.nameVN.search(regex) >= 0,
    );
  }

  //Set up for model train (tflite file and list result by txt file)
  onSelectModel(model) {
    this.setState({model});
    switch (model) {
      case flower:
        var modelFile = 'models/lite_flowers_model_v5.tflite';
        var labelsFile = 'models/lite_flowers_model_v5.txt';
        break;
      default:
        var modelFile = 'models/lite_flowers_model_v1.tflite';
        var labelsFile = 'models/lite_flowers_model_v1.txt';
    }
    tflite.loadModel(
      {
        model: modelFile,
        labels: labelsFile,
      },
      (err, res) => {
        if (err) console.log(err);
        else console.log(res);
      },
    );
  }

  onRunModel() {
    const {route} = this.props;
    const path = route.params?.image.path;
    this.setState({
      source: {uri: path},
    });
    switch (this.state.model) {
      case flower:
        tflite.runModelOnImage(
          {
            path,
            imageMean: 128.0,
            imageStd: 128.0,
            numResults: 5,
            threshold: 0.05,
          },
          (err, res) => {
            if (err) console.log(err);
            else
              this.setState({
                recognitions: res,
              });
          },
        );
    }
  }

  //Return result (list 5 flower most like)
  renderResults() {
    const {model, recognitions} = this.state;
    const {navigation} = this.props;
    switch (model) {
      case flower:
        return recognitions.map((res, id) => {
          //Se lay res label de search theo ten hoa o day de ra ket qua chi tiet
          return (
            <TouchableOpacity
              key={id}
              onPress={() => {
                this.getVNNamePlant(res['label']);
              }}>
              <InfoPlantBeforePost
                key={id}
                fName={res['label']}
                percent={res['confidence'] * 10}
                navigation={navigation}
              />
            </TouchableOpacity>
          );
        });
    }
  }
  render() {
    const {route, navigation} = this.props;
    const {source, getAllPlant, getNamePlant} = this.state;
    const getNamePlantN = this.findPlants(getNamePlant);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
    return (
      <SafeAreaView>
        <View style={styles.viewHeader}>
          {/* <TouchableOpacity
            style={styles.btnBack}
            onPress={() => navigation.goBack()}>
            <Icon
              type="font-awesome"
              name="arrow-left"
              style={styles.icKind}
              size={20}
              color="#fff"
            />
          </TouchableOpacity> */}

          <Autocomplete
            // autoCapitalize="none"
            // autoCorrect={false}
            containerStyle={styles.autocompleteContainer}
            defaultValue={getNamePlant}
            data={
              getNamePlantN.length === 1 &&
              comp(getNamePlant, getNamePlantN[0].nameVN)
                ? []
                : getNamePlantN
            }
            //defaultValue={query}
            onChangeText={text => this.setState({getNamePlant: text})}
            placeholder="Nhập tên hoa nếu bạn biết"
            renderItem={({item, i}) => (
              <TouchableOpacity
                key={i}
                onPress={() => this.setState({getNamePlant: item.nameVN})}>
                <Text key={i} style={styles.itemText}>
                  {item.nameVN}
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.btnBack}
            onPress={() =>
              navigation.navigate('CreatePost', {
                nameVN: getNamePlant,
                image: route.params?.image,
              })
            }>
            <Icon
              type="font-awesome"
              name="arrow-right"
              style={styles.icKind}
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.viewContainer}>
          <Image
            source={{uri: route.params?.image.path}}
            style={styles.imgCard}
          />
          {source ? (
            <View style={styles.boxes}>
              <View style={styles.lblSearchResult}>
                <Text style={styles.lblResult}>Ảnh bạn đăng có thể là:</Text>
              </View>
              {this.renderResults()}
            </View>
          ) : (
            <Text>
              Xin lỗi rất có thể hoa bạn cần tìm chưa tồn lại trong cơ sở dữ
              liệu. Vui lòng nhập tên mà bạn biết!
            </Text>
          )}
          <View>
            <Text>
              Bạn nghĩ nó là loài khác. Vui lòng thay đổi hoặc nhập vào trường
              kết quả!
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default ResultBeforePostScreen;
