import { StyleSheet, Dimensions } from 'react-native';
export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        backgroundColor: '#59c393',
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
        backgroundColor: '#F8F8FF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
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
    },
    viewResult: {
        backgroundColor: '#fff',
        padding: 5,
        margin: 5,
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
    lblNameFlow: {
        margin: 5,
        padding: 5,
        color: '#000',
        fontSize: 13,
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
});