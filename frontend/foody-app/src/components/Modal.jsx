import React, { useEffect, useRef } from 'react';

const Modal = ({ onclose }) => {
  const dialogRef = useRef();

  useEffect(() => {
    dialogRef.current?.showModal(); // opens the dialog when mounted
  }, []);

  return (
    <div className="backdrop" onClick={onclose}>
      <dialog ref={dialogRef} className="modal" onClick={e => e.stopPropagation()}>
        <h1>Login soon</h1>
        <button onClick={() => {
          dialogRef.current.close();
          onclose();
        }}>Close</button>
      </dialog>
    </div>
  );
};

export default Modal;
