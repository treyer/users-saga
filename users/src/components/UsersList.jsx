import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import Loader from "./Loader";
import { deleteUser, updateUser } from "../redux/actions";

function UsersList() {
  const users = useSelector((state) => state.users.users);
  const isLoading = useSelector((state) => state.app.loading);
  const dispatch = useDispatch();

  const handleUserDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleUserUpdate = (user) => {
    dispatch(updateUser(user));
  };

  if (users.length === 0) {
    return (
      <>
        <h5>There are no Users to show</h5>
        {isLoading && <Loader />}
      </>
    );
  }
  return users.map((user) => (
    <UserCard
      key={user.id}
      user={user}
      deleteCallback={handleUserDelete}
      updateCallback={handleUserUpdate}
    />
  ));
}

export default UsersList;
