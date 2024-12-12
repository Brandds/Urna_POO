// actions/userActions.js
export const loginSuccess = (userInfo) => ({
  type: 'LOGIN_SUCCESS',
  payload: userInfo,
});

export const logout = () => ({
  type: 'LOGOUT',
});
