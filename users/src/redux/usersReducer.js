import {
  ADD_USER,
  ADD_USERS,
  DELETE_ALL_USERS,
  DELETE_USER,
  UPDATE_USER,
} from "./types";

const initialState = { users: [] };

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USERS:
      return { ...state, users: payload };
    case ADD_USER:
      return { ...state, users: [...state.users, payload] };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === payload.id ? payload : user
        ),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload),
      };
    case DELETE_ALL_USERS:
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};
