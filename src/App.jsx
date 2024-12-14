import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      {/* <Header /> */}
      <div className="app-box">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
