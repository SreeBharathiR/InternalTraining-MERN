import React, { useRef } from "react";
import "./App.css";
import Modal from "./component/Modal";
import Timer from "./component/Timer";

function App() {
  const fileRef = useRef();
  const modalRef = useRef();
  function handleShow() {
    modalRef.current.showModal();
  }
  function handleFile() {
    fileRef.current.click();
  }
  function handleClose() {
    modalRef.current.close();
  }
  return (
    <div>
      <input type="file" ref={fileRef} style={{ display: "none" }}></input>
      <button onClick={handleFile}>Upload</button>
      {/* <dialog ref={modalRef}>
        <p>Something words</p>
        <button onClick={handleClose}>X</button>
      </dialog> */}

      {/* <Modal ref={modalRef}>
        <p>Something words</p>
        <button onClick={handleClose}>X</button>
      </Modal> */}
      <Modal ref={modalRef}>
        <p>Do you want to delete?</p>
        <button>Delete</button>
        <button onClick={handleClose}>Close</button>
      </Modal>
      <button onClick={handleShow}>Show</button>
      <Timer></Timer>
    </div>
  );
}

export default App;
