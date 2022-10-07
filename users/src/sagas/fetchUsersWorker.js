import { put, call } from "redux-saga/effects";
import { v4 as uuidv4 } from "uuid";

import {
  addUsers,
  hideLoader,
  initializeAlert,
  showLoader,
} from "../redux/actions";

export function* fetchUsersWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchUsers);
    yield put(addUsers(payload));
  } catch (e) {
    yield put(initializeAlert(e.message));
  } finally {
    yield put(hideLoader());
  }
}

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users.map((user) => {
    return {
      id: uuidv4(),
      name: user.name,
      email: user.email,
    };
  });
}
