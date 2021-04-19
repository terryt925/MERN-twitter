import { combineReducers } from 'redux';
import session from './session_reducer';
import session_errors from './session_errors_reducer';

const RootReducer = combineReducers({
  session,
  session_errors
});

export default RootReducer;