import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {

  let [btnName,setBtnName]= useState("Login");
  const onlineStatus= useOnlineStatus();
  
    return (
      <div className="flex justify-between bg-orange-600 shadow-xl m-4">
        <div className="logo-container">
          <img
            className="w-[25%]"
            src={LOGO_URL}
            alt="Logo"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex mr-20  text-white">
            <li className="px-4">onlone status :{onlineStatus?"🟢":"🔴"}</li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact us</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Grocerry</Link>
            </li>
           
            <li className="px-4">Cart</li>
            <button className="login-btn px-4" onClick={()=> btnName==='Login'?setBtnName('Logout'):setBtnName('Login')}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };


  export default Header;