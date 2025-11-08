import "../css/reglog.css";

function LogForm() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <div className="my-logo"></div>
          <h2>REGISTER ACCOUNT</h2>
        </div>
        <div className="card-body">
          <div className="form-group">
            <input
              id="username"
              className="form-control"
              name="username"
              type="text"
              placeholder=" "
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="form-group">
            <input
              id="email"
              className="form-control"
              name="email"
              type="email"
              placeholder=" "
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-group">
            <input
              id="password"
              className="form-control"
              name="password"
              type="password"
              placeholder=" "
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="form-group">
            <input
              id="confirm-password"
              className="form-control"
              name="confirm-password"
              type="password"
              placeholder=" "
            />
            <label htmlFor="confirm-password">Confirm password</label>
          </div>
        </div>
        <button className="submit" name="submit" type="submit">
          Confirm Register
        </button>
        <div>
          <a target="_self" class="login mt-3" href="./login.html">
            Already have an account?
          </a>
        </div>
      </div>
    </div>
  );
}

export default LogForm;
