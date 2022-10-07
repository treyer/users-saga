import { useDispatch } from "react-redux";
import { deleteAllUsers } from "../redux/actions";

function DeleteAllButton() {
  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    dispatch(deleteAllUsers());
  };

  return (
    <button
      type="button"
      className="btn btn-danger mt-2 mb-2 ml-2"
      style={{ marginLeft: "20px" }}
      onClick={handleDeleteUser}
    >
      Delete All Users
    </button>
  );
}

export default DeleteAllButton;
