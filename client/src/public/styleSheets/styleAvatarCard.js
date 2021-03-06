import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFF',
        borderWidth: 0,
        flex: 1,
        margin: 0,
        padding: 0,
    },

    container: {
        flex: 1,
    },

    emailContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 30,
    },

    headerBackgroundImage: {
        paddingBottom: 20,
        paddingTop: 35,
    },

    headerContainer: {},

    headerColumn: {
        backgroundColor: 'transparent',
        ...Platform.select({
            ios: {
                alignItems: 'center',
                elevation: 1,
                marginTop: -1,
            },
            android: {
                alignItems: 'center',
            },
        }),
    },

    placeIcon: {
        color: 'white',
        fontSize: 26,
    },

    scroll: {
        backgroundColor: '#FFF',
    },

    telContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 30,
    },

    userAddressRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },

    userCityRow: {
        backgroundColor: 'transparent',
    },

    userCityText: {
        color: '#d1d1d1',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
    },

    userImage: {
        borderColor: '#d1d1d1',
        borderRadius: 85,
        borderWidth: 3,
        height: 170,
        marginBottom: 15,
        width: 170,
    },

    userNameText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
    },
})