import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {styles} from '../public/styleSheets/styleHomeCard';
import {Col, Row, Grid} from 'react-native-easy-grid';
import { Avatar } from 'react-native-elements';
import { Icon } from 'react-native-elements'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.viewSafeArea}>
        <ScrollView style={styles.viewScroll}>
          <Grid>
            <Row>
              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewPostBy}>
                    <Row style={styles.rowPostBy}>
                      <Col size={30}>
                        <Avatar
                          rounded
                          source={{
                            uri:
                              'https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/p960x960/50688968_787150878305428_8692489284222976000_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=NgLLgz0HThwAX8QSxZN&_nc_ht=scontent.fvca1-1.fna&_nc_tp=6&oh=395bd4faa92119e933b439c13699cd65&oe=5EB28331',
                          }}
                        />
                      </Col>
                      <Col size={70}>
                        <Text style={styles.txtUserName}>Nguyen Tuan Vu</Text>
                      </Col>
                    </Row> 
                  </View>
                  
                  <View style={styles.viewDetail}>
                    <Text style={styles.txtDec}>Cho mình hỏi đây là hoa gì</Text>
                  </View>
                  <View style={styles.viewImg}>
                    <Image
                      source={{uri:'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg'}}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewBtn}>
                          <TouchableOpacity style={styles.touchAdd} onPress={() =>
                            this.props.navigation.navigate('AddDetail')
                          }>
                            <Col size={30} style={styles.colBtnAdd}>
                              <Icon
                                size={20}
                                type='font-awesome'
                                name='edit'
                                iconStyle={styles.labelIconAdd}
                                color='#606770' />
                              <Text style={styles.labelAdd}>Thêm thông tin</Text>
                            </Col>
                          </TouchableOpacity>
                  </View>
                </View>
              </Col>
              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewPostBy}>
                    <Row style={styles.rowPostBy}>
                      <Col size={30}>
                        <Avatar
                          rounded
                          source={{
                            uri:
                              'https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/p960x960/50688968_787150878305428_8692489284222976000_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=NgLLgz0HThwAX8QSxZN&_nc_ht=scontent.fvca1-1.fna&_nc_tp=6&oh=395bd4faa92119e933b439c13699cd65&oe=5EB28331',
                          }}
                        />
                      </Col>
                      <Col size={70}>
                        <Text style={styles.txtUserName}>Nguyen Tuan Vu</Text>
                      </Col>
                    </Row>
                  </View>

                  <View style={styles.viewDetail}>
                    <Text style={styles.txtDec}>Cho mình hỏi đây là hoa gì</Text>
                  </View>
                  <View style={styles.viewImg}>
                    <Image
                      source={{ uri: 'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg' }}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewBtn}>
                    <TouchableOpacity style={styles.touchAdd} onPress={() =>
                      this.props.navigation.navigate('AddDetail')
                    }>
                      <Col size={30} style={styles.colBtnAdd}>
                        <Icon
                          size={20}
                          type='font-awesome'
                          name='edit'
                          iconStyle={styles.labelIconAdd}
                          color='#606770' />
                        <Text style={styles.labelAdd}>Thêm thông tin</Text>
                      </Col>
                    </TouchableOpacity>
                  </View>
                </View>
              </Col>
            </Row>
            <Row>
              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewPostBy}>
                    <Row style={styles.rowPostBy}>
                      <Col size={30}>
                        <Avatar
                          rounded
                          source={{
                            uri:
                              'https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/p960x960/50688968_787150878305428_8692489284222976000_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=NgLLgz0HThwAX8QSxZN&_nc_ht=scontent.fvca1-1.fna&_nc_tp=6&oh=395bd4faa92119e933b439c13699cd65&oe=5EB28331',
                          }}
                        />
                      </Col>
                      <Col size={70}>
                        <Text style={styles.txtUserName}>Nguyen Tuan Vu</Text>
                      </Col>
                    </Row>
                  </View>
                  <View style={styles.viewDetail}>
                    <Text style={styles.txtDec}>Cho mình hỏi đây là hoa gì</Text>
                  </View>
                  <View style={styles.viewImg}>
                    <Image
                      source={{ uri: 'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg' }}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewBtn}>
                    <TouchableOpacity style={styles.touchAdd} onPress={() =>
                      this.props.navigation.navigate('AddDetail')
                    }>
                      <Col size={30} style={styles.colBtnAdd}>
                        <Icon
                          size={20}
                          type='font-awesome'
                          name='edit'
                          iconStyle={styles.labelIconAdd}
                          color='#606770' />
                        <Text style={styles.labelAdd}>Thêm thông tin</Text>
                      </Col>
                    </TouchableOpacity>
                  </View>
                </View>
              </Col>
              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewPostBy}>
                    <Row style={styles.rowPostBy}>
                      <Col size={30}>
                        <Avatar
                          rounded
                          source={{
                            uri:
                              'https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/p960x960/50688968_787150878305428_8692489284222976000_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=NgLLgz0HThwAX8QSxZN&_nc_ht=scontent.fvca1-1.fna&_nc_tp=6&oh=395bd4faa92119e933b439c13699cd65&oe=5EB28331',
                          }}
                        />
                      </Col>
                      <Col size={70}>
                        <Text style={styles.txtUserName}>Nguyen Tuan Vu</Text>
                      </Col>
                    </Row>
                  </View>
                  <View style={styles.viewDetail}>
                    <Text style={styles.txtDec}>Cho mình hỏi đây là hoa gì</Text>
                  </View>
                  <View style={styles.viewImg}>
                    <Image
                      source={{ uri: 'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg' }}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewBtn}>
                    <TouchableOpacity style={styles.touchAdd} onPress={() =>
                      this.props.navigation.navigate('AddDetail')
                    }>
                      <Col size={30} style={styles.colBtnAdd}>
                        <Icon
                          size={20}
                          type='font-awesome'
                          name='edit'
                          iconStyle={styles.labelIconAdd}
                          color='#606770' />
                        <Text style={styles.labelAdd}>Thêm thông tin</Text>
                      </Col>
                    </TouchableOpacity>
                  </View>
                </View>
              </Col>
            </Row>
            <Row>
              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewPostBy}>
                    <Row style={styles.rowPostBy}>
                      <Col size={30}>
                        <Avatar
                          rounded
                          source={{
                            uri:
                              'https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/p960x960/50688968_787150878305428_8692489284222976000_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=NgLLgz0HThwAX8QSxZN&_nc_ht=scontent.fvca1-1.fna&_nc_tp=6&oh=395bd4faa92119e933b439c13699cd65&oe=5EB28331',
                          }}
                        />
                      </Col>
                      <Col size={70}>
                        <Text style={styles.txtUserName}>Nguyen Tuan Vu</Text>
                      </Col>
                    </Row>
                  </View>
                  <View style={styles.viewDetail}>
                    <Text style={styles.txtDec}>Cho mình hỏi đây là hoa gì</Text>
                  </View>
                  <View style={styles.viewImg}>
                    <Image
                      source={{ uri: 'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg' }}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewBtn}>
                    <TouchableOpacity style={styles.touchAdd} onPress={() =>
                      this.props.navigation.navigate('AddDetail')
                    }>
                      <Col size={30} style={styles.colBtnAdd}>
                        <Icon
                          size={20}
                          type='font-awesome'
                          name='edit'
                          iconStyle={styles.labelIconAdd}
                          color='#606770' />
                        <Text style={styles.labelAdd}>Thêm thông tin</Text>
                      </Col>
                    </TouchableOpacity>
                  </View>
                </View>
              </Col>
              <Col size={1}>
                <View style={styles.viewCard}>
                  <View style={styles.viewPostBy}>
                    <Row style={styles.rowPostBy}>
                      <Col size={30}>
                        <Avatar
                          rounded
                          source={{
                            uri:
                              'https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/p960x960/50688968_787150878305428_8692489284222976000_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=NgLLgz0HThwAX8QSxZN&_nc_ht=scontent.fvca1-1.fna&_nc_tp=6&oh=395bd4faa92119e933b439c13699cd65&oe=5EB28331',
                          }}
                        />
                      </Col>
                      <Col size={70}>
                        <Text style={styles.txtUserName}>Nguyen Tuan Vu</Text>
                      </Col>
                    </Row>
                  </View>

                  <View style={styles.viewDetail}>
                    <Text style={styles.txtDec}>Cho mình hỏi đây là hoa gì</Text>
                  </View>
                  <View style={styles.viewImg}>
                    <Image
                      source={{ uri: 'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg' }}
                      style={styles.imgCard}
                    />
                  </View>
                  <View style={styles.viewBtn}>
                    <TouchableOpacity style={styles.touchAdd} onPress={() =>
                      this.props.navigation.navigate('AddDetail')
                    }>
                      <Col size={30} style={styles.colBtnAdd}>
                        <Icon
                          size={20}
                          type='font-awesome'
                          name='edit'
                          iconStyle={styles.labelIconAdd}
                          color='#606770' />
                        <Text style={styles.labelAdd}>Thêm thông tin</Text>
                      </Col>
                    </TouchableOpacity>
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
