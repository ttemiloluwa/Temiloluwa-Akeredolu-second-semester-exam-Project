import { useEffect, useContext } from "react";
import CheckAuth from "../middleware/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";

export default function NavigationContainer() {
  const { setUser, user:ContextUser } = useContext(UserContext);
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Inner About", link: "/about/inner" },
  ];
  const navigate = useNavigate();
  useEffect(() => {
    const user = CheckAuth(ContextUser);
    if (!user.status) {
      toast.error("you have to sign in");
      navigate("/sign-in");
    }
  }, []);
  const logout = () => {
    setUser({});
    toast.success("log out successful");
    navigate("/sign-in");
  };
  return (
    <header>
      <nav className="flex pt-4 justify-center items-center sm:gap-12 gap-4 flex-wrap">
        {links.map((link, i) => {
          return (
            <Link key={i} to={link.link}>
              {link.name}
            </Link>
          );
        })}
        <button onClick={logout} className="button">
          Logout
        </button>
      </nav>
    </header>
  );
}
