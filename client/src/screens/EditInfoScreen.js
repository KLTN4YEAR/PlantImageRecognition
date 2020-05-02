import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles } from '../public/styleSheets/styleViewInfo';
import { Icon } from 'react-native-elements'
const gender = [{ label: 'Nam', value: 0 }, { label: 'Nữ', value: 1 }];

export default function EditInfo({ navigation }) {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button buttonStyle={styles.btnDone} onPress={() => navigation.goBack()} icon={
          <Icon
            name="check"
            size={24}
            color="white"
          />
        }
          iconRight />
      ),
    });
  });

  return (
    <ScrollView style={styles.container}>
      <Row size={60} style={styles.viewInfo}>
        <Grid>
          <Row style={styles.rowInfo}>
            <Col size={30} style={styles.colInfo}>
              <Icon
                type='font-awesome'
                name='user'
                style={styles.labelIcon}
                color='tomato' />
              <Text style={styles.labelTxt}>Tên</Text>
            </Col>
            <Col size={70}>
              <Input
                placeholder="Nguyen Tuan Vu"
                inputStyle={styles.labelEdit}
              />
            </Col>
          </Row>

          <Row style={styles.rowInfo}>
            <Col size={30} style={styles.colInfo}>
              <Icon
                type='font-awesome'
                name='venus-mars'
                style={styles.labelIcon}
                color='tomato' />
              <Text style={styles.labelTxt}>Giới tính</Text>
            </Col>
            <Col size={70}>
              <View style={styles.viewGender}>
                <RadioForm
                  radio_props={gender}
                  initial={1} // you can set as per requirement, initial i set here 0 for male
                  // initial={-1} // you can set as per requirement, initial i set here 0 for male
                  onPress={() => this.value}
                  buttonSize={12} // size of radiobutton
                  buttonOuterSize={18}
                  selectedButtonColor={'tomato'}
                  selectedLabelColor={'tomato'}
                  labelStyle={styles.radioGender}
                  formHorizontal={true}
                />
              </View>
            </Col>
          </Row>

          <Row style={styles.rowInfo}>
            <Col size={30} style={styles.colInfo}>
              <Icon
                type='font-awesome'
                name='envelope-square'
                style={styles.labelIcon}
                color='tomato' />
              <Text style={styles.labelTxt}>Email</Text>
            </Col>
            <Col size={70}>
              <Input
                placeholder="Nguyentuanvu231198@gmail.com"
                inputStyle={styles.labelEdit}
              />
            </Col>
          </Row>

          <Row style={styles.rowInfo}>
            <Col size={30} style={styles.colInfo}>
              <Icon
                type='font-awesome'
                name='birthday-cake'
                style={styles.labelIcon}
                color='tomato' />
              <Text style={styles.labelTxt}>Sinh nhật</Text>
            </Col>
            <Col size={70}>
              <Input
                placeholder="23/11/1998"
                inputStyle={styles.labelEdit}
              />
            </Col>
          </Row>
        </Grid>
      </Row>
    </ScrollView>
  );
}
