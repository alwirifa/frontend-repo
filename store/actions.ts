

import axios, { AxiosRequestConfig } from "axios";
import { Dispatch } from "redux";

const BASE_URL = "http://localhost:4000";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const registerFailure = (error: string) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const loginSuccess = (userId: string) => ({
  type: LOGIN_SUCCESS,
  payload: { userId }, 
});

export const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const fetchUserData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/fetch-user-datainit`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const registerUser = (name: string, email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      await axios.post(`${BASE_URL}/register`, { name, email, password });
      dispatch(registerSuccess());
    } catch (error) {
      let errorMessage = "Unknown error";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      dispatch(registerFailure(errorMessage));
    }
  };
};

export const loginUser = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
    
      return response; 
    } catch (error) {
      let errorMessage = "Unknown error";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      dispatch(loginFailure(errorMessage));
      throw error;
    }
  };
};

export const updateUserSuccess = () => ({
  type: UPDATE_USER_SUCCESS,
});

export const updateUserFailure = (error: string) => ({
  type: UPDATE_USER_FAILURE,
  payload: error,
});

export const updateUser = (id: string, userData: any, config: AxiosRequestConfig) => {
  return async (dispatch: Dispatch) => {
    try {
      await axios.put(`${BASE_URL}/update-user-data/${id}`, userData, config); // Pass config to Axios
      dispatch(updateUserSuccess());
    } catch (error) {
      let errorMessage = "Unknown error";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      dispatch(updateUserFailure(errorMessage));
    }
  };
};