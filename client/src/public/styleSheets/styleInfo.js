import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
         container: {
           marginTop: 30,
           padding: 10,
           backgroundColor: '#303030',
           height: '100%',
         },
         logo: {
           width: 35,
           height: 35,
         },
         txtTitle: {
           fontSize: 24,
           marginLeft: 'auto',
           marginRight: 'auto',
           color: '#33CC08',
           fontWeight: 'bold',
         },
         viewIntro: {
           borderWidth: 1,
           borderColor: '#d1d1d1',
           padding: 10,
         },
         txtTileIntro: {
           fontSize: 18,
           fontWeight: '600',
           color: '#f1f1f1',
         },
         txtContentIntro: {color: '#f1f1f1', fontSize: 15},
         viewContact: {
           marginTop: 10,
           padding: 10,
           borderWidth: 1,
           borderColor: '#d1d1d1',
           borderRadius: 10,
         },
         txtTitleContact: {
           marginLeft: 'auto',
           marginRight: 'auto',
           fontSize: 14,
           fontWeight: '600',
           color: '#ffffaa',
         },
         viewContactPhone: {
           padding: 5,
           marginBottom: 20,
         },
         viewContactMail: {
           padding: 5,
           marginBottom: 20,
         },
         txtTitleContactMail: {
           marginBottom: 10,
           fontWeight: '500',
           fontSize: 14,
           color: 'pink',
         },
         txtOr: {color: '#ffffff', fontSize: 10,marginLeft:'auto',marginRight:'auto'},
       });
