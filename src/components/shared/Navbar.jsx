import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
  };
  return (
    <div className="navbar bg-base-100 sticky top-0 px-3 sm:px-6 md:px-16 z-10 border-b-2 border-primary">
      <div className="navbar-start">
        <div className="dropdown mr-4">
          <div tabIndex={0} role="button" className=" lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/recipes">All Recepies</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-lg sm:text-xl">SK Recipe</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-6 px-1">
          <li>
            <Link to="/recipes">All Recepies</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      {!user?.email ? (
        <div className="navbar-end flex gap-4">
          <Link to={"/login"} className="btn btn-sm btn-primary text-white">
            Login
          </Link>
          <Link to={"/register"} className="btn btn-secondary text-white btn-sm hidden sm:flex">
            Registration
          </Link>
        </div>
      ) : (
        <>
          <div className="navbar-end hidden lg:flex gap-4">
            <div>
              <button className="btn btn-sm btn-error text-white" onClick={handleLogout}>
                Logout
              </button>
            </div>
            <div>
              <Link to={"/dashboard"} className="btn btn-sm btn-primary text-white">
                Dashboard
              </Link>
            </div>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
          </div>
          <div className="navbar-end lg:hidden">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
              <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-slate-100 rounded-box w-52 right-0">
                <div className="text-center mb-3 pb-3 border-b-2 border-primary">
                  <h3 className="text-xl font-semibold">Welcome!</h3>
                  <h4 className="text-2xl font-semibold">{user?.displayName}</h4>
                </div>
                <div>
                  <Link to={"/dashboard"} className="w-full btn btn-primary text-white mb-3">
                    Dashboard
                  </Link>
                </div>
                <div>
                  <button className="w-full btn btn-error text-white" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
