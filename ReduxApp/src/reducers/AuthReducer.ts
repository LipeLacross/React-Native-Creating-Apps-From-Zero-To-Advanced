import { AuthAction, EDIT_EMAIL, EDIT_SENHA } from '../actions/AuthActions';

export type AuthState = {
  email: string;
  senha: string;
};

const initialState: AuthState = {
  email: 'admin@admin.com',
  senha: '1231232',
};

const AuthReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case EDIT_EMAIL:
      return { ...state, email: action.payload.email };
    case EDIT_SENHA:
      return { ...state, senha: action.payload.senha };
    default:
      return state;
  }
};

export default AuthReducer;

