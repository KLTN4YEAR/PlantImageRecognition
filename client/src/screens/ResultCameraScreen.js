import * as React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { Grid, Row, Col } from 'react-native-easy-grid';
import {styles} from '../public/styleSheets/styleResultCamera';
import { Icon } from 'react-native-elements';
/**
const list = [
    {
        name: 'Image1',
        avatar_url: 'data:image/jpeg;base64,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',
        subtitle: 'Hong Vang'
    },
    {
        name: 'Image2',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLYSJtM1rL56qgUsZnyQpn_iiMZALLF3bCMsIuwV3VxQ-jbbkw&usqp=CAU',
        subtitle: 'Hong Vang dep'
    },
    {
        name: 'Image3',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8Fl5exGwMM6vAKaZzYLmlk9uKNfRcwIiBNLCaTyV97Z9V6Vo8&usqp=CAU',
        subtitle: 'Hong Hong Vang'
    },
    {
        name: 'Image4',
        avatar_url: 'https://cayvahoa.net/wp-content/uploads/2016/08/hoa-hong-vang-3.jpg',
        subtitle: 'Vang hong'
    },
    {
        name: 'Image5',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS3SQYWqykCvwcChow_37s4ZB9CtGnwVJ6x-7sr9zopAViV3wa&usqp=CAU',
        subtitle: 'Vice Chairman'
    },
]
*/


export default class ResultScreen extends React.Component {
/**
    keyExtractor = (item, index) => index.toString()

renderItem = ({ item }) => (
    <ListItem
        title={item.name}
        subtitle={item.subtitle}
        leftAvatar={{ source: { uri: item.avatar_url } }}
        bottomDivider
        chevron
    />
)
 */


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
                            source={{ uri: 'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg' }}
                            style={styles.imgCard}
                        />
                    </Col>
                    <Col size={1} style={styles.colResult}>
                        <Text style={styles.labelInfo}>Thông tin cơ bản</Text>
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
                                <Text style={styles.labelTxtContent}>Việt Nam</Text>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={styles.rowResult}><Text style={styles.labelInfoDis}>Mô tả</Text></Row>
                <Row style={styles.rowResult}>
                        <TextInput multiline={true} style={styles.areaInfo} placeholder='Hồng hay hường là tên gọi chung cho các loài thực vật có hoa dạng cây bụi hoặc cây leo lâu năm thuộc chi Rosa, họ Rosaceae, với hơn 100 loài với màu hoa đa dạng, phân bố từ miền ôn đới đến nhiệt đới. Các loài này nổi tiếng vì hoa đẹp nên thường gọi là hoa hồng' />
        
                </Row>
                <Row style={styles.rowResult}><Text style={styles.labelInfoDis}>Hình Ảnh</Text></Row>
                {/* <Row style={styles.rowResult}>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={list}
                        renderItem={this.renderItem}
                    />
                </Row> */}
            </Grid>
        </View>
       
    )
}
}