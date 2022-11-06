import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const initialInput = {
  name: "",
  password: "",
};

export default function SignInContainer() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [input, setInput] = useState({ ...initialInput });

  const handleInputChange = (e, name) => {
    setInput({ ...input, [name]: e.target.value });
  };
  const submit = () => {
    if (input.name.length === 0) {
      return toast.error("name is required");
    } else if (input.password.length === 0) {
      return toast.error("password is required");
    }
    const newInput = { ...input, time: new Date() };
    setUser(newInput);
    navigate("/");
    return toast.success("Log in successful");
  };
  return (
    <div>
      <div className="container flex justify-center items-center">
        <div className="flex flex-col items-center w-96 gap-4">
          <div className="flex gap-2 flex-col align-start text-start">
            <label>Username*</label>
            <input
              placeholder="Enter username here"
              onChange={(e) => {
                handleInputChange(e, "name");
              }}
            />
          </div>
          <div className="flex gap-2 flex-col align-start text-start">
            <label>Password*</label>
            <input
              placeholder="Enter password here"
              onChange={(e) => {
                handleInputChange(e, "password");
              }}
              type={"password"}
            />
          </div>
          <button className="button" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
