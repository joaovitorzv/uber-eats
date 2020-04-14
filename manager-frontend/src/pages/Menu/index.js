import React, { useState, useEffect } from 'react';

import { MenuContainer, AlignBtn, NewItems } from './styles';
import { SubmitBtn } from '../../global-styles';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Item from '../../components/Item';

//import imgPreview from '../../assets/cocacola.jpg';

import api from '../../services/api';

export default function Dashboard() {
  const token = localStorage.getItem('authorization');
  const [field, setField] = useState({});
  
  const fetchData = async () => {  
    const response = await api.get('/restaurant', {
      headers: {
        authorization: token
      }
    });
    setField(response);
    console.log(response);
  }


  useEffect(() => {
    fetchData();
  }, [token]);

  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');
  const [deliveryPrice, setDeliveryPrice] = useState('');

  function handleSubmit() {

  }

  return (
    <>
    <Header />
    <Navigation />
    <MenuContainer>

      <div className="settings-container">
        <h2>Update your restaurant Informations</h2>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <h3>Basic informations</h3>

              <label htmlFor="city">Restaurant name</label>
              <input 
                name="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="doido"
              />

              <label htmlFor="address">Street</label>
              <input 
                type="text"
                name="address"
                value={street}
                onChange={e => setStreet(e.target.value)}
                placeholder="ex: 4th Avenue"
              />

              <label htmlFor="city">City</label>
              <input
                name="city" 
                type="text"
                value={city}  
                onChange={e => setCity(e.target.value)}
                placeholder="ex: New York"
              />
            </div>

            <AlignBtn>
              <SubmitBtn size={'100%'}>Update</SubmitBtn>
            </AlignBtn>
          </form>

          <form>
            <div className="input-group">
              <h3>Appearance</h3>
              <label htmlFor="description">Description</label>
              <input 
                name="description"
                type="text"
                value={description} 
                onChange={e => setDescription(e.target.value)}
                placeholder="ex: The best restaurant of the city" 
              />

              <label htmlFor="price">Delivery price</label>
              <input 
                name="price"
                type="number"
                value={deliveryPrice}
                onChange={e => setDeliveryPrice(e.target.value)}  
                placeholder="ex: 4"
              />

              <div className="file-input-group">
                <label className="file-input" id="display-name">
                  Upload your logo
                  <input id="file-upload" type="file"/>
                </label>

                <label className="file-input" id="display-name">
                  Upload your banner
                  <input id="file-upload" type="file"/>
                </label>
              </div>
            </div>

            <AlignBtn>
              <SubmitBtn size={'100%'}>Add</SubmitBtn>
            </AlignBtn>
        </form>
      </div>
    </div>


      <NewItems>
          <h3>Add new item</h3>

          <label htmlFor="item-name">Item name</label>
          <input 
            name="item-name"
            type="text"
            placeholder="ex: Peperoni Pizza 30CM"
          />

          <label htmlFor="item-description">Item description</label>
          <input
            name="item-description"
            type="text"
            placeholder="ex: 6 Slices of pizza, with Peperoni, cheese, tomato and the best flavor"
          />

          <label htmlFor="item-price">Item price</label>
          <input 
            name="item-price"
            type="text"
            placeholder="ex: 7.98"
          />
                
          <label className="file-input" id="display-name">
            Upload a beatiful picture
          <input id="file-upload" type="file"/>
          </label>

        <AlignBtn>
          <SubmitBtn size={'100%'}>Add</SubmitBtn>
        </AlignBtn>
      </NewItems>
      <div className="menu-items">
        <Item  id="1" title="Combo Mega stacker - 2.0" description="Free refil, Batata Media, Mega Stacker Duplo" price="27"/>
        <Item  id="2" title="Big Tasty" description="Pinto haha xisde" price="12"/>
        <Item  id="3" title="Canastra burges" description="Muito querijo com presunt" price="12"/>
        <Item  id="4" title="Puta do bairro" description="Varias puta mec mec" price="12"/>
        <Item  id="5" title="Senhor alberto X" description="X tudao do senhor alberoto" price="12"/>
        <Item  id="6" title="Carlão de 4" description="Completao do carlao com queijo parmesa" price="12"/>
      </div>
    </MenuContainer>
    </>
  )
}