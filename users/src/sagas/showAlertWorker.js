import { put, call } from "redux-saga/effects";
import { hideAlert, showAlert } from "../redux/actions";
import { delay } from "../utils/delay";

export function* showAlertWorker(action) {
  yield put(showAlert(action.payload));
  yield call(delay, 2000);
  yield put(hideAlert());
}
