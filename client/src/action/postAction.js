import axios from 'axios';
import {API_URL} from '../config/helper';
import {GET_INFO_POST, ERROR_RESPONSE, GET_LIST_POST} from '../config/type';
import Toast from 'react-native-simple-toast';
export var successMess = '';

export const newPost = (credentials, post) => () => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + credentials.token,
    },
  };
  const body = post;
  axios
    .post(`${API_URL}/api/post/create`, body, config)
    .then(res => {
      if (res.status == 200) {
        Toast.show('Chúc mừng bạn đã đăng thành công!');
      } else {
        Toast.show('Bài viết không hợp lệ, vui lòng thử lại!');
      }
    })
    .catch(error => {
      console.log('error', error);
      // return error;
    });
};
export const getPostInfo = (credentials, pid) => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + credentials.token,
    },
  };
  return function(dispatch) {
    axios
      .get(`${API_URL}/api/post/getInfoPost/${pid}`, config)
      .then(response => {
        dispatch({
          type: GET_INFO_POST,
          payload: response.data.result.post,
        });
      })
      .catch(err => {
        console.log('err', err);
        dispatch({
          type: ERROR_RESPONSE,
        });
      });
  };
};

//Get post by scroll down to load

export const getListPost = (credentials, offset) => async () => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + credentials.token,
    },
  };

  return axios
    .get(`${API_URL}/api/post/getList/${offset}`, config)
    .then(response => {
      if (response.data.result.length > 0) {
        return response.data.result.listPost;
      }
      return response.data.result.listPost;
    })
    .catch(err => {
      console.log('err', err);
      return err;
    });
};
