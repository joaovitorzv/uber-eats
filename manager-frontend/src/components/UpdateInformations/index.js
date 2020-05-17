
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { ErrorText, SubmitBtn, AlignBtn} from '../../global-styles';

import api from '../../services/api';

const validationUpdateInformations = Yup.object().shape({
  restaurant_city: Yup.string().required('City is required'),
  restaurant_name: Yup.string().required('Name is required'),
  restaurant_address: Yup.string().required('Address is required'),
  culinary: Yup.string().required('Culinary is required')
});

export default function UpdateInformation(props) {
  async function handleSubmit(values, { setSubmitting }) {
    try {
      console.log(values);
      const response = await api.put('/manager/update-restaurant', values, {
        headers: {
          authorization: localStorage.getItem('authorization')
        }
      });
      console.log(response.data);
      setSubmitting(false);

    } catch (err) {
      console.log(err);
      setSubmitting(false);
    }
}

  return (
      <Formik
        validationSchema={validationUpdateInformations}
        initialValues={{ 
          restaurant_city: props.response.restaurant_city || '',
          restaurant_name: props.response.restaurant_name || '',
          restaurant_address: props.response.restaurant_address || '',
          culinary: props.response.culinary || '',
        }}
        enableReinitialize
        onSubmit={handleSubmit}
      > 
        {({ handleSubmit, handleChange, values, touched, isSubmitting, errors  }) => (
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <h3>Basic informations</h3>

            <label htmlFor="restaurant_city">City</label>
            <input 
              name="restaurant_city"
              type="text"
              value={values.restaurant_city}
              onChange={handleChange}
            />
            {errors.restaurant_city && touched.restaurant_city && <ErrorText>{errors.restaurant_city}</ErrorText>}

            <label htmlFor="restaurant_name">Name</label>
            <input 
              name="restaurant_name"
              type="text"
              value={values.restaurant_name}
              onChange={handleChange}
            />
            {errors.restaurant_name && touched.restaurant_name && <ErrorText>{errors.restaurant_name}</ErrorText>}

            <label htmlFor="restaurant_address">Address</label>
            <input 
              name="restaurant_address"
              type="text"
              value={values.restaurant_address}
              onChange={handleChange}
            />
            {errors.restaurant_address && touched.restaurant_address && <ErrorText>{errors.restaurant_address}</ErrorText>}

            <label htmlFor="culinary">Culinary</label>
            <input
              name="culinary"
              type="text"
              value={values.culinary}
              onChange={handleChange}
            />
          </div>
          {errors.culinary && touched.culinary && <ErrorText>{errors.culinary}</ErrorText>}

          <AlignBtn>
              <SubmitBtn size={'100%'} type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving changes" : "Submit"}
              </SubmitBtn>
            </AlignBtn>
        </form>
        )}
      </Formik>
  )
}