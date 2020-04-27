import { AsyncStorage } from 'react-native';
export const API_URL = 'http://192.168.1.36:4000'; //đổi theo ip config và tắt tường lửa
export const CLIENT_ROOT_URL = 'http://192.168.1.6:3000';
export const auth = {
    async isAuthenticated() {
        if (typeof window == "undefined")
            return false

        if (await AsyncStorage.getItem('jwt')) {
            const value = JSON.parse(await AsyncStorage.getItem('jwt'));
            return value
        } else
            return false
    },

    async getAvatar() {
        if (await AsyncStorage.getItem('avatar')) {
            const value = JSON.parse(await AsyncStorage.getItem('avatar'));
            return value
        } else
            return false
    },
    async getName() {
        if (typeof window == "undefined")
            return false
        if (await AsyncStorage.getItem('name')) {
            const value = JSON.parse(await AsyncStorage.getItem('name'));
            return value
        } else
            return false
    },
    async setAvatar(avatar) {
        await AsyncStorage.setItem('avatar', JSON.stringify(avatar));
    },

    async authenticate(jwt) {
        await AsyncStorage.setItem('jwt', JSON.stringify(jwt));
        console.log(jwt)
        if (jwt.user.name) {
            await AsyncStorage.setItem('name', JSON.stringify(jwt.user.name))
        }
        if (jwt.user.avatar) {
            await AsyncStorage.setItem('avatar', JSON.stringify(jwt.user.avatar))
        }
    },

    formatDate(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
    }
}