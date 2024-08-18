import { Link, NavLink } from "react-router-dom";
import userImage from "../../../assets/user.svg";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const nav = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="navbar bg-base-100 mb-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {nav}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
      <div className="navbar-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar mr-2"
        >
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={userImage} />
          </div>
        </div>
        {user ? (
          <button onClick={handleLogOut} className="btn btn-md">
            Log out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-md">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
