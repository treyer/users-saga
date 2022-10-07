import { useState } from "react";
import { useDispatch } from "react-redux";

import { useInput } from "../hooks/useInput";
import { initializeAlert } from "../redux/actions";
import { truncate } from "../utils/truncate";

function UserCard({ user, deleteCallback, updateCallback }) {
  const [isOnUpdate, setIsOnUpdate] = useState(false);
  const dispatch = useDispatch();

  const [name, onNameChange, resetName] = useInput(user.name);
  const [email, onEmailChange, resetEmail] = useInput(user.email);

  const cancelUpdate = () => {
    setIsOnUpdate(false);
    resetName();
    resetEmail();
  };

  const handleUpdate = () => {
    if (!name.trim() || !email.trim()) {
      dispatch(initializeAlert(`"Name" and "email" fields required`));
      return;
    }
    const updatedUser = { id: user.id, name, email };
    updateCallback(updatedUser);
    setIsOnUpdate(false);
  };

  return (
    <div className="card" style={{ width: "600px" }}>
      <div
        className="card-body"
        style={{ display: "flex", alignItems: "center" }}
      >
        {!isOnUpdate && (
          <>
            <div style={{ width: "180px" }}>{truncate(user.name, 18)}</div>
            <div style={{ width: "200px" }}>{truncate(user.email, 18)}</div>
            <div style={{ width: "120px" }}>
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={() => setIsOnUpdate(true)}
              >
                Change User
              </button>
            </div>
            <div style={{ width: "100px" }}>
              <button
                type="button"
                className="btn btn-sm btn-danger"
                onClick={() => deleteCallback(user.id)}
              >
                Delete User
              </button>
            </div>
          </>
        )}
        {isOnUpdate && (
          <>
            <div style={{ width: "180px", marginRight: "10px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter user name"
                value={name}
                onChange={onNameChange}
              />
            </div>
            <div style={{ width: "180px", marginRight: "10px" }}>
              <input
                type="email"
                className="form-control mr-2"
                placeholder="Enter user email"
                value={email}
                onChange={onEmailChange}
              />
            </div>
            <div style={{ width: "120px" }}>
              <button
                type="submit"
                className="btn btn-sm btn-success"
                onClick={handleUpdate}
              >
                Update User
              </button>
            </div>
            <div style={{ width: "100px" }}>
              <button
                type="button"
                className="btn btn-sm btn-warning"
                onClick={cancelUpdate}
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default UserCard;
