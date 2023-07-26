import { Dispatch } from 'redux';
import { publicRequest } from '../requestMethod';
import { loginStart, loginSuccess, loginFaliure } from './userRedux';

export const login = async (dispatch: Dispatch, user: object) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFaliure());
  }
};
