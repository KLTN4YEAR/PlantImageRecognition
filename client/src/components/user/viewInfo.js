import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, Avatar, Input} from 'react-native-elements';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {styles} from '../../public/styleSheets/styleViewInfo';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
const gender = [{label: 'Male', value: 0}, {label: 'FeMale', value: 1}];

export default function ViewInfo({navigation}) {
  return (
    <View style={styles.container}>
      <Row size={60} style={styles.viewInfo}>
        <Grid>
          <Row style={styles.rowInfo}>
            <Col size={30}>
              <Text style={styles.labelTxt}>Tên:</Text>
            </Col>
            <Col size={70}>
              <Input
                placeholder="INPUT WITH ICON"
                leftIcon={{type: 'font-awesome', name: 'user'}}
              />
            </Col>
          </Row>
          <Row style={styles.rowInfo}>
            <Col size={30}>
              <Text style={styles.labelTxt}>Giới tính:</Text>
            </Col>
            <Col size={70}>
              <RadioForm
                radio_props={gender}
                initial={1} // you can set as per requirement, initial i set here 0 for male
                // initial={-1} // you can set as per requirement, initial i set here 0 for male
                onPress={() => this.value}
                buttonSize={20} // size of radiobutton
                buttonOuterSize={30}
                selectedButtonColor={'green'}
                selectedLabelColor={'green'}
                labelStyle={{fontSize: 12}}
              />
            </Col>
          </Row>
          <Row style={styles.rowInfo}>
            <Col size={30}>
              <Text style={styles.labelTxt}>Email:</Text>
            </Col>
            <Col size={70}>
              <Input
                placeholder="INPUT WITH ICON"
                leftIcon={{type: 'font-awesome', name: 'envelope'}}
              />
            </Col>
          </Row>
          <Row style={styles.rowInfo}>
            <Col size={30}>
              <Text style={styles.labelTxt}>Sinh nhật:</Text>
            </Col>
            <Col size={70}>
              <Input
                placeholder="INPUT WITH ICON"
                leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
              />
            </Col>
          </Row>
          <Row style={styles.rowInfo}>
            <Col size={30}>
              <Text style={styles.labelTxt}>Đóng góp:</Text>
            </Col>
            <Col size={70}>
              <Input
                placeholder="INPUT WITH ICON"
                leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
              />
            </Col>
          </Row>
        </Grid>
      </Row>
      <Row size={20} style={styles.viewButton}>
        <Button
          title="Chỉnh sửa"
          onPress={() => navigation.navigate('EditInfo')}
        />
      </Row>
    </View>
  );
}
