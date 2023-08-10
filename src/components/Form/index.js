import axios from 'axios';
import React, { useState } from 'react';

const Form = ({ setResult }) => {
  const [country, setCountry] = useState('');

  const getCountryDetails = async (e) => {
    e.preventDefault();

    if (!country) {
      return alert('Please enter a country');
    }
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${country}?fullText=true`
      );
      if (response.data.length > 0) {
        setResult(response.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='input-container' onSubmit={getCountryDetails}>
      <input
        className='country-input'
        type='text'
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button type='submit' className='country-button'>
        Get Details
      </button>
    </form>
  );
};

export default Form;
