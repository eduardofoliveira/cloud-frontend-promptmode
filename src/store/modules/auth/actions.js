export function signInRequest(data) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { data },
  };
}

export function signInSucess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signInFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
