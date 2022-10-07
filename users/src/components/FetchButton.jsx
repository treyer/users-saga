import { fetchUsers } from "../redux/actions";
import { useDispatch } from "react-redux";

function FetchButton() {
  const dispatch = useDispatch();

  const handleFetchButtonClick = () => {
    dispatch(fetchUsers());
  };

  return (
    <button
      type="button"
      className="btn btn-primary mt-2 mb-2 ml-3"
      onClick={handleFetchButtonClick}
    >
      Fetch Users
    </button>
  );
}

export default FetchButton;
