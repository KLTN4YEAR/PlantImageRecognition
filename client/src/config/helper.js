import AsyncStorage from '@react-native-community/async-storage';
export const API_URL = 'http://192.168.1.6:4000';
export const CLIENT_ROOT_URL = 'http://localhost:3000';
export const auth = {
    isAuthenticated() {
        if (typeof window == "undefined")
            return false

        if (AsyncStorage.getItem('jwt'))
            return AsyncStorage.getItem('jwt')
        else
            return false
    },

    getAvatar() {
        if (AsyncStorage.getItem('avatar'))
            AsyncStorage.getItem('avatar')
        else
            return false
    },
    getName() {
        if (typeof window == "undefined")
            return false
        if (AsyncStorage.getItem('name'))
            return AsyncStorage.getItem('name')
        else
            return false
    },
    setAvatar(avatar) {
        AsyncStorage.setItem('avatar', JSON.stringify(avatar));
    },
    authenticate(jwt) {
        AsyncStorage.setItem('jwt', JSON.stringify(jwt));
        if (jwt.user.avatar) {
            AsyncStorage.setItem('avatar', JSON.stringify(jwt.user.avatar));
        }
        if (jwt.user.name) {
            AsyncStorage.setItem('name', JSON.stringify(jwt.user.name));
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