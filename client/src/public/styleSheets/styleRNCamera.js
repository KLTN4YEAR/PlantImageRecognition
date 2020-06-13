import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    btnCapture: {
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 5,
    },
    btnGallery: {
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    viewBtn: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'transparent',
        height: 60,
        position:'absolute',
        bottom:20,
    },

});