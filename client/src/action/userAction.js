import axios from 'axios';
import {API_URL} from '../config/helper';
import {GET_INFO_USER, UPDATE_USER, ERROR_RESPONSE} from '../config/type';
import Toast from 'react-native-simple-toast';

export var successMess = '';
//get info user
export const getInfo = (credentials, uid) => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + credentials.token,
    },
  };
  return function(dispatch) {
    axios
      .get(`${API_URL}/api/user/getInfo/${uid}`, config)
      .then(response => {
        dispatch({
          type: GET_INFO_USER,
          payload: response.data.result.user,
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR_RESPONSE,
        });
      });
  };
};

export const UpdateUserInfo = (credentials, uid, profile) => dispatch => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + credentials.token,
    },
  };

  const body = profile;
  axios
    .put(`${API_URL}/api/user/updateInfo/${uid}`, body, config)
    .then(res => {
      Toast.show('Cập nhật thành công!');
      dispatch({
        type: UPDATE_USER,
        payload: res.data.result.user,
      });
    })
    .catch(err => {
      console.log('err', err);
      Toast.show('Cập nhật thất bại. Vui lòng thử lại sau!');
    });
};
