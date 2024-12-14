import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>TaskFlow</h1>
      <ul className="gnb">
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
