import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from './Modal'; // 
import Inputform from './Inputform';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let token = localStorage.getItem("token");
  let user = JSON.parse(localStorage.getItem("user"));
  const [isLogin, setIsLogin] = useState(token ? false : true);

  useEffect(() => {
    setIsLogin(token ? false : true);
  }, [token]);

  const checkLogin = () => {
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLogin(true);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <header>
        <h2>Food Blog</h2>
        <ul>
          <li onClick={() => isLogin && setIsOpen(true)}><NavLink to="/">Home</NavLink></li>
          <li onClick={() => isLogin && setIsOpen(true)}><NavLink to={!isLogin ? "/myRecipe" : "/"}>My Recipe</NavLink></li>
          <li onClick={checkLogin}><p className="login">{isLogin ? "Login" : "Logout"}{user?.email ? `(${user?.email})` : " "}</p></li>
          <li onClick={checkLogin}><p className="login">{isLogin ? "Login" : "Logout"}{user?.email?`(${user?.email})`:" "}</p></li>
        </ul>
      </header>
      {isOpen && (
        <Modal onclose={() => setIsOpen(false)}>
          <Inputform setIsOpen={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
}
