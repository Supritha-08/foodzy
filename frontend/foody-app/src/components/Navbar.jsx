import React from 'react';
import Modal from './Modal'; // ✅ Make sure file name matches
import Inputform from './Inputform';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const checkLogin = () => {
    setIsOpen(true);
  };

  return (
    <>
      <header>
        <h2>Food Blog</h2>
        <ul>
          <li>Home</li>
          <li>My Recipe</li>
          <li>Favourites</li>
          <li onClick={checkLogin}>Login</li>
        </ul>
      </header>
      {isOpen && (
        <Modal onclose={() => setIsOpen(false)}>
          <Inputform />
        </Modal>
      )}
    </>
  )
}
