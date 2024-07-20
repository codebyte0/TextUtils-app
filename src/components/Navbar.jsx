import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const toggleMode = () => {
    if (props.mode === "light") {
      props.toggleMode("dark");
      document.body.style.backgroundColor="#0a0c10"
      document.body.style.color="white"

    } else {
      props.toggleMode("light");
      document.body.style.backgroundColor="#f2f2f2"
      document.body.style.color="black"
    }
  };  

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === "dark" ? "dark" : "light"} bg-${props.mode === "dark" ? "dark" : "light"}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {props.head}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <div className="contain mx-3">
            <div className="form-check form-switch">
              <input className="form-check-input cursor-pointer" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={props.mode === "dark"} onChange={toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === "dark" ? "Light Mode" : "Dark Mode"}</label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
