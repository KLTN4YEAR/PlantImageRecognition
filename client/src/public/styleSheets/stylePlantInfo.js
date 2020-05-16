import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    scrollView: {
        width: '100%',
        height: '100%',
    },


    //Plant update style
    viewImage: {
        width: '100%',
        margin: 10,
        padding: 3,
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    imgPlant: {
        width: '90%',
        height: 350,
        borderRadius: 20,
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    imgPlantCarousel: {
        width: 250,
        height: 200,
        margin: 5,
        borderRadius: 8,
    },
    viewInfo: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    txtName: {
        fontSize: 18,
        fontFamily: 'Calibri',
        fontWeight: 'bold',
        marginLeft: 20,
        marginRight: 20,
        padding: 5,
    },

    viewKind: {
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 5,
    },

    txtKind: {
        fontSize: 12,
        fontFamily: 'Calibri',
        fontWeight: 'normal',
        letterSpacing: 2,
        textAlign: 'justify',
        marginLeft: 5,
    },
    viewLoc: {
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 5,
    },
    txtLoc: {
        fontSize: 12,
        fontFamily: 'Calibri',
        fontWeight: 'normal',
        letterSpacing: 2,
        textAlign: 'justify',
        marginLeft: 5,
    },
    viewDesc: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    viewListImage: {
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 5,
    },

    //test list
    viewImageList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgPlantCarousel1: {
        width: 150,
        height: 150,
        margin: 5,
        borderRadius: 8,
    },

    txtDesc: {
        fontSize: 16,
        fontFamily: 'Calibri',
        fontWeight: 'normal',
        marginLeft: 20,
        marginRight: 20,
        padding: 5,
        letterSpacing: 1.5,
        textAlign: 'justify',
    },

});