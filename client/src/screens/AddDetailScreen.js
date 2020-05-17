import * as React from 'react';
import { Text, ScrollView, Image } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles } from '../public/styleSheets/styleAddDetail';
import { Icon } from 'react-native-elements'

export default function AddDetailScreen({ navigation }) {
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
                    <Row style={styles.rowImage}>
                        <Image
                            source={{ uri: 'https://mrhoa.com/wp-content/uploads/2019/01/hoa-hong-phan-dep.jpg' }}
                            style={styles.imgCard}
                        />
                    </Row>
                    <Row style={styles.rowInfo}>
                        <Col size={30} style={styles.colInfo}>
                            <Icon
                                type='font-awesome'
                                name='font'
                                style={styles.labelIcon}
                                color='#59c393' />
                            <Text style={styles.labelTxt}>Tên thực vật</Text>
                        </Col>
                        <Col size={70}>
                            <Input
                                placeholder="Hoa hồng"
                                inputStyle={styles.labelEdit}
                            />
                        </Col>
                    </Row>
                    <Row style={styles.rowInfo}>
                        <Col size={30} style={styles.colInfo}>
                            <Icon
                                type='font-awesome'
                                name='map-marker'
                                style={styles.labelIcon}
                                color='#59c393' />
                            <Text style={styles.labelTxt}>Nơi phân bố</Text>
                        </Col>
                        <Col size={70}>
                            <Input
                                placeholder="Tây Ninh"
                                inputStyle={styles.labelEdit}
                            />
                        </Col>
                    </Row>
                    <Row style={styles.rowInfo}>
                        <Col size={30} style={styles.colInfo}>
                            <Icon
                                type='font-awesome'
                                name='leaf'
                                style={styles.labelIcon}
                                color='#59c393' />
                            <Text style={styles.labelTxt}>Giống loài</Text>
                        </Col>
                        <Col size={70}>
                            <Input
                                placeholder="Hoa hồng"
                                inputStyle={styles.labelEdit}
                            />
                        </Col>
                    </Row>
                    <Row style={styles.rowInfo}>
                        <Col size={30} style={styles.colInfo}>
                            <Icon
                                type='font-awesome'
                                name='align-center'
                                style={styles.labelIcon}
                                color='#59c393' />
                            <Text style={styles.labelTxt}>Mô tả</Text>
                        </Col>
                        <Col size={70}>
                            <Input
                                multiline={true}
                                numberOfLines={4}
                                placeholder="Hoa hồng đỏ là một giống loài thuộc loại hoa hồng có gai, phân bố chủ yếu ở các nước ôn đới"
                                inputStyle={styles.labelEdit}
                            />
                        </Col>
                    </Row>
                </Grid>
            </Row>
        </ScrollView>
    );
}
