import logo from "./logo.svg";
import "./App.css";
import SignInContainer from "./components/SigninContainer";
import Home from "./components/Home";
import ErrorContainer from "./components/Error";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import AboutContainer from "./components/About";
import { UserContext } from "./context/UserContext";
import { useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [user, setUser] = useState({});
  return (
    <>
      <ErrorBoundary>
        <ToastContainer />
        <UserContext.Provider value={{ user, setUser }}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-in" element={<SignInContainer />} />
              <Route path="/about/*" element={<AboutContainer />} />
              <Route path="*" element={<ErrorContainer />} />
            </Routes>
          </div>
        </UserContext.Provider>
      </ErrorBoundary>
    </>
  );
}

export default App;
