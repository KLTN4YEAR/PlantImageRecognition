import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Button, Avatar, Input} from 'react-native-elements';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {styles} from '../public/styleSheets/styleViewInfo';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import { Icon } from 'react-native-elements'
import AvatarCard from '../components/AvatarCard';
const gender = [{label: 'Male', value: 0}, {label: 'FeMale', value: 1}];

export default function ViewInfo({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <AvatarCard />
      <Row size={60} style={styles.viewInfo}>
        <Grid>
          <Row style={styles.rowEdit}>
            <TouchableOpacity style={styles.touchEdit} onPress={() => navigation.navigate('EditInfo')}>
              <Col size={30} style={styles.colBtnEdit}>
                <Icon
                size={20}
                type='font-awesome'
                name='edit'
                iconStyle={styles.labelIconEdit}
                color='white' />
                <Text style={styles.labelEdit}>Chỉnh sửa thông tin</Text>
              </Col>
            </TouchableOpacity>
            
          </Row>
          <Row style={styles.rowInfo}>
            <Col size={30} style={styles.colInfo}>
              <Icon
                type= 'font-awesome'
                name='user'
                style={styles.labelIcon}
                color='tomato' />
              <Text style={styles.labelTxt}>Tên:</Text>
            </Col>
            <Col size={70}>
              <Text style={styles.contentTxt}>Nguyen Tuan Vu</Text>
            </Col>
          </Row>
          <Row style={styles.rowInfo}>
            <Col size={30}>
              <Icon
                type='font-awesome'
                name='venus-mars'
                style={styles.labelIcon}
                color='tomato' />
              <Text style={styles.labelTxt}>Giới tính:</Text>
            </Col>
            <Col size={70}>
              <Text style={styles.contentTxt}>Nam</Text>
            </Col>
          </Row>
          <Row style={styles.rowInfo}>
            <Col size={30}>
              <Icon
                type='font-awesome'
                name='envelope-square'
                style={styles.labelIcon}
                color='tomato' />
              
              <Text style={styles.labelTxt}>Email:</Text>
            </Col>
            <Col size={70}>
              <Text style={styles.contentTxt}>Nguyetuanvu231198@gmail.com</Text>
            </Col>
          </Row>
          <Row style={styles.rowInfo}>
            <Col size={30}>
              <Icon
                type='font-awesome'
                name='birthday-cake'
                style={styles.labelIcon}
                color='tomato' />
              <Text style={styles.labelTxt}>Sinh nhật:</Text>
            </Col>
            <Col size={70}>
              <Text style={styles.contentTxt}>23/11/1998</Text>
            </Col>
          </Row>
          <Row style={styles.rowInfo}>
            <Col size={30}>
              <Icon
                type='font-awesome'
                name='pagelines'
                style={styles.labelIcon}
                color='tomato' />
              <Text style={styles.labelTxt}>Đóng góp:</Text>
            </Col>
            <Col size={70}>
              <Text style={styles.contentTxt}>10  
              
              </Text>
            </Col>
          </Row>
        </Grid>
      </Row>
      {/* <Row size={20} style={styles.viewButton}>
        <Button
          icon={
            <Icon
              name="edit"
              size={15}
              color="white"
            />
          }
          buttonStyle={styles.btnEdit}
          title="Chỉnh sửa"
          onPress={() => navigation.navigate('EditInfo')}
        />
      </Row> */}
    </ScrollView>
  );
}
