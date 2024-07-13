import "./navbar.css";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Getuser, Logout } from "../../redux/actions/Useraction";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [dropstate, setdrop] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Getuser());
  }, []);
  const user = useSelector((state) => state.users.user);
  console.log(user);
  return (
    <nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img id="logo" className="img-fluid" src={logo} alt="" />
          </a>
          <div className="collapse navbar-collapse position-absolute top-50 start-50 translate-middle">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  style={{
                    fontSize: "20px",
                    color: "#f35027",
                    fontWeight: "bold",
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/LoanProducts"
                  style={{
                    fontSize: "20px",
                    color: "#f35027",
                    fontWeight: "bold",
                  }}
                >
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/About"
                  style={{
                    fontSize: "20px",
                    color: "#f35027",
                    fontWeight: "bold",
                  }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#footer"
                  style={{
                    fontSize: "20px",
                    color: "#f35027",
                    fontWeight: "bold",
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div id="buttons" className="d-none d-lg-block">
            {user.name ? (
              <div>
                <button
                  onClick={() => setdrop(!dropstate)}
                  style={{
                    padding: "10px",
                    borderRadius: "50px",
                    border: "none",
                    background: "transparent",
                  }}
                >
                  {user.photo ? (
                    <img
                      src={user.photo}
                      style={{
                        width: "40px",
                        borderRadius: "50px",
                        height: "40px",
                      }}
                    />
                  ) : (
                    <i
                      className="fa-solid fa-user"
                      style={{ color: "#f35027", fontSize: "25px" }}
                    ></i>
                  )}
                </button>
                {dropstate ? (
                  <ul
                    style={{
                      border: "1px solid #f35027 ",
                      borderRadius: "15px",
                      backgroundColor: "white",
                      listStyle: "none",
                      position: "absolute",
                      padding: "10px",
                      width: "150px",
                      left: "87.5%",
                      right: "0",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <a href="/Mainprofil">
                      <li style={{ fontSize: "25px", color: "black" }}>
                        My profil
                      </li>
                    </a>
                    <a onClick={() => dispatch(Logout(navigate))}>
                      {" "}
                      <li
                        style={{
                          fontSize: "25px",
                          color: "black",
                          cursor: "pointer",
                        }}
                      >
                        Log out{" "}
                      </li>
                    </a>
                  </ul>
                ) : null}
              </div>
            ) : (
              <button id="signbtn">
                <a id="btntxt" href="/SignUpIn">
                  Login
                </a>
              </button>
            )}
          </div>
          <div className="d-lg-none">
            <button className="btn navbar-burger p-0">
              <svg
                className="text-primary"
                width={51}
                height={51}
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={56} height={56} rx={28} fill="currentColor" />
                <path
                  d="M37 32H19M37 24H19"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div
        className="d-none navbar-menu position-fixed top-0 start-0 bottom-0 w-75 mw-xs"
        style={{ zIndex: 9999 }}
      >
        <div
          className="navbar-close navbar-backdrop position-fixed top-0 start-0 end-0 bottom-0 bg-dark"
          style={{ opacity: "75%" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
