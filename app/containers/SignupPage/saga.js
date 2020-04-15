import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { makeSelectorUserData } from './selectors';
import { SIGNUP } from './constants';
import { signupSuccess, signupFailed } from './actions';
// Individual exports for testing

function* signup() {
  const body = yield select(makeSelectorUserData());
  console.log(body);
  const json = yield fetch('https://brewery-auth.herokuapp.com/api/signupClient',
    {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  ).then(response => response.json());
  console.log(json);

  if (json.status === 201) {
    const clientId = json.details.result.details.id;
    console.log(clientId);
    yield put(signupSuccess(clientId));
  } else if (json.status === 400) {
    const error = json.details;
    console.log (error);
    yield put(signupFailed([error]));
  }
}
export default function* signupPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SIGNUP, signup);
}
