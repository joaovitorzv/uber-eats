import React from 'react';

import { MenuContainer, AlignBtn } from './styles';
import { SubmitBtn } from '../../global-styles';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Item from '../../components/Item';

import imgPreview from '../../assets/cocacola.jpg';

export default function Dashaboard() {

  return (
    <>
    <Header />
    <Navigation />
    <MenuContainer>

      <div className="settings-container">
        <h2>Update your restaurant Informations</h2>

        <div className="form-container">
          <form>
            <div className="input-group">
              <h3>Address</h3>
              <input 
                type="text"
                value="Rua honorio de Lima, 2290"  
                placeholder="Address"
              />
              <input 
                type="text"
                value="Franca/SP"  
              />
              <input 
                type="text"
                value="Dona chica restaurant"  
              />
            </div>

            <div className="input-group">
              <h3>Appearance</h3>
              <input 
                type="text"
                value="Dona chica restaurant"  
              />
              <input 
                type="text"
                value="Come here to experience the best what dona chica's have to give you"  
              />

              <label className="file-input" id="display-name">
                Upload your logo
                <input id="file-upload" type="file"/>
              </label>

              <label className="file-input" id="display-name">
                Upload your banner
                <input id="file-upload" type="file"/>
              </label>
            </div>
            <AlignBtn>
              <SubmitBtn>Submit</SubmitBtn>
            </AlignBtn>
          </form>

          <form>
            <div className="input-group">
              <h3>Add new item</h3>
              <input 
                type="text"
                placeholder="Item name"
              />
              <input 
                type="text"
                placeholder="Description"
              />

              <label className="file-input" id="display-name">
                Upload a beatiful picture
                <input id="file-upload" type="file"/>
              </label>
            </div>
            <AlignBtn>
              <SubmitBtn>Add</SubmitBtn>
            </AlignBtn>
        </form>
      </div>
    </div>

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