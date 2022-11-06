import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import NavigationContainer from "./Navigation";
import { Route, Routes } from "react-router-dom";
import InnerAboutPage from "./InnerAbout";
import ErrorContainer from "./Error";

export default function AboutContainer() {
  const { user } = useContext(UserContext);

  const Home = () => {
    return (
      <div className="container">
        The name of the signed in user is {user.name}, and he/she is a very good
        person. Cheers {user.name}:). Keep doing amazing things!
      </div>
    );
  };

  return (
    <>
      <NavigationContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inner" element={<InnerAboutPage />} />
        <Route path="/*" element={<ErrorContainer />} />
      </Routes>
    </>
  );
}
