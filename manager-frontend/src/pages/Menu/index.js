import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { MenuContainer, AlertFill, ImgPreview } from './styles';
import { SubmitBtn, ErrorText, AlignBtn } from '../../global-styles';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Item from '../../components/Item';
import CreateItem from '../../components/CreateItem'
import UpdateInformations from '../../components/UpdateInformations';

import api from '../../services/api';

const validationAppearance = Yup.object().shape({
  description: Yup.string().required('Description is required'),
  delivery_price: Yup.number().required('Delivery price is required'),
  logo: Yup.mixed().required('Logo is required'),
  banner: Yup.mixed().required('Banner is required')
});

const validationUpdateAppeareance = Yup.object().shape({
  description: Yup.string(),
  delivery_price: Yup.number(),  
});

export default function Dashboard() {
  const [restaurant, setRestaurant] = useState('');
  const [menu, setMenu] = useState('');
  const [logo, setLogo] = useState('');
  const [banner, setBanner] = useState('');
  
  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem('authorization');
      const response = await api.get('/manager/restaurant', {
        headers: {
          authorization: token
        }
      });
      
      if (response.data.restaurant) {
        setRestaurant(response.data.restaurant);
        setMenu(response.data);       
        setLogo(`http://localhost:3333/files/${response.data.logo_path}`);
        setBanner(`http://localhost:3333/files/${response.data.banner_path}`);
      } else {
        setRestaurant(response.data);
      }
    } 
    fetchData();
  }, [])

  async function handleSubmit(values, { setSubmitting }) {
    try {
      const formData = new FormData();
      formData.append('description', values.description);
      formData.append('delivery_price', values.delivery_price);
      formData.append('logo', values.logo);
      formData.append('banner', values.banner);

      if (restaurant.active) {
        await api.put('/manager/update-menu', 
          formData, {
            headers: {
              authorization: localStorage.getItem('authorization'),
              'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            }
          }
        );
        
      } else {
        await api.post('/manager/create-menu', 
          formData, {
            headers: {
              authorization: localStorage.getItem('authorization'),
              'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            }
          }
        );
      }
      
      setSubmitting(false);    
    } catch(err) {
      alert('Something went wrong, try again later')
      setSubmitting(false);
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
        <p><strong>Name: </strong>{restaurant.name}</p>
        <p><strong>Email: </strong>{restaurant.email}</p>
        </div>

        <div className="form-header">
          <h2>Update your restaurant Informations </h2>
          <AlertFill filled={restaurant.active}>{restaurant.active ? "You're all set to start selling" : 'Please fill out all fields to start selling'}</AlertFill>
        </div>
        <div className="form-container">

        <UpdateInformations response={restaurant} />

        <Formik
          validationSchema={restaurant.active ? validationUpdateAppeareance : validationAppearance}
          initialValues={{
            description: menu.description || '',
            delivery_price: menu.delivery_price || '',
          }}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ handleSubmit, handleChange, values, setFieldValue, touched, isSubmitting, errors }) => (
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
              {errors.description && touched.description && <ErrorText>{errors.description}</ErrorText>}

              <label htmlFor="delivery_price">Delivery price</label>
              <input 
                name="delivery_price"
                type="number"
                onChange={handleChange} 
                value={values.delivery_price}
                placeholder="ex: 7.89"
              />
              {errors.delivery_price && touched.delivery_price && <ErrorText>{errors.delivery_price}</ErrorText>}

              <div className="file-input-group">
                <label >
                  Upload your logo

                  <div className="preview-container">
                    <ImgPreview src={logo} />
                  </div>

                  <input name="logo" type="file" onChange={(event) => {
                    setFieldValue("logo", event.currentTarget.files[0]);
                  }} />

                  {errors.logo && touched.logo && <ErrorText>{errors.logo}</ErrorText>}
                </label>

                <label>
                  Upload your banner

                  <div className="preview-container">
                    <ImgPreview src={banner} />
                  </div>

                  <input name="banner"  type="file" onChange={(event) => {
                    setFieldValue("banner", event.currentTarget.files[0]);
                  }} />

                  {errors.banner && touched.banner && <ErrorText>{errors.banner}</ErrorText>}
                </label>
              </div>
            </div>

            <AlignBtn>
              <SubmitBtn size={'100%'} type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving changes" : "Submit"}
              </SubmitBtn>
            </AlignBtn>
        </form>
        )}
      </Formik>
      </div>
    </div>

    <CreateItem />

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