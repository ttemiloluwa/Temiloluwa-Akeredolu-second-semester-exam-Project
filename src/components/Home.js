import { useContext } from "react";
import CheckAuth from "../middleware/auth";
import NavigationContainer from "./Navigation";
import { UserContext } from "../context/UserContext";

export default function HomeContainer() {
  const { user } = useContext(UserContext);
  return (
    <>
      <div>
        <NavigationContainer />
      </div>
      <div className="capitalize container">
        <div>Logged in user: {user?.name}</div>
        <div>Time logged in: {JSON.parse(JSON.stringify(user?.time))}</div>
      </div>
    </>
  );
}
