import * as React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {styles} from '../../public/styleSheets/styleHomeCard';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Test from '../user/test';

export default class HomeCard extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.viewSafeArea}>
        <ScrollView style={styles.viewScroll}>
          <Grid>
            <Row>
              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewImg}>
                    <Image
                      source={require('../../public/images/vu.jpg')}
                      style={styles.imgCard}
                    />
                    <Test/>
                  </View>
                  <View style={styles.viewDetail}>
                    <Text style={styles.txtName}> Title </Text>
                    <Text style={styles.txtDec}>Description of the image</Text>
                  </View>
                  <View style={styles.viewBtn}>
                    <Grid>
                      <Row>
                        <Col size={1}>
                          <Button
                            title="ADD Detail"
                            style={styles.btnEvent}
                            onPress={() =>
                              this.props.navigation.navigate('AddDetail')
                            }
                          />
                        </Col>
                      </Row>
                    </Grid>
                  </View>
                </View>
              </Col>
              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewImg}>
                    <Image
                      source={require('../../public/images/vu.jpg')}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewDetail}>
                    <Text style={styles.txtName}> Title </Text>
                    <Text style={styles.txtDec}>Description of the image</Text>
                  </View>
                  <View style={styles.viewBtn}>
                    <Grid>
                      <Row>
                        <Col size={1}>
                          <Button
                            title="ADD Detail"
                            style={styles.btnEvent}
                            onPress={() =>
                              this.props.navigation.navigate('AddDetail')
                            }
                          />
                        </Col>
                      </Row>
                    </Grid>
                  </View>
                </View>
              </Col>
            </Row>
            <Row>
              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewImg}>
                    <Image
                      source={require('../../public/images/vu.jpg')}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewDetail}>
                    <Text style={styles.txtName}> Title </Text>
                    <Text style={styles.txtDec}>Description of the image</Text>
                  </View>
                  <View style={styles.viewBtn}>
                    <Grid>
                      <Row>
                        <Col size={1}>
                          <Button
                            title="ADD Detail"
                            style={styles.btnEvent}
                            onPress={() =>
                              this.props.navigation.navigate('AddDetail')
                            }
                          />
                        </Col>
                      </Row>
                    </Grid>
                  </View>
                </View>
              </Col>
              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewImg}>
                    <Image
                      source={require('../../public/images/vu.jpg')}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewDetail}>
                    <Text style={styles.txtName}> Title </Text>
                    <Text style={styles.txtDec}>Description of the image</Text>
                  </View>
                  <View style={styles.viewBtn}>
                    <Grid>
                      <Row>
                        <Col size={1}>
                          <Button
                            title="ADD Detail"
                            style={styles.btnEvent}
                            onPress={() =>
                              this.props.navigation.navigate('AddDetail')
                            }
                          />
                        </Col>
                      </Row>
                    </Grid>
                  </View>
                </View>
              </Col>
            </Row>
            <Row>
              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewImg}>
                    <Image
                      source={require('../../public/images/vu.jpg')}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewDetail}>
                    <Text style={styles.txtName}> Title </Text>
                    <Text style={styles.txtDec}>Description of the image</Text>
                  </View>
                  <View style={styles.viewBtn}>
                    <Grid>
                      <Row>
                        <Col size={1}>
                          <Button
                            title="ADD Detail"
                            style={styles.btnEvent}
                            onPress={() =>
                              this.props.navigation.navigate('AddDetail')
                            }
                          />
                        </Col>
                      </Row>
                    </Grid>
                  </View>
                </View>
              </Col>
              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewImg}>
                    <Image
                      source={require('../../public/images/vu.jpg')}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewDetail}>
                    <Text style={styles.txtName}> Title </Text>
                    <Text style={styles.txtDec}>Description of the image</Text>
                  </View>
                  <View style={styles.viewBtn}>
                    <Grid>
                      <Row>
                        <Col size={1}>
                          <Button
                            title="ADD Detail"
                            containerStyle={styles.btnEvent}
                            onPress={() =>
                              this.props.navigation.navigate('AddDetail')
                            }
                          />
                        </Col>
                      </Row>
                    </Grid>
                  </View>
                </View>
              </Col>
            </Row>
            <Row>
              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewImg}>
                    <Image
                      source={require('../../public/images/vu.jpg')}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewDetail}>
                    <Text style={styles.txtName}> Title </Text>
                    <Text style={styles.txtDec}>Description of the image</Text>
                  </View>
                  <View style={styles.viewBtn}>
                    <Grid>
                      <Row>
                        <Col size={1}>
                          <Button
                            title="ADD Detail"
                            style={styles.btnEvent}
                            onPress={() =>
                              this.props.navigation.navigate('AddDetail')
                            }
                          />
                        </Col>
                      </Row>
                    </Grid>
                  </View>
                </View>
              </Col>
              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewImg}>
                    <Image
                      source={require('../../public/images/vu.jpg')}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewDetail}>
                    <Text style={styles.txtName}> Title </Text>
                    <Text style={styles.txtDec}>Description of the image</Text>
                  </View>
                  <View style={styles.viewBtn}>
                    <Grid>
                      <Row>
                        <Col size={1}>
                          <Button
                            title="ADD Detail"
                            style={styles.btnEvent}
                            onPress={() =>
                              this.props.navigation.navigate('AddDetail')
                            }
                          />
                        </Col>
                      </Row>
                    </Grid>
                  </View>
                </View>
              </Col>
            </Row>
          </Grid>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
