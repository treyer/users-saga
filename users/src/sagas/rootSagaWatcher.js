import { all, takeEvery } from "redux-saga/effects";
import { FETCH_USERS, INITIALIZE_ALERT } from "../redux/types";
import { showAlertWorker } from "./showAlertWorker";
import { fetchUsersWorker } from "./fetchUsersWorker";

export default function* rootSagaWatcher() {
  yield all([
    takeEvery(FETCH_USERS, fetchUsersWorker),
    takeEvery(INITIALIZE_ALERT, showAlertWorker),
  ]);
}
