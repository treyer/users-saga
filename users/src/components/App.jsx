import DeleteAllButton from "./DeleteAllButton";
import FetchButton from "./FetchButton";
import { useSelector } from "react-redux";

import UserForm from "./UserForm";
import UsersList from "./UsersList";
import Alert from "./Alert";

function App() {
  const isUsers = useSelector((state) => state.users.users.length > 0);
  const alert = useSelector((state) => state.app.alert);

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <UserForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "600px" }}>
            <div className="card-body">
              <FetchButton />
              {isUsers && <DeleteAllButton />}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <UsersList />
        </div>
      </div>
      {alert && <Alert text={alert} />}
    </div>
  );
}

export default App;
