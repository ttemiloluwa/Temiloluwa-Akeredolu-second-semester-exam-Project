import { Link } from "react-router-dom";

export default function ErrorContainer() {
  return (
    <div className="container">
      <div className="text-5xl">404</div>
      <div className="text-md">You're lost, this page doesn't exist</div>
      <div className="button">
        <Link to={"/"}>Go home</Link>
      </div>
    </div>
  );
}
