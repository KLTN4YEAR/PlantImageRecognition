import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    imgCard: {
        height: 135,
        width: 155,
        marginLeft: 'auto',
        marginRight: 'auto',
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
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
    },
    btnAdd: {
        backgroundColor: 'tomato',
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
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
        backgroundColor: 'blue',
        height: 40,
        backgroundColor: 'transparent',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
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
        color: '#606770',
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

        margin: 10,

    },

    viewBtn: {
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
    txtName: {
        width: '100%',
    },
    txtDec: {
        width: '100%',
        color: '#1c1e21',
        fontSize: 14,
        maxHeight: 50,
    },
    viewSafeArea: {
        flex: 1,
        marginTop: 5,
    },
    viewScroll: {
        backgroundColor: 'transparent',
        marginHorizontal: 5,

    },
});