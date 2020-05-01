import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    scrollView: {
        backgroundColor: 'transparent',
        marginHorizontal: 5,
        height: 'auto',
    },
    viewUser: {
        padding: 10,
        width: 'auto',
        height: 'auto',
        borderBottomColor: '#d1d1d1',
        borderBottomWidth: 1,
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
        color: '#385898',
        fontSize: 16,
        fontWeight: 'bold',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 'auto',
        marginTop: 'auto',
    },
    viewDataInput: {
        borderBottomColor: '#d1d1d1',
        borderBottomWidth: 1,
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
    viewPlantName: {
        marginBottom: 3,
        borderBottomColor: '#d1d1d1',
        borderBottomWidth: 1,
        width: windowWidth,
    },
    inputMention: {
        padding: 10,
    },
    viewContent: {
        marginBottom: 3,
        width: windowWidth,
    },
    inputContent: {
        padding: 10,
    },
    viewImage: {
        padding: 5,
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff'
    },
    btnGallery: {
        borderBottomColor: '#d1d1d1',
        padding: 5,
        borderBottomWidth: 1,
        height: 40,
        borderTopColor: '#d1d1d1',
        borderTopWidth: 1,
        margin: 'auto',
    },
    btnCamera: {
        padding: 5,
        height: 40,
        margin: 'auto',
        borderBottomColor: '#d1d1d1',
        borderBottomWidth: 1,
    },
    btnCancel: {
        padding: 5,
        height: 40,
        margin: 'auto',
    },
    viewDisplayImage: {
        padding: 10,
    },
    viewImgDisplay: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 2,
        width: windowWidth,
    },
    imgDisplay: {
        width: 100,
        height: 80,
        margin: 3
    },
    labelTxt: {
        fontSize: 14,
        fontWeight: '600',
    },
    btnDone: {
        backgroundColor: 'transparent'
    },
});