import { Dispatch } from 'redux';
import { publicRequest, userRequest } from '../requestMethod';
import { loginStart, loginSuccess, loginFaliure } from './userRedux';
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess } from './productRedux';

export const login = async (dispatch: Dispatch, user: object) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFaliure());
  }
};

export const getProducts = async (dispatch: Dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get('/products');
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id: number, dispatch: Dispatch) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};


export const addProduct = async (product: any, dispatch: Dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, {product});
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};