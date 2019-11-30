export function showDomainsRequest() {
  return {
    type: '@domains/SHOW_DOMAINS_REQUEST',
    payload: {},
  };
}

export function showDomainsSuccess(data) {
  return {
    type: '@domains/SHOW_DOMAINS_SUCCESS',
    payload: data,
  };
}

export function showDomainsFailure() {
  return {
    type: '@domains/SHOW_DOMAINS_FAILURE',
    payload: {},
  };
}
