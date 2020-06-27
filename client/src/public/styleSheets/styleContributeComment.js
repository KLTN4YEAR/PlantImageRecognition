import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
    padding: 1,
  },
  viewContribute: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000',
    padding: 10,
    marginBottom: 5,
  },
  avatarContribute: {
    width: '25%',
    alignItems: 'center',
    padding: 10,
  },
  imgContribute: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  contentContribute: {
    width: '75%',
  },
  headerContribute: {
    flex: 1,
    flexDirection: 'row',
  },
  nameContribute: {
    width: '70%',
    fontWeight: 'bold',
    color: '#ffff',
    fontSize: 14,
  },
  dateContribute: {
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    fontSize: 10,
    color: '#d1d1d1',
  },
  viewCommentContribute: {
    borderRadius: 3,
    marginTop: 10,
  },
  txtCommentContribute: {color: '#fff'},
  btnViewCB: {
    width: 70,
    height: 20,
    borderRadius: 5,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    padding: 3,
    marginTop: 5,
  },
  txtBtnCB: {
    fontSize: 10,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
  },
});
