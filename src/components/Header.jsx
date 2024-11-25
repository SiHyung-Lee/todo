import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>My Todo App</h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/task"}>Task</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
