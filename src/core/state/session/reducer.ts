import { SessionActions, USER_LOGGED_IN } from '@ladders/core/state/session/actions';
import { Reducer } from 'redux';

export interface SessionState {
  accessToken?: string;
}

const initialState: SessionState = {};

export const sessionReducer: Reducer<SessionState, SessionActions> = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        state,
        accessToken: action.accessToken,
      };
    default:
      return state;
  }
};
