import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        backgroundColor: '#303030',
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
        width: "100%",
        padding: 5,
        marginLeft: 5,
    },
    viewBtnChoose: {
        top: 0,
        flex: 1,
        alignSelf: 'stretch',
        right: 0,
        left: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderBottomColor: '#d1d1d1',
        borderBottomWidth: 1,


    },
    btnChoose: {
        padding: 2,
        margin: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        marginTop: 5,
        padding: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        height: 400,
        alignItems: 'center',
    },
    boxes: {
        backgroundColor: 'rgba(64,64,64, 0.8)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
        padding: 15,
    },
    lblSearchResult: {
        padding: 10,
        alignItems: 'center',
    },
    lblResult: {
        marginLeft: 10,
        padding: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: "#F2EBDF",
    },
    viewResult: {
        backgroundColor: 'rgba(115,115,115,0.4)',
        padding: 8,
        margin: 5,
        borderRadius: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imgFlow: {
        height: 70,
        width: 70,
        borderRadius: 7,

    },
    viewTrend: {
        padding: 2,
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    viewSimilar: {
        height: 50,
        width: 50,
        position: 'absolute',
        right: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        top: 15,
    },
    lblNameFlow: {
        margin: 5,
        padding: 5,
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    lblPercent: {
        margin: 5,
        padding: 5,
        color: 'grey',
        fontSize: 12,
    },
    imgSearch: {
        width: 350,
        height: 350,
        borderRadius: 20,
        alignItems: 'center'
    },
    viewEmpty: {
        margin: 20,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 15,
        width: '100%',
        height: 350,
        alignItems: 'center',
    },
    imgCard: {
        height: windowWidth,
        width: windowWidth,
    },
    viewHeader: {
        position: 'absolute',
        top: 0,
        width: '100%',
        backgroundColor: 'rgba(100,100,100,0.2)',
        height: 30,
        zIndex: 2
    },
});