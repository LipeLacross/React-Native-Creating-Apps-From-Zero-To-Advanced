import { combineReducers } from 'redux';
import AuthReducer from './reducers/AuthReducer';

const Reducers = combineReducers({
  auth: AuthReducer,
});

export type RootState = ReturnType<typeof Reducers>;

export default Reducers;

