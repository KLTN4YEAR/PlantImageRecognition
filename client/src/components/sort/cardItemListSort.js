import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';

export default class ExampleThree extends Component {
  constructor(props) {
    super(props);
    const elementImage = value => (
      <Image
        source={require('../../public/images/post.png')}
        style={styles.imgDD}
      />
    );
    this.state = {
      tableHead: ['Ảnh', 'Tên Thực Vật', 'Loài', 'Thao tác'],
      tableData: [
        [elementImage(1), 'Cúc vạn thọ', '3', '4'],
        [elementImage(1), 'Cúc', 'c', 'd'],
        [elementImage(1), 'Phong Lan', '3', '4'],
        [elementImage(1), 'Hoa dâm bụt', 'c', 'd'],
      ],
    };
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View style={styles.container}>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                <Row
                  data={state.tableHead}
                  style={styles.head}
                  textStyle={styles.text}
                />
                {state.tableData.map((rowData, index) => (
                  <TableWrapper key={index} style={styles.row}>
                    {rowData.map((cellData, cellIndex) => (
                      <Cell
                        key={cellIndex}
                        data={
                          cellIndex === 3 ? element(cellData, index) : cellData
                        }
                        textStyle={styles.text}
                      />
                    ))}
                  </TableWrapper>
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#808B97'},
  text: {margin: 6},
  row: {flexDirection: 'row', backgroundColor: '#FFF1C1'},
  btn: {width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2},
  btnText: {textAlign: 'center', color: '#fff'},
  imgDD: {height: 10, width: 20},
});
