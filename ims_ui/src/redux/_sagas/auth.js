import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'helpers/axios'
import {
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILURE,
  SIGNIN_USER_REQUEST,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILURE,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
} from 'redux/_types'

const SIGNIN_URL = `/auth/signin`
const SIGNUP_URL = `/auth/signup`
const USER_URL = `/auth/user`

async function getUserApi() {
  try {
    const { data } = await axios.get(USER_URL)
    return data
  } catch (error) {
    return error
  }
}

async function signinApi(payload) {
  try {
    const { data } = await axios.post(SIGNIN_URL, payload)
    return data
  } catch (error) {
    return error
  }
}

async function signupApi(payload) {
  try {
    const { data } = await axios.post(SIGNUP_URL, payload)
    return data
  } catch (error) {
    return error
  }
}

function* getUserSaga() {
  try {
    const userData = yield call(getUserApi)
    yield put({
      type: AUTH_USER_SUCCESS,
      details: userData,
    })
  } catch (e) {
    yield put({
      type: AUTH_USER_FAILURE,
      message: e.message,
    })
  }
}

function* signinUserSaga(action) {
  const payload = action.payload
  try {
    const userData = yield call(signinApi, payload)
    yield put({
      type: SIGNIN_USER_SUCCESS,
      details: userData,
    })
  } catch (e) {
    yield put({
      type: SIGNIN_USER_FAILURE,
      message: e.message,
    })
  }
}

function* signupUserSaga(action) {
  const payload = action.payload
  try {
    const userData = yield call(signupApi, payload)
    yield put({
      type: SIGNUP_USER_SUCCESS,
      details: userData,
    })
  } catch (e) {
    yield put({
      type: SIGNUP_USER_FAILURE,
      message: e.message,
    })
  }
}

function* userDetailSaga() {
  yield takeEvery(AUTH_USER_REQUEST, getUserSaga)
}

function* signinSaga() {
  yield takeEvery(SIGNIN_USER_REQUEST, signinUserSaga)
}

function* signupSaga() {
  yield takeEvery(SIGNUP_USER_REQUEST, signupUserSaga)
}

export { userDetailSaga, signinSaga, signupSaga }
