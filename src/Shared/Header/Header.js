import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from './../../Context/AuthProvider';


const Header = () => {
  // const menueItems = (
  //   <li>
  //     <Link to="/">Home</Link>
  //   </li>
  // );
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch();
  };

  return (
    <div className="navbar bg-primary text-primary-content h-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-primary-content rounded-box w-52"
          >
            {user?.email ? (
              <>
                <li>
                  <button onClick={handleLogOut}>Sing Out</button>
                </li>
                <li>
                  <Link to="/add/service" className="btn-ghost">
                    Add Service
                  </Link>
                </li>
                <li>
                  <Link to="/myreview" className="btn-ghost">
                    My Review
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            <li tabIndex={0}></li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Agro Services
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {user?.email ? (
            <>
              <li>
                <button onClick={handleLogOut} className="btn-ghost">
                  Sing Out
                </button>
              </li>
              <li>
                <Link to="/add/service" className="btn-ghost">
                  Add Service
                </Link>
              </li>
              <li>
                <Link to="/myreview" className="btn-ghost">
                  My Review
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          <li tabIndex={0}></li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
