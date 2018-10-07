import { Action } from '@ladders/core/models/action';

export const USER_LOGGED_IN = 'session.USER_LOGGED_IN';
export interface UserLoggedIn extends Action<typeof USER_LOGGED_IN> {
  accessToken?: string;
}
export function userLoggedIn(accessToken: string): UserLoggedIn {
  return {
    type: USER_LOGGED_IN,
    accessToken,
  };
}

export type SessionActions = (UserLoggedIn);
