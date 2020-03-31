import React, { useState } from 'react';

import Thumbnail from '../../assets/thumbnail.jpeg';

import { ItemContainer, Modal, ModalContent, Button } from './styles';

export default function Item(props) {
  function modalAction(action) {
    let modal = document.getElementById(props.id);
    modal.style.display = action
  }

  // Close modal when click anywhere outside the box
  window.onclick = (e) => {
    let modal = document.getElementById("modal");
    if (e.target === modal) {
      modal.style.display = "none";
    }
  }

  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [price, setPrice] = useState(props.price);

  return (
    <>
    <ItemContainer onClick={() => modalAction("block")}>
      <div className="text-container">
        <div className="text">
          <h3>{props.title}</h3>
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

    <Modal id={props.id}>
      <div className="modal-content">
        <div className="modal-header">
          <h3>Edit item</h3>
          <span className="close" onClick={() => modalAction("none")}>&times;</span>
        </div>
        
        <ModalContent>
          <img src={Thumbnail} alt=""/>
          <form>
            <label htmlFor="title">Title</label>
            <input 
              value={title} 
              type="text" 
              name="title"
              onChange={e => setTitle(e.target.value)}
            />

            <label htmlFor="description">Description</label>
            <input 
              value={description} 
              type="text" 
              name="description"
              onChange={e => setDescription(e.target.value)}
            />

            <label htmlFor="price">Price</label>
            <input 
              value={price} 
              type="text" 
              name="price"
              onChange={e => setPrice(e.target.value)}
            />

            <div className="btn-group">
              <Button 
                type="submit" 
                warning
                onClick={() => window.confirm('Are you sure, want delete this item?')} 
              > Delete item</Button>

              <Button 
                inputColor={"#06C167"}
                type="submit"
              > Update</Button>
            </div>
            
          </form>
        </ModalContent>
      </div>
    </Modal>
    </>
  )
}