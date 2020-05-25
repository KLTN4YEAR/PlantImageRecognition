import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    imgCard: {
        height: 150,
        width: 330,
        marginRight: 'auto',
        marginLeft: 'auto',
    },

    viewCard: {
        width: 'auto',
        height: 280,
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 3,
        borderColor: '#d1d1d1',
        backgroundColor: 'white',
    },

    viewPostBy: {
        marginTop: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 10,
    },

    rowPostBy: {
        width: '100%',
    },
    rowCreate: {
        padding: 2,
        margin: 5,
    },
    txtUserNameCreate: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 30,
        width: 230,
    },
    txtUserName: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        color: 'black',
    },
    viewContent: {
        padding: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    viewKind: {
        width: '100%',
    },
    btnPlantKind: {
        width: 80,
        height: 25,
        backgroundColor: '#00afef',
        margin: 10,
        borderRadius: 10,
    },
    txtKind: {
        color: '#ffffaa',
        fontSize: 13,
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    viewImg: {
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
        marginTop: 10,
        padding: 5,

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
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'justify',
        margin: 'auto',
        letterSpacing: 0.6,

    },

    viewSafeArea: {
        backgroundColor: '#d1d1d1',
        flex: 1,
    },

    viewScroll: {
        backgroundColor: 'transparent',
        marginHorizontal: 5,
        marginTop: 50,
    },

    viewCreatePost: {
        position: 'absolute',
        zIndex: 1,
        top: 0,
        height: 50,
        backgroundColor: 'transparent',
    },
    gridCreate: {
        position: 'absolute',
        zIndex: 1,
        top: 0,
        height: 50,
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
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    btnCreatePost: {
        borderRadius: 50,
        backgroundColor: 'blue',
        height: 40,
        width: 40,
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
    imgPlantCarousel: {
        width: '100%',
        height: 300,
    },
    viewContribute: {
        width: 250,
        backgroundColor: '#00afef',
        borderRadius: 10,
        margin: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignContent: 'center',
        padding: 10,
    },
    txtContribute: {
        fontSize: 14,
        letterSpacing: 1,
        color: '#ffffee',
    },

});