import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',

    backgroundColor: '#303030',
    marginBottom: 0,
  },

  viewInfo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 100,
  },

  viewAvatar: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  viewButton: {
    marginLeft: 'auto',
    marginRight: 20,
    marginTop: 50,
  },

  btnEdit: {
    backgroundColor: 'tomato',
  },

  labelTxt: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    color: '#9C9C9C',
  },

  contentTxt: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#363636',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },

  rowInfo: {
    backgroundColor: '#303030',
    marginTop: 5,
    marginBottom: 5,
    padding: 3,
    borderWidth: 1,
    borderColor: '#303030',
    borderRadius: 5,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignContent: 'center',
    alignItems: 'center',
  },

  rowImage: {
    backgroundColor: '#303030',

    borderBottomColor: 'transparent',
    borderBottomWidth: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  imgCard: {
    height: windowWidth * 0.7,
    width: windowWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  rowInfoTextArea: {},

  rowEdit: {
    backgroundColor: '#ffff',
    marginTop: 5,
    marginBottom: 25,
    padding: 3,
    borderBottomWidth: 2,
    borderColor: '#d1d1d1',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  radioGender: {
    marginLeft: 'auto',
    marginRight: 20,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  viewGender: {
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  viewBtn: {
    position: 'absolute',
    bottom: 50,
    zIndex: 2,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#303032',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modeOnly: {
    width: '30%',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  txtMode: {
    fontSize: 10,
    color: '#f1f1f1',
  },
  lstContribute: {
    flex: 1,
    backgroundColor: '#303030',
    borderRadius: 10,
    marginBottom: 50,
  },
  btnContribute: {
    backgroundColor: '#33CC08',
    width: '55%',
    borderRadius: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    padding: 3,
    height: 40,
  },

  txtContribute: {
    color: '#fff',
    fontSize: 16,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  btnDone: {
    backgroundColor: 'transparent',
  },

  touchEdit: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    backgroundColor: 'blue',
    height: 40,
    backgroundColor: '#439aa6',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  colInfo: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  colBtnEdit: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 'auto',
    marginBottom: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  labelIconEdit: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginLeft: 'auto',
  },

  labelEdit: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: 'auto',
    marginBottom: 'auto',
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },

  labelIcon: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
