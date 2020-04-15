import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { loginFailed, loginSuccess } from './actions';
import { makeCredentialsSelector } from './selectors';
import { LOGIN } from './constants';

// Individual exports for testing
function* login() {
  const credentials = yield select(makeCredentialsSelector());
  console.log(credentials);
  const body = {
    clientId: credentials.email,
    clientSecret: credentials.password,
  };
  console.log(JSON.stringify(body));
  const json = yield fetch('https://brewery-auth.herokuapp.com/api/login', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(response => response.json());
  if (json.status === 200) {
    const accessToken = json.details.result.token;
    const refreshToken = json.details.result.token;
    yield put(loginSuccess(accessToken, refreshToken));
    yield put(push('/dashboard'));
  } else {
    yield put(loginFailed());
  }
}
export default function* loginSaga() {
  yield takeLatest(LOGIN, login);
}
