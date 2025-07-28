import React, { useEffect, useRef } from 'react';

const Modal = ({ children, onclose }) => {
  const dialogRef = useRef();

  useEffect(() => {
    dialogRef.current?.showModal(); // opens the dialog when mounted
  }, []);

  return (
    <>
      <div className="backdrop" onClick={onclose}></div>
      <dialog className="modal" open>
        {
          children
        }
      </dialog>
    </>
  );
};

export default Modal;
