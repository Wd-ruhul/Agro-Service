import React, { useContext } from 'react';
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from './../../../Context/AuthProvider'


const Login = () => {
  const { logIn, loginWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  
const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log("🚀 ~ file: Login.js ~ line 36 ~ .then ~ user", user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6"></p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Log In" />
            </div>
          </Form>
          <div className="divider">OR</div>
          <button className="btn btn-primary" onClick={handleGoogleSignIn}>
            Log in With Google
          </button>
          <p>
            Did not have an account ? <Link to="/signup">Sign Up</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;