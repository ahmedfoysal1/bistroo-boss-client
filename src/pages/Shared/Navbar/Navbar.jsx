import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { BsCartDash } from "react-icons/bs";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const Links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/order/salad"}>Order Food</NavLink>
      </li>
      <li>
        <NavLink>About</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/cart"}>
          <button className="btn">
            <BsCartDash />{" "}
            <div className="badge badge-sm badge-secondary">+{cart.length}</div>
          </button>
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-blackP dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center text-center">
            {Links}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button onClick={handleLogOut} className="btn">
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to={"/login"} className="btn">
                Login
              </Link>
              <Link to={"/signup"} className="btn">
                SignUp
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
