import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { MenuContainer, AlignBtn, NewItems, AlertFill } from './styles';
import { SubmitBtn } from '../../global-styles';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Item from '../../components/Item';

import api from '../../services/api';

const validationBasicInformations = Yup.object().shape({
  restaurant_name: Yup.string(),
  restaurant_address: Yup.string(),
})

const validationAppearance = Yup.object().shape({
  description: Yup.string().required('Description is required'),
  delivery_price: Yup.number().required('Delivery price is required'),
  logo: Yup.mixed().required('Logo is required'),
  banner: Yup.mixed().required('Banner is required')
});

export default function Dashboard() {
  const [response, setResponse] = useState('');
  
  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem('authorization');
      const response = await api.get('/restaurant', {
        headers: {
          authorization: token
        }
      });
      
      setResponse(response.data);
    } 
    fetchData();
  }, [])

  async function handleSubmit(values, {
    setSubmitting,
    setFieldError
  }) {
    try {
      const response = await api.post('/create-menu', values);
      console.log(response);
      setSubmitting(false);
    }catch(err) {
      console.log(err);
    }
  }

  return (
    <>
    <Header />
    <Navigation />
    <MenuContainer>
      <div className="settings-container">
        <h4>About manager</h4>
        <div className="about-manager">
        <p><strong>Name: </strong>{response.name}</p>
        <p><strong>Email: </strong>{response.email}</p>
        </div>

        <div className="form-header">
          <h2>Update your restaurant Informations </h2>
          <AlertFill filled={false}>{false ? "You're all set to start selling" : 'Please fill out all fields to start selling'}</AlertFill>
        </div>
        <div className="form-container">
        <Formik
          validationSchema={validationBasicInformations}
          initialValues={{ 
            street: response.restaurant_address || '',
            culinary: response.culinary || '',
          }}
          enableReinitialize
        > 
          {({ values, handleChange }) => (
          <form>
            <div className="input-group">
              <h3>Basic informations</h3>

              <label htmlFor="city">City</label>
              <input 
                name="name"
                type="text"
                onChange={e => {}}
                placeholder="ex: Franca"
              />

              <label htmlFor="address">Street</label>
              <input 
                type="text"
                name="address"
                value={values.street}
                onChange={handleChange}
                placeholder={response.street}
              />

              <label htmlFor="culinary">Culinary</label>
              <input
                name="culinary" 
                type="text" 
                value={values.culinary}
                onChange={handleChange}
                placeholder="ex: Japanese"
              />
            </div>

            <AlignBtn>
              <SubmitBtn size={'100%'}>Update</SubmitBtn>
            </AlignBtn>
          </form>
          )}
        </Formik>

        <Formik
          validationSchema={validationAppearance}
          initialValues={{ 
            description: '',
            delivery_price: '',
            logo: undefined,
            banner: undefined,
          }}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, handleChange, values, setFieldValue }) => (
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="input-group">
              <h3>Appearance</h3>
              <label htmlFor="description">Description</label>
              <input 
                name="description"
                type="text"
                value={values.description}
                onChange={handleChange}
                placeholder="ex: The best restaurant of the city" 
              />  

              <label htmlFor="delivery_price">Delivery price</label>
              <input 
                name="delivery_price"
                type="number"
                onChange={handleChange} 
                value={values.delivery_price}
                placeholder="ex: 4"
              />

              <div className="file-input-group">
                <label >
                  Upload your logo
                  <input name="logo" type="file" onChange={(event) => {
                    setFieldValue("logo", event.currentTarget.files[0]);
                  }} />
                </label>

                <label>
                  Upload your banner
                  <input name="banner"  type="file" onChange={(event) => {
                    setFieldValue("banner", event.currentTarget.files[0]);
                  }} />
                </label>
              </div>
            </div>

            <AlignBtn>
              <SubmitBtn size={'100%'} type="submit">Add</SubmitBtn>
            </AlignBtn>
        </form>
        )}
      </Formik>
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