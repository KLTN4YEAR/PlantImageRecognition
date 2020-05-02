import { StyleSheet, Dimensions } from 'react-native';
export const styles = StyleSheet.create({
    scrollView: {
        width: '100%',
        height: '100%',
    },

    body: {
        width: '100%',
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    ImageSections: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        marginTop: 50,
        marginBottom: 'auto',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 5,
    },

    images: {
        width: 150,
        height: 150,
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 5,
    },

    btnParentSection: {
        alignItems: 'center',
        borderTopColor: '#d1d1d1',
        borderTopWidth: 1,
        marginLeft: 'auto',
        marginRight: 'auto',

    },

    colSection: {
        margin: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        padding: 5,
    },

    btnSection: {
        width: '100%',
        height: 50,
        backgroundColor: '#DCDCDC',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginBottom: 10
    },

    btnSectionCamera: {
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: 'tomato',
        borderRadius: 5,
        width: 120,
        height: 80,
    },

    btnSectionGallery: {
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: 'tomato',
        borderRadius: 5,
        width: 120,
        height: 80,
    },

    btnText: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 14,
        fontWeight: 'bold'
    },

    rowImage: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center',
        alignContent: 'center',
        padding: 5,
    },

    colImage: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center',
        alignContent: 'center',
    },
});