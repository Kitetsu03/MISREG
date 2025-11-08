import "../css/reglog.css";

function RegForm() {
  return (
    <>
      <div className="@container absolute top-[50%] left-[50%] w-100 xl:w-150 -translate-[50%]  flex justify-center content-center ">
        <div className="rounded-3xl card w-[95dvw] md:w-full p-5">
          <div className="my-logo justify-center"></div>
          <h2 className="text-center">REGISTER ACCOUNT</h2>
          <hr className="p-1 border-amber-50 bg-white" />
          <div className="form-group flex gap-4">
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

            <button className="submit bg-blue-500" name="submit" type="submit">
              Confirm Register
            </button>
            <a className="flex justify-center" class="login">
              Already have an account?
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegForm;
