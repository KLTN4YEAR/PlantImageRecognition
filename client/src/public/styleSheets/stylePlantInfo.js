import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({

    scrollView: {
        width: '100%',
        height: '100%',
    },

    viewHeader: {
        position: 'absolute',
        backgroundColor: 'rgba(242,242,242,0.4)',
        flex: 1,
        zIndex: 3,
        flexDirection: 'row',
        width: '100%',
        padding: 10,

    },
    btnBack: {
        position: 'relative',
        alignItems: 'flex-start',
        width: "50%",
        padding: 5,
    },
    btnCancel: {
        position: 'relative',
        alignItems: 'flex-end',
        width: "50%",
        padding: 5,
    },
    //Plant update style
    viewImage: {
        width: windowWidth,
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#303030',

    },
    imgPlant: {
        width: windowWidth,
        height: windowWidth,
        marginLeft: 'auto',
        marginRight: 'auto',


    },
    viewInfo: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    viewInfoHead: {
        position: 'absolute',
        bottom: 40,
        flex: 1,
        left: 5
    },
    txtName: {
        fontSize: 24,
        fontFamily: 'Calibri',
        fontWeight: 'bold',
        marginLeft: 20,
        padding: 5,
        color: '#fff',

    },

    viewKind: {
        marginLeft: 20,
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 5,
    },

    txtKind: {
        fontSize: 16,
        fontFamily: 'Calibri',
        fontWeight: 'normal',
        letterSpacing: 2,
        textAlign: 'justify',
        marginLeft: 10,
        color: '#59c393',
        fontWeight: 'bold'
    },
    viewLoc: {
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 5,
    },
    txtLoc: {
        fontSize: 16,
        fontFamily: 'Calibri',
        fontWeight: 'normal',
        letterSpacing: 2,
        textAlign: 'justify',
        marginLeft: 5,
        color: '#fff',
    },
    viewDesc: {
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'transparent',
        marginTop: -20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '100%',
        padding: 5,
    },

    txtDesc: {
        fontSize: 14,
        fontFamily: 'Calibri',
        fontWeight: 'normal',
        padding: 5,
        letterSpacing: 0.8,
        textAlign: 'left',
        color: '#ffff',
    },
    viewBasic: {
        width: windowWidth,
        flexDirection: 'row',
        flex: 0,
        padding: 5,
        marginTop: 15,
        marginLeft: 20,
    },
    viewScience: {
        width: windowWidth,
        marginTop: 0,
        marginLeft: 10,
        marginBottom: 10,
        padding: 5,
    },
    viewLocation: {
        width: windowWidth,
        marginTop: 0,
        marginLeft: 10,
        padding: 5,
        marginBottom: 20,
    },
    txtNamevi: {
        color: '#fff',
        textTransform: 'uppercase',
        marginRight: 5,
        fontSize: 14,
        fontWeight: '700',
    },
    txtNameen: {
        color: '#fff',
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: '800',
        marginRight: 5,
    },
    txtNamesce: {
        fontSize: 14,
        fontWeight: '900',
        color: '#59c393',

    },
    txtLocation: {
        fontSize: 14,
        fontWeight: '900',
        color: '#59c393',
    },
    viewCharacter: {
        width: '92%',
        padding: 5,
        borderTopWidth: 1,
        borderTopColor: 'rgba(1,135,134,0.7)',
        marginBottom: 20,
        backgroundColor: 'transparent'
    },
    linearGradient: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: -20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '100%',
        padding: 5,

    },
    lblName: {
        marginTop: -17,
        backgroundColor: 'rgba(1,135,134,1)',
        flex: 1,
        alignSelf: 'flex-start',
        fontSize: 16,
        color: '#fffeee',
        borderRadius: 15,
        padding: 3,

    },
    viewListImage: {
        width: '100%',
        backgroundColor: 'transparent',
        zIndex: 3
    },
    pagination: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 0,
        flex: 1,
    },
});