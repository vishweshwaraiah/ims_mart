import { all } from 'redux-saga/effects'
import userSaga from './user'
import authSaga, { signupSaga } from './auth'

export default function* rootSaga() {
  yield all([userSaga(), authSaga(), signupSaga()])
}
