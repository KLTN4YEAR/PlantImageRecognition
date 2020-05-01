import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 40
    },

    iconSocial: {
        width: '80%',
    },

    txtTemp: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'absolute',
        bottom: 15,
        textAlign: 'center',
        fontSize: 14,
        color: '#568c8c',
    },

    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },

    inputText: {
        height: 50,
        color: "white"
    },

    forgot: {
        color: "white",
        fontSize: 11
    },

    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },

    loginText: {
        color: "white"
    },

    btnGoogle: {
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'flex-end',
    },

    txtLogin: {
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 60,
    },

    txtOr: {
        fontSize: 9,
        color: '#000',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignContent: 'center',
    },

    imgLogo: {
        width: 200,
        height: 200,
        marginTop: 100,
        marginBottom: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    viewBtn: {
        marginTop: 36,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    viewBottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,
    },

    txtBottom: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});