import * as React from 'react';
import { SearchBar } from 'react-native-elements';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { styles } from '../public/styleSheets/styleSearchView';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Icon } from 'react-native-elements'

export default class SearchScreen extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  renderSort() {
    if (this.state.search != '')
      return (
        <View style={styles.viewSearch}>
          <Text style={styles.labelResult}>Kết quả cho {this.state.search}</Text>
          <ScrollView style={styles.viewScroll}>
            <Grid>
              <Row>
                <Col size={1}>
                  <View style={styles.viewCard}>
                    <View style={styles.viewImg}>
                      <Image
                        source={{ uri: 'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg' }}
                        style={styles.imgCard}
                      />
                    </View>
                    <View style={styles.viewDetail}>
                      <Text style={styles.txtName}>Hoa hống</Text>
                      <View style={styles.viewPlant}>
                        <Row style={styles.rowDetail}>
                          <Col size={50} style={styles.colDetail}>
                            <Row style={styles.rowLabel}>
                              <Col size={20} >
                                <Icon
                                  type='font-awesome'
                                  name='pagelines'
                                  style={styles.labelIcon}
                                  size={13}
                                  color='tomato' />
                              </Col>
                              <Col size={80}>
                                <Text style={styles.labelTxt}>Phân loại</Text>
                              </Col>
                            </Row>
                          </Col>
                          <Col size={50} style={styles.colDetail}>
                            <Text style={styles.labelTxtContent}>Hoa Hồng</Text>
                          </Col>
                        </Row>
                        <Row style={styles.rowDetail}>
                          <Col size={50} style={styles.colDetail}>
                            <Row style={styles.rowLabel}>
                              <Col size={20} >
                                <Icon
                                  type='font-awesome'
                                  name='map-marker'
                                  style={styles.labelIcon}
                                  size={13}
                                  color='tomato' />
                              </Col>
                              <Col size={80}>
                                <Text style={styles.labelTxt}>Phân bố</Text>
                              </Col>
                            </Row>
                          </Col>
                          <Col size={50} style={styles.colDetail}>
                            <Text style={styles.labelTxtContent}>VietNam</Text>
                          </Col>

                        </Row>

                      </View>
                    </View>
                  </View>
                </Col>

                <Col size={1}>
                  <View style={styles.viewCard}>
                    <View style={styles.viewImg}>
                      <Image
                        source={{ uri: 'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg' }}
                        style={styles.imgCard}
                      />
                    </View>
                    <View style={styles.viewDetail}>
                      <Text style={styles.txtName}>Hoa hống</Text>
                      <View style={styles.viewPlant}>
                        <Row style={styles.rowDetail}>
                          <Col size={50} style={styles.colDetail}>
                            <Row style={styles.rowLabel}>
                              <Col size={20} >
                                <Icon
                                  type='font-awesome'
                                  name='pagelines'
                                  style={styles.labelIcon}
                                  size={13}
                                  color='tomato' />
                              </Col>
                              <Col size={80}>
                                <Text style={styles.labelTxt}>Phân loại</Text>
                              </Col>
                            </Row>
                          </Col>
                          <Col size={50} style={styles.colDetail}>
                            <Text style={styles.labelTxtContent}>Hoa Hồng</Text>
                          </Col>

                        </Row>
                        <Row style={styles.rowDetail}>
                          <Col size={50} style={styles.colDetail}>
                            <Row style={styles.rowLabel}>
                              <Col size={20} >
                                <Icon
                                  type='font-awesome'
                                  name='map-marker'
                                  style={styles.labelIcon}
                                  size={13}
                                  color='tomato' />
                              </Col>
                              <Col size={80}>
                                <Text style={styles.labelTxt}>Phân bố</Text>
                              </Col>
                            </Row>
                          </Col>
                          <Col size={50} style={styles.colDetail}>
                            <Text style={styles.labelTxtContent}>VietNam</Text>
                          </Col>
                        </Row>
                      </View>
                    </View>
                  </View>
                </Col>
              </Row>
            </Grid>
          </ScrollView>
        </View>
      );
    else
      return (
        <ScrollView style={styles.viewScroll}>
          <Grid>
            <Row>
              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewImg}>
                    <Image
                      source={{ uri: 'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg' }}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewDetail}>
                    <Text style={styles.txtName}>Hoa hống</Text>
                    <View style={styles.viewPlant}>
                      <Row style={styles.rowDetail}>
                        <Col size={50} style={styles.colDetail}>
                          <Row style={styles.rowLabel}>
                            <Col size={20} >
                              <Icon
                                type='font-awesome'
                                name='pagelines'
                                style={styles.labelIcon}
                                size={13}
                                color='tomato' />
                            </Col>
                            <Col size={80}>
                              <Text style={styles.labelTxt}>Phân loại</Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col size={50} style={styles.colDetail}>
                          <Text style={styles.labelTxtContent}>Hoa Hồng</Text>
                        </Col>

                      </Row>
                      <Row style={styles.rowDetail}>
                        <Col size={50} style={styles.colDetail}>
                          <Row style={styles.rowLabel}>
                            <Col size={20} >
                              <Icon
                                type='font-awesome'
                                name='map-marker'
                                style={styles.labelIcon}
                                size={13}
                                color='tomato' />
                            </Col>
                            <Col size={80}>
                              <Text style={styles.labelTxt}>Phân bố</Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col size={50} style={styles.colDetail}>
                          <Text style={styles.labelTxtContent}>VietNam</Text>
                        </Col>

                      </Row>

                    </View>
                  </View>
                </View>
              </Col>

              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewImg}>
                    <Image
                      source={{ uri: 'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg' }}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewDetail}>
                    <Text style={styles.txtName}>Hoa hống</Text>
                    <View style={styles.viewPlant}>
                      <Row style={styles.rowDetail}>
                        <Col size={50} style={styles.colDetail}>
                          <Row style={styles.rowLabel}>
                            <Col size={20} >
                              <Icon
                                type='font-awesome'
                                name='pagelines'
                                style={styles.labelIcon}
                                size={13}
                                color='tomato' />
                            </Col>
                            <Col size={80}>
                              <Text style={styles.labelTxt}>Phân loại</Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col size={50} style={styles.colDetail}>
                          <Text style={styles.labelTxtContent}>Hoa Hồng</Text>
                        </Col>

                      </Row>
                      <Row style={styles.rowDetail}>
                        <Col size={50} style={styles.colDetail}>
                          <Row style={styles.rowLabel}>
                            <Col size={20} >
                              <Icon
                                type='font-awesome'
                                name='map-marker'
                                style={styles.labelIcon}
                                size={13}
                                color='tomato' />
                            </Col>
                            <Col size={80}>
                              <Text style={styles.labelTxt}>Phân bố</Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col size={50} style={styles.colDetail}>
                          <Text style={styles.labelTxtContent}>VietNam</Text>
                        </Col>
                      </Row>
                    </View>
                  </View>
                </View>
              </Col>
            </Row>
            <Row>
              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewImg}>
                    <Image
                      source={{ uri: 'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg' }}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewDetail}>
                    <Text style={styles.txtName}>Hoa hống</Text>
                    <View style={styles.viewPlant}>
                      <Row style={styles.rowDetail}>
                        <Col size={50} style={styles.colDetail}>
                          <Row style={styles.rowLabel}>
                            <Col size={20} >
                              <Icon
                                type='font-awesome'
                                name='pagelines'
                                style={styles.labelIcon}
                                size={13}
                                color='tomato' />
                            </Col>
                            <Col size={80}>
                              <Text style={styles.labelTxt}>Phân loại</Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col size={50} style={styles.colDetail}>
                          <Text style={styles.labelTxtContent}>Hoa Hồng</Text>
                        </Col>

                      </Row>
                      <Row style={styles.rowDetail}>
                        <Col size={50} style={styles.colDetail}>
                          <Row style={styles.rowLabel}>
                            <Col size={20} >
                              <Icon
                                type='font-awesome'
                                name='map-marker'
                                style={styles.labelIcon}
                                size={13}
                                color='tomato' />
                            </Col>
                            <Col size={80}>
                              <Text style={styles.labelTxt}>Phân bố</Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col size={50} style={styles.colDetail}>
                          <Text style={styles.labelTxtContent}>VietNam</Text>
                        </Col>

                      </Row>

                    </View>
                  </View>
                </View>
              </Col>

              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewImg}>
                    <Image
                      source={{ uri: 'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg' }}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewDetail}>
                    <Text style={styles.txtName}>Hoa hống</Text>
                    <View style={styles.viewPlant}>
                      <Row style={styles.rowDetail}>
                        <Col size={50} style={styles.colDetail}>
                          <Row style={styles.rowLabel}>
                            <Col size={20} >
                              <Icon
                                type='font-awesome'
                                name='pagelines'
                                style={styles.labelIcon}
                                size={13}
                                color='tomato' />
                            </Col>
                            <Col size={80}>
                              <Text style={styles.labelTxt}>Phân loại</Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col size={50} style={styles.colDetail}>
                          <Text style={styles.labelTxtContent}>Hoa Hồng</Text>
                        </Col>

                      </Row>
                      <Row style={styles.rowDetail}>
                        <Col size={50} style={styles.colDetail}>
                          <Row style={styles.rowLabel}>
                            <Col size={20} >
                              <Icon
                                type='font-awesome'
                                name='map-marker'
                                style={styles.labelIcon}
                                size={13}
                                color='tomato' />
                            </Col>
                            <Col size={80}>
                              <Text style={styles.labelTxt}>Phân bố</Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col size={50} style={styles.colDetail}>
                          <Text style={styles.labelTxtContent}>VietNam</Text>
                        </Col>
                      </Row>
                    </View>
                  </View>
                </View>
              </Col>
            </Row>
            <Row>
              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewImg}>
                    <Image
                      source={{ uri: 'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg' }}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewDetail}>
                    <Text style={styles.txtName}>Hoa hống</Text>
                    <View style={styles.viewPlant}>
                      <Row style={styles.rowDetail}>
                        <Col size={50} style={styles.colDetail}>
                          <Row style={styles.rowLabel}>
                            <Col size={20} >
                              <Icon
                                type='font-awesome'
                                name='pagelines'
                                style={styles.labelIcon}
                                size={13}
                                color='tomato' />
                            </Col>
                            <Col size={80}>
                              <Text style={styles.labelTxt}>Phân loại</Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col size={50} style={styles.colDetail}>
                          <Text style={styles.labelTxtContent}>Hoa Hồng</Text>
                        </Col>

                      </Row>
                      <Row style={styles.rowDetail}>
                        <Col size={50} style={styles.colDetail}>
                          <Row style={styles.rowLabel}>
                            <Col size={20} >
                              <Icon
                                type='font-awesome'
                                name='map-marker'
                                style={styles.labelIcon}
                                size={13}
                                color='tomato' />
                            </Col>
                            <Col size={80}>
                              <Text style={styles.labelTxt}>Phân bố</Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col size={50} style={styles.colDetail}>
                          <Text style={styles.labelTxtContent}>VietNam</Text>
                        </Col>

                      </Row>

                    </View>
                  </View>
                </View>
              </Col>
              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewImg}>
                    <Image
                      source={{ uri: 'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg' }}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewDetail}>
                    <Text style={styles.txtName}>Hoa hống</Text>
                    <View style={styles.viewPlant}>
                      <Row style={styles.rowDetail}>
                        <Col size={50} style={styles.colDetail}>
                          <Row style={styles.rowLabel}>
                            <Col size={20} >
                              <Icon
                                type='font-awesome'
                                name='pagelines'
                                style={styles.labelIcon}
                                size={13}
                                color='tomato' />
                            </Col>
                            <Col size={80}>
                              <Text style={styles.labelTxt}>Phân loại</Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col size={50} style={styles.colDetail}>
                          <Text style={styles.labelTxtContent}>Hoa Hồng</Text>
                        </Col>

                      </Row>
                      <Row style={styles.rowDetail}>
                        <Col size={50} style={styles.colDetail}>
                          <Row style={styles.rowLabel}>
                            <Col size={20} >
                              <Icon
                                type='font-awesome'
                                name='map-marker'
                                style={styles.labelIcon}
                                size={13}
                                color='tomato' />
                            </Col>
                            <Col size={80}>
                              <Text style={styles.labelTxt}>Phân bố</Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col size={50} style={styles.colDetail}>
                          <Text style={styles.labelTxtContent}>VietNam</Text>
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

  render() {
    const { search } = this.state;
    return (
      <SafeAreaView style={styles.viewSafeArea}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
          inputContainerStyle={styles.inputSearchBar}
          showLoading
          containerStyle={styles.searchBar}
          cancelIcon
        />
        {this.renderSort()}
      </SafeAreaView>
    );
  }
}