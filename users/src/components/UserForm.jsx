import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { useInput } from "../hooks/useInput";
import { addUser, initializeAlert } from "../redux/actions";

function UserForm() {
  const [name, onNameChange, resetName] = useInput("");
  const [email, onEmailChange, resetEmail] = useInput("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      dispatch(initializeAlert(`"Name" and "email" fields required`));
      return;
    }
    const newUser = { id: uuidv4(), name, email };
    dispatch(addUser(newUser));
    resetName();
    resetEmail();
  };

  return (
    <div className="card mt-4" style={{ width: "600px" }}>
      <div className="card-body">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter user name"
              value={name}
              onChange={onNameChange}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="email">Surname</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter user email"
              value={email}
              onChange={onEmailChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3 ">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
