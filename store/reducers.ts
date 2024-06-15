
import { combineReducers } from 'redux';
import { REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE } from './actions';

interface RegisterState {
  success: boolean;
  error: string | null;
}

const initialState: RegisterState = {
  success: false,
  error: null,
};

const registerReducer = (state = initialState, action: any): RegisterState => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        success: true,
        error: null,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

interface LoginState {
  success: boolean;
  error: string | null;
}

const initialLoginState: LoginState = {
  success: false,
  error: null,
};

const loginReducer = (state = initialLoginState, action: any): LoginState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        success: true,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// New reducer for update user
interface UpdateUserState {
  success: boolean;
  error: string | null;
}

const initialUpdateUserState: UpdateUserState = {
  success: false,
  error: null,
};

const updateUserReducer = (state = initialUpdateUserState, action: any): UpdateUserState => {
  switch (action.type) {
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        success: true,
        error: null,
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  updateUser: updateUserReducer, 
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
