const Login = () => {
  return (
    <>
      <h2 className="app-title">Login</h2>
      <div className="login">
        <label htmlFor="userId">ID</label>
        <input
          type="text"
          id="userId"
          placeholder="ID"
        />
        <label htmlFor="userPassword">Password</label>
        <input
          type="password"
          id="userPassword"
          placeholder="Password"
        />
        <button type="submit">Login</button>
        <div className="links">
          <a href="#">Forgot Password?</a>
          <span className="separator"></span>
          <a href="#">Sign Up</a>
        </div>
      </div>
    </>
  );
};

export default Login;
