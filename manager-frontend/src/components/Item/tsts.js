import React, { useState, useCallback } from "react";
import { useModal } from "react-modal-hook";
import ReactModal from "react-modal";

const data = [{ key: "1", name: "" }];

const App = () => {
  const [modalData, setModalData] = useState(null);
  const [showModal, hideModal] = useModal(
    () => (
      <ReactModal isOpen>
        <p>Hello, {modalData.name}</p>
        <button onClick={hideModal}>Hide modal</button>
      </ReactModal>
    ),
    [modalData]
  );
  const openModal = useCallback(data => {
    setModalData(data);
    showModal();
  });

  return (
    <ul>
      {data.map(datum => (
        <li key={datum.key}>
           <button onClick={() => openModal(datum)}>Greet {datum.name}</button>
        </li>
      ))}
    </ul>
  );
};

export default App;


