import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#303030',
    flex: 1,
  },
  viewHeader: {
    flex: 1,
    position: 'absolute',
    top: 0,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
  },

  scrollView: {
    backgroundColor: 'transparent',
    marginHorizontal: 5,
    height: 'auto',
    position: 'relative',
    marginTop: 50,
  },

  viewUser: {
    padding: 5,
    width: 'auto',
    height: 'auto',
  },

  rowPostBy: {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },

  viewPostBy: {
    width: 'auto',
  },

  txtUserName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  btnPlantName: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: 3,
    backgroundColor: '#00afef',
    borderRadius: 5,
  },
  txtPlantName: {
    color: '#fff',
    fontSize: 10,
  },
  viewDataInput: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  viewInputContent: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  viewMentioned: {
    marginBottom: 3,
    borderBottomColor: '#d1d1d1',
    borderBottomWidth: 1,
    width: windowWidth,
  },

  inputMention: {
    padding: 10,
    color: '#DCF2DE',
  },

  viewContent: {
    marginBottom: 3,
    width: windowWidth,
  },

  inputContent: {
    padding: 10,
    color: '#DCF2DE',
  },
  btnBack: {
    width: '20%',
    alignItems: 'flex-start',
  },
  lblCreate: {
    width: '65%',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnSave: {
    width: '15%',
    alignSelf: 'flex-end',
  },
  lblButton: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
  viewImage: {
    padding: 5,
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(64,64,64, 0.8)',
  },

  btnGallery: {
    padding: 5,
    height: 40,
    backgroundColor: '#303030',
    borderRadius: 10,
    margin: 'auto',
    marginBottom: 5,
  },

  btnCamera: {
    padding: 5,
    height: 40,
    backgroundColor: '#303030',
    borderRadius: 10,
    margin: 'auto',
    marginBottom: 5,
  },

  btnCancel: {
    padding: 5,
    height: 40,
    backgroundColor: '#303030',
    borderRadius: 10,
    margin: 'auto',
  },

  viewDisplayImage: {
    padding: 10,
  },

  viewImgDisplay: {
    padding: 5,
    justifyContent: 'center',
    flex:1,
    flexDirection:'row',
  },

  imgDisplay: {
    alignItems: 'center',
    alignSelf: 'center',
    alignSelf: 'center',
    justifyContent:'center',
    width: windowWidth,
    height: windowWidth,
  },

  labelTxt: {
    fontSize: 14,
    fontWeight: '600',
    color: '#DCF2DE',
  },

  btnDone: {
    backgroundColor: 'transparent',
  },
});
