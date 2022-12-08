import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { FETCH_USER, FETCH_USER_SUCCESS } from "./action";

const URLAPI = "http://localhost:3001/users";

function* getUser() {
  try {
    const res = yield axios.get(URLAPI);
    yield put({ type: FETCH_USER_SUCCESS, payload: res.data });
  } catch (error) {
    console.log("error - getUser : ", error);
  }
}
export default function* rootSaga() {
  yield takeLatest(FETCH_USER, getUser);
}
