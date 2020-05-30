import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {styles} from '../public/styleSheets/styleSearchView';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Icon} from 'react-native-elements';

class SearchResultList extends Component {
  render() {
    return (
      <ScrollView style={styles.viewScroll}>
        <Grid>
          <Row>
            <Col size={1}>
              <View style={styles.viewCard}>
                <View style={styles.viewImg}>
                  <Image
                    source={{
                      uri:
                        'https://previews.123rf.com/images/glopphy/glopphy1703/glopphy170300106/74798864-pink-flower-closeup-vector-image-logo-design.jpg',
                    }}
                    style={styles.imgCard}
                  />
                </View>

                <View style={styles.viewDetail}>
                  <Text style={styles.txtName}>{this.props.plant.name}</Text>

                  <View style={styles.viewPlant}>
                    <Row style={styles.rowDetail}>
                      <Col size={50} style={styles.colDetail}>
                        <Row style={styles.rowLabel}>
                          <Col size={20}>
                            <Icon
                              type="font-awesome"
                              name="pagelines"
                              style={styles.labelIcon}
                              size={13}
                              color="tomato"
                            />
                          </Col>
                          <Col size={80}>
                            <Text style={styles.labelTxt}>Phân loại</Text>
                          </Col>
                        </Row>
                      </Col>

                      <Col size={50} style={styles.colDetail}>
                        <Text style={styles.labelTxtContent}>
                          {this.props.plant.name}
                        </Text>
                      </Col>
                    </Row>

                    <Row style={styles.rowDetail}>
                      <Col size={50} style={styles.colDetail}>
                        <Row style={styles.rowLabel}>
                          <Col size={20}>
                            <Icon
                              type="font-awesome"
                              name="map-marker"
                              style={styles.labelIcon}
                              size={13}
                              color="tomato"
                            />
                          </Col>
                          <Col size={80}>
                            <Text style={styles.labelTxt}>Phân bố</Text>
                          </Col>
                        </Row>
                      </Col>

                      <Col size={50} style={styles.colDetail}>
                        <Text style={styles.labelTxtContent}>
                          {this.props.plant._id}
                        </Text>
                      </Col>
                    </Row>
                  </View>
                </View>
              </View>
            </Col>
          </Row>
        </Grid>
      </ScrollView>
    );
  }
}

export default SearchResultList;
