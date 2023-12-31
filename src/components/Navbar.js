import React from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  let location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  // }, [location]);

const handleLogout=()=>{
  localStorage.removeItem('token');
  localStorage.removeItem('Name');
  navigate('/login')
};

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            InoteBook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>               
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/addNote" ? "active" : ""
                  }`}
                  to="/addNote"
                >
                  AddNote 
                </Link>
              </li>               
            </ul>
{!localStorage.getItem("token")?
            <form className="d-flex" role="search">
               <Link
                  className="btn btn-primary mx-1"
                  to="/login"
                  role="button"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-primary mx-1"
                  to="/signup"
                  role="button"
                >
                  Signup
                </Link>

            </form>: <>   <blockquote className="nav-item align-item text-light m-2">LogedIn as {localStorage.getItem('Name')}</blockquote>  <button onClick={handleLogout} className="btn btn-primary">LogOut</button> </>}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
