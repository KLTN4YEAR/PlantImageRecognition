import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  imgCard: {
    width: windowWidth,
    height: windowWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  txtNameResult: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    padding: 10,
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d1d1',
  },

  scrollView: {
    width: '100%',
    height: '100%',
    marginTop: 30,
  },

  gridView: {
    width: '100%',
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  rowResult: {
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  colResult: {
    padding: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRightWidth: 1,
    borderRightColor: '#d1d1d1',
  },

  labelInfo: {
    fontSize: 13,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    margin: 5,
    fontWeight: 'bold',
    color: '#385898',
  },

  labelInfoDis: {
    fontSize: 13,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    margin: 5,
    fontWeight: 'bold',
    color: '#385898',
    width: '100%',
  },

  areaInfo: {
    width: '100%',
    padding: 10,
    margin: 5,
    justifyContent: 'center',
  },

  rowDetail: {},
  colDetail: {},
  rowLabel: {},
  labelTxt: {},
  labelIcon: {},
});
