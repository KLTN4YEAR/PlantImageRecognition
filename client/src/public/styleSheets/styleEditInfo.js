import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#303030',
        height: '100%',
        marginTop: 0,
    },
    viewScroll: {
        backgroundColor: '#303030',
        marginTop: 15,
    },
    viewAvatar: {
        marginBottom: 10,
        width: windowWidth,
        height: 200,

    },

    viewInfo: {
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 2,
        width: '95%',
        backgroundColor: 'rgba(64,64,64, 0.8)',
        borderRadius: 10,
    },

    viewImageBackground: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    imgAvatar: {
        borderRadius: 50,
        borderColor: '#fff',
        borderWidth: 2,
        height: 80,
        width: 80,
    },
    labelName: {
        fontSize: 22,
        fontFamily: 'Calibri',
        letterSpacing: 0.7,
        color: '#fff',
        marginLeft: 20,
        position: "absolute",
        bottom: 20,
        fontWeight: 'bold',
    },

    viewButton: {
        width: windowWidth,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,

    },


    labelTxt: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        color: '#9C9C9C'
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
        backgroundColor: 'transparent',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

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
        padding: 5,
    },

    btnDone: {
        backgroundColor: '#59c393',
        borderRadius: 15,
        width: 150,
        height: 50,
    },
    editCol: {},
    logoutCol: {

    },
    touchEdit: {
        width: '90%',
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
    touchLogout: {
        width: '80%',
        marginLeft: 0,
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
    colBtnLogout: {
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

    labelIconLogout: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginLeft: 'auto',

    },

    labelEdit: {
        color: '#DCF2DE',
        fontSize: 18,
        marginLeft: 10,
        marginHorizontal: 'auto',
        marginBottom: 'auto',
        marginTop: 'auto',
        fontWeight: 'bold',
    },
    validateMess: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 5,
        padding: 5,
        color: 'white',
        fontSize: 12,
    },
    labelIcon: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    pickerGender: {
        height: 50,
        width: 100,
        flex: 1,
        color: '#fff'
    },

    btnSave: {
        backgroundColor: '#59c393',
        borderRadius: 15,
        borderWidth: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 35,
        borderColor: '#59c393',
        zIndex: 2,
    },
    btnCancel: {
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 40,
        borderColor: '#000',
        zIndex: 2
    },
    lblButton: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    }
});