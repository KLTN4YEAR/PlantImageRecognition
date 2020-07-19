import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },

  inputSearch: {
    backgroundColor: 'transparent',
  },

  imgLogo: {
    width: 200,
    height: 200,
    marginTop: 100,
    marginBottom: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  viewSearch: {
    marginTop: 0,
  },

  searchBar: {
    padding: 10,
    height: 60,
    backgroundColor: 'transparent',
    borderWidth: 0, //no effect
    shadowColor: 'white', //no effect
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },

  inputSearchBar: {
    backgroundColor: 'rgba(82,82,82,0.3)',
    borderRadius: 30,
    height: 40,
  },

  viewSafeArea: {
    flex: 1,
    marginTop: 30,
    borderColor: 'transparent',
    backgroundColor: '#303030',
  },

  viewScroll: {
    backgroundColor: 'transparent',
    marginHorizontal: 5,
    backgroundColor: '#303030',
  },

  viewCard: {
    width: 'auto',
    height: 280,
    marginTop: 10,
    borderWidth: 1,
    padding: 5,
    margin: 3,
    borderRadius: 3,
    borderColor: '#d1d1d1',
  },

  viewPostBy: {
    marginTop: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
  },

  rowPostBy: {
    alignSelf: 'center',
    alignItems: 'center',
  },

  txtUserName: {
    fontSize: 14,
    width: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
  },

  viewImg: {
    width: 'auto',
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'rgba(82,82,82,0.7)',
    margin: 5,
    borderRadius: 20,
  },

  viewDetail: {
    position: 'relative',
    display: 'flex',
    margin: 10,
  },

  viewDetail: {
    borderTopWidth: 1,
    borderTopColor: '#d1d1d1',
    position: 'relative',
    display: 'flex',
  },

  btnEvent: {
    width: 'auto',
    height: 'auto',
    margin: 25,
    backgroundColor: '#d4d5d6',
  },
  viewInfo: {
    flex: 1,
  },
  txtName: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 20,
    padding: 5,
    color: '#fff',
  },

  txtDec: {
    marginLeft: 20,
    color: '#ffff',
    fontFamily: 'Helvetica',
    fontSize: 12,
    maxHeight: 50,
    padding: 5,
    letterSpacing: 0.8,
  },

  imgCard: {
    height: 90,
    width: 90,
    borderRadius: 50,
    borderColor: '#fff',
  },

  viewPlant: {
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 3,
    marginBottom: 3,
  },

  rowDetail: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 5,
    marginTop: 10,
  },

  colDetail: {
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
  },

  labelTxt: {
    fontSize: 13,
    width: '100%',
    marginLeft: 5,
    fontWeight: 'bold',
  },

  rowLabel: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  labelTxtContent: {
    fontSize: 13,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  labelResult: {
    marginLeft: 20,
    padding: 5,
    fontWeight: 'bold',
    color: '#ffff',
    width: '100%',
    fontSize: 18,
  },
  txtNotify: {
    padding: 10,
    fontSize: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 10,
    color: '#ffff',
  },
});
