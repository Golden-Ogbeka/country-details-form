import React from 'react'

const MapSection = ({ result }) => {
  return (
    <div className='section'>
      <img src={result?.flags.png} alt={result?.name?.official} />
      <span>Name: {result?.name?.official}</span>
      <span>Continent: {result?.region}</span>
      <span>People: {new Intl.NumberFormat({ locale: "en-us" }).format(result?.population)}</span>
      <span>Currency: {result.currencies && Object.keys(result?.currencies).length && Object.keys(result?.currencies)[0]}</span>
    </div>
  )
}

export default MapSection