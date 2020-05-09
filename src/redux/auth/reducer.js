import { Map } from 'immutable';
import actions from './actions';

const initState = {};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_PASS:
      return {...state,...{'profile':action.profile}};
    case actions.LOGOUT:
      return initState;
    default:
      return state;
  }
}
