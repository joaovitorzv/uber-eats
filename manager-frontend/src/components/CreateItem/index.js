import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { ErrorText, AlignBtn, SubmitBtn } from '../../global-styles';
import { NewItems } from './styles';

import api from '../../services/api';

const validationNewItem = Yup.object().shape({
  item_title: Yup.string().required("Item name is required"),
  item_description: Yup.string().required("Item description is required"),
  item_price: Yup.number().required("Item price is required"),
  item_thumbnail: Yup.mixed().required("Item picture is required")
});



export default function CreateItem() {
  const responseError = '';

  async function handleSubmit(values, { 
    setSubmitting,
    setFieldError
  }) {
    try {
      const formData = new FormData();
      formData.append('title', values.item_title);
      formData.append('description', values.item_description);
      formData.append('price', values.item_price);
      formData.append('thumbnail', values.item_thumbnail);
      console.log(formData);

      const response = await api.post('/create-item', formData, {
        headers: {
          authorization: localStorage.getItem('authorization'),
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        }
      })
      console.log(response);
      setSubmitting(false);
    } catch (err) {
      console.log(err)
      setFieldError('item_thumbnail', 'Fill out your restaurant settings before create items');
      responseError = err.data
      setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={{
        item_title: "",
        item_description: "",
        item_price: "",
        item_thumbnail: "",
      }}
      validationSchema={validationNewItem}
      onSubmit={handleSubmit}
    >
    {({ values, isSubmitting, handleChange, handleSubmit, setFieldValue, touched, errors }) => (
    <NewItems onSubmit={handleSubmit} encType="multipart/form-data">
      <h3>Add new item</h3>

      <label htmlFor="title">Item name</label>
      <input 
        name="item_title"
        type="text"
        placeholder="ex: Peperoni Pizza 30CM"
        value={values.item_title}
        onChange={handleChange}
      />
      {errors.item_title && touched.item_title && <ErrorText>{errors.item_title}</ErrorText>}

      <label htmlFor="item_description">Item description</label>
      <input
        name="item_description"
        type="text"
        placeholder="ex: 6 Slices of pizza, with Peperoni, cheese, tomato and the best flavor"
        value={values.item_description}
        onChange={handleChange}
      />
      {errors.item_description && touched.item_description && <ErrorText>{errors.item_description}</ErrorText>}

      <label htmlFor="item_price">Item price</label>
      <input 
        name="item_price"
        type="text"
        placeholder="ex: 7.98"
        value={values.item_price}
        onChange={handleChange}
      />
      {errors.item_price && touched.item_price && <ErrorText>{errors.item_price}</ErrorText>}

      <label className="file-input" id="display-name">
        Upload a beatiful picture
      <input name="item_thumbnail" id="file-upload" type="file" onChange={(event) => {
        setFieldValue("item_thumbnail", event.currentTarget.files[0]);
      }}/>
      {errors.item_thumbnail && touched.item_thumbnail && <ErrorText>{errors.item_thumbnail}</ErrorText>}
      </label>

      <AlignBtn>
      <SubmitBtn type="submit" size={'100%'} disabled={isSubmitting}>{isSubmitting ? "Saving changes" : "Submit"}</SubmitBtn>
      </AlignBtn>
    </NewItems>
    )}
    </Formik>
  )
}