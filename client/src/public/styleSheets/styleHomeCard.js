import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  imgCard: {
    height: windowWidth * 0.6,
    width: windowWidth,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  viewFlatList: {
    width: '100%',
    padding: 10,
    marginBottom:50,
  },

  stylesHead: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    backgroundColor: '#33CC08',
    alignItems: 'center',
  },
  imgAva: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewLogoHead: {
    width: '60%',
    alignContent: 'center',
    alignSelf: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  txtLogoHead: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#DCF2DE',
    justifyContent: 'center',
  },
  btnAdd: {
    borderRadius: 50,
    width: 35,
    height: 35,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(54,53,64,0.2)',
    marginRight: 5,
  },
  rowCreate: {
    backgroundColor: '#ffff',
    marginTop: 10,
    margin: 3,
    padding: 10,
    borderRadius: 5,
  },
  txtUserNameCreate: {
    width: '100%',
  },
  viewCard: {
    marginTop: 10,
    padding: 10,
    borderRadius: 3,
    backgroundColor: '#424242',
    flex: 1,
    flexDirection: 'column',
  },
  viewPostBy: {
    marginTop: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    backgroundColor: 'rgba(64,64,64, 0.8)',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'column',
  },

  rowPostBy: {
    alignSelf: 'center',
    alignItems: 'center',
  },

  txtUserName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    color: '#DCF2DE',
  },
  txtCreateAt: {
    fontSize: 10,
    color: '#d1d1d1',
    textTransform: 'capitalize',
  },
  viewImg: {
    marginBottom: 10,
    alignSelf: 'center',
  },

  rowAdd: {
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

  touchAdd: {
    height: 30,
    width: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    backgroundColor: 'rgba(191, 186, 176, 0.6)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  colBtnAdd: {
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

  labelIconAdd: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginLeft: 'auto',
  },

  labelAdd: {
    color: '#F2EBDF',
    fontSize: 12,
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

  viewDetail: {
    position: 'relative',
    display: 'flex',
    marginTop: 10,
    padding: 5,
    flex: 1,
    flexDirection: 'column',
  },

  viewBtn: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },

  btnEvent: {
    width: 'auto',
    height: 'auto',
    margin: 25,
    height: '15%',
    backgroundColor: '#d4d5d6',
  },

  txtName: {
    width: '100%',
  },

  txtDec: {
    flex: 1,
    flexDirection: 'column',
    color: '#EBF2EB',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'left',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 3,
    letterSpacing: 0.5,
  },

  viewSafeArea: {
    backgroundColor: '#303030',
    flex: 1,
    marginTop:30,
  },

  viewScroll: {
    backgroundColor: 'transparent',
    marginHorizontal: 5,
  },

  viewCreatePost: {
    position: 'absolute',
    zIndex: 1,
    bottom: 15,
    right: 15,
    zIndex: 1,
  },

  btnCreate: {
    borderRadius: 25,
    height: 50,
    width: 50,
    backgroundColor: 'white',
    opacity: 0.7,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },

  labelIconCreate: {
    marginLeft: 'auto',
    marginRight: 'auto',
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
});
