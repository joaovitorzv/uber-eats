import React from 'react';

import Thumbnail from '../../assets/thumbnail.jpeg';

import { ItemContainer, Modal } from './styles';

export default function Item(props) {
  function modalAction(action) {
    let modal = document.getElementById("modal");
    modal.style.display = action
  }

  // Close modal when click anywhere outside the box
  window.onclick = (e) => {
    let modal = document.getElementById("modal");
    if (e.target === modal) {
      modal.style.display = "none";
    }
  }

  return (
    <>
    <ItemContainer onClick={() => modalAction("block")}>
      <div className="text-container">
        <div className="text">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>

        <div className="price">
          <span>$15</span>
        </div>
      </div>

      <div className="thumbnail">
        <img src={Thumbnail} alt=""/>
      </div>
    </ItemContainer>

    <Modal id="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Edit item</h3>
          <span className="close" onClick={() => modalAction("none")}>&times;</span>
        </div>
        
        <h2>{props.name}</h2>
      </div>
    </Modal>
    </>
  )
}