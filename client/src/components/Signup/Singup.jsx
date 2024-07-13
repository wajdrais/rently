import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";
import { Login, register } from "../../redux/actions/Useraction";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const errorsTable = useSelector((state) => state.errors);
  const Tab = useSelector((state) => state.users.msg);
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const registerBtnRef = useRef(null);
  const loginBtnRef = useRef(null);
  const sucesssignup = (e) => {
    e.preventDefault();
    if (name && email && password) {
      dispatch(register({ name, email, password }, navigate));
    } else {
      toast.error("All informations are required");
    }
  };
  const sucesssignin = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(Login({ email, password }, navigate));
    } else {
      toast.error("All informations are required");
    }
  };
  useEffect(() => {
    if (errorsTable) {
      errorsTable.map((e) => toast.error(e.msg));
    }
    if (Tab) {
      toast.success(Tab);
    }
  }, [errorsTable, Tab]);

  useEffect(() => {
    const container = containerRef.current;
    const registerBtn = registerBtnRef.current;
    const loginBtn = loginBtnRef.current;

    registerBtn.addEventListener("click", () => {
      container.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
      container.classList.remove("active");
    });

    // Cleanup event listeners on component unmount
    return () => {
      registerBtn.removeEventListener("click", () => {
        container.classList.add("active");
      });
      loginBtn.removeEventListener("click", () => {
        container.classList.remove("active");
      });
    };
  }, []);

  return (
    <div className="container" id="container" ref={containerRef}>
      <div className="form-container sign-up">
        <form>
          <h1 style={{ color: "#f35027" }}>Create Account</h1>
          <div className="social-icons">
            <img
              src={logo}
              alt="logo"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <span>or use your email for registration</span>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button onClick={sucesssignup}>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1 style={{ color: "#f35027" }}> Sign In</h1>
          <div className="social-icons">
            <img
              src={logo}
              alt="logo"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <span>or use your email password</span>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <a href="#">Forget Your Password?</a>
          <button onClick={sucesssignin}>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Hello Friend</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            <button className="hidden" id="login" ref={loginBtnRef}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>welcome Back !</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" id="register" ref={registerBtnRef}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
