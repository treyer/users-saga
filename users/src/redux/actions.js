import {
  ADD_USERS,
  ADD_USER,
  HIDE_ALERT,
  HIDE_LOADER,
  FETCH_USERS,
  SHOW_LOADER,
  SHOW_ALERT,
  DELETE_ALL_USERS,
  DELETE_USER,
  INITIALIZE_ALERT,
  UPDATE_USER,
} from "./types";

export const fetchUsers = () => ({ type: FETCH_USERS });
export const addUsers = (users) => ({ type: ADD_USERS, payload: users });
export const addUser = (user) => ({ type: ADD_USER, payload: user });
export const updateUser = (user) => ({ type: UPDATE_USER, payload: user });
export const deleteAllUsers = () => ({ type: DELETE_ALL_USERS });
export const deleteUser = (userId) => ({ type: DELETE_USER, payload: userId });

export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });

export const showAlert = (message) => ({ type: SHOW_ALERT, payload: message });
export const hideAlert = () => ({ type: HIDE_ALERT });
export const initializeAlert = (message) => ({
  type: INITIALIZE_ALERT,
  payload: message,
});
