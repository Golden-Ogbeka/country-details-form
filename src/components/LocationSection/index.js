import React from 'react'

const LocationSection = ({ result }) => {
  return (
    <div className='section'>
      <img src={result?.coatOfArms.png} alt={result?.name?.official} width={200} />
      <span>Capital: {result?.capital}</span>
      <span>Latitude: {result?.latlng[0]},Longitude: {result?.latlng[1]}</span>
    </div>
  )
}

export default LocationSection