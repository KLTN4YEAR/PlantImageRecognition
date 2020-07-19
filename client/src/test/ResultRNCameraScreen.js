'use strict';
import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  SafeAreaView
} from 'react-native';
import {Icon} from 'react-native-elements';
import {styles} from '../public/styleSheets/styleTfliteView';
import Tflite from 'tflite-react-native';
import GetInfoPlant from '../components/GetInfoPlantCard';
import * as Animatable from 'react-native-animatable';

let tflite = new Tflite();
const height = 350;
const width = 350;
const flower = 'Flower';

class ResultCamera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: null,
      source: null,
      imageHeight: height,
      imageWidth: width,
      recognitions: [],
    };
  }
  async componentDidMount() {
    await this.onSelectModel(flower);
    await this.onRunModel();
  }
  //Set up for model train (tflite file and list result by txt file)
  onSelectModel(model) {
    this.setState({model});
    switch (model) {
      case flower:
        var modelFile = 'models/lite_flowers_model_v8.tflite';
        var labelsFile = 'models/lite_flowers_model_v8.txt';
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
    const{navigation}=this.props;
    switch (model) {
      case flower:
        return recognitions.map((res, id) => {
          //Se lay res label de search theo ten hoa o day de ra ket qua chi tiet
          return (
            <GetInfoPlant
              key={id}
              fName={res['label']}
              percent={res['confidence'] * 10}
              navigation={navigation}
            />
          );
        });
    }
  }
  render() {
    const {route, navigation} = this.props;
    const {source} = this.state;
    return (
      <SafeAreaView style={{marginTop: 30}}>
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
        </View>
        <ScrollView style={styles.viewContainer}>
          <Animatable.View animation="zoomIn">
            <Image
              source={{uri: route.params?.image.path}}
              style={styles.imgCard}
            />
          </Animatable.View>

          {source ? (
            <View style={styles.boxes}>
              <View style={styles.lblSearchResult}>
                <Text style={styles.lblResult}>Kết quả tìm kiếm</Text>
              </View>
              {this.renderResults()}
            </View>
          ) : (
            <Text>Không có kết quả</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default ResultCamera;
