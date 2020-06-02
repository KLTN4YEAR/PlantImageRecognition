import * as React from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';
import {styles} from '../public/styleSheets/styleResultCamera';
import {Icon} from 'react-native-elements';

export default class ResultScreen extends React.Component {
  render() {
    return (
      <View style={styles.scrollView}>
        <Grid style={styles.gridView}>
          <Row style={styles.rowResult}>
            <Text style={styles.txtNameResult}>Hoa Hồng</Text>
          </Row>

          <Row style={styles.rowResult}>
            <Col size={1} style={styles.colResult}>
              <Text style={styles.labelInfo}>Ảnh</Text>
              <Image
                source={{
                  uri:
                    'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg',
                }}
                style={styles.imgCard}
              />
            </Col>
            <Col size={1} style={styles.colResult}>
              <Text style={styles.labelInfo}>Thông tin cơ bản</Text>
              <Row style={styles.rowDetail}>
                <Col size={50} style={styles.colDetail}>
                  <Row style={styles.rowLabel}>
                    <Col size={20}>
                      <Icon
                        type="font-awesome"
                        name="pagelines"
                        style={styles.labelIcon}
                        size={13}
                        color="#59c393"
                      />
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
                    <Col size={20}>
                      <Icon
                        type="font-awesome"
                        name="map-marker"
                        style={styles.labelIcon}
                        size={13}
                        color="#59c393"
                      />
                    </Col>
                    <Col size={80}>
                      <Text style={styles.labelTxt}>Phân bố</Text>
                    </Col>
                  </Row>
                </Col>
                <Col size={50} style={styles.colDetail}>
                  <Text style={styles.labelTxtContent}>Việt Nam</Text>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row style={styles.rowResult}>
            <Text style={styles.labelInfoDis}>Mô tả</Text>
          </Row>

          <Row style={styles.rowResult}>
            <TextInput
              multiline={true}
              style={styles.areaInfo}
              placeholder="Hồng hay hường là tên gọi chung cho các loài thực vật có hoa dạng cây bụi hoặc cây leo lâu năm thuộc chi Rosa, họ Rosaceae, với hơn 100 loài với màu hoa đa dạng, phân bố từ miền ôn đới đến nhiệt đới. Các loài này nổi tiếng vì hoa đẹp nên thường gọi là hoa hồng"
            />
          </Row>

          <Row style={styles.rowResult}>
            <Text style={styles.labelInfoDis}>Hình Ảnh</Text>
          </Row>
        </Grid>
      </View>
    );
  }
}
