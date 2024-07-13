import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Signup from "./components/Signup/Singup";
import Cprofil from "./components/completeprofil/Cprofil";
import Loanp from "./components/Loanproducts/Loanp";
import Mainprofil from "./components/mainprofile/Mainprofil";
import Productsdetails from "./components/Productsdetails/Productsdetails";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const path = useLocation () 
  return (
    <>
 {path.pathname.includes("/SignUpIn")?null:<Navbar />}
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/Cprofil" element={<Cprofil />}/>
  <Route path="/SignUpIn" element={<Signup />}/>
  <Route path="/LoanProducts" element={<Loanp />}/>
  <Route path="/Mainprofil" element={<Mainprofil />}  />
  <Route path="/Productdetails" element={<Productsdetails />} />
</Routes> 
{path.pathname.includes("/SignUpIn")?null:<Footer />}

<ToastContainer position="top-right" />
    </>
  );
}

export default App;
