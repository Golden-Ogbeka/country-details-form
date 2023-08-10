import React from 'react';
import MapSection from '../components/MapSection';
import LocationSection from '../components/LocationSection';
import Form from '../components/Form';

const Home = ({ result, setResult }) => {
  return (
    <div className='container'>
      {result && Object.keys(result).length ? (
        <div className='result-container'>
          {/* Map Section */}
          <MapSection result={result} />

          {/* Location section */}
          <LocationSection result={result} />
        </div>
      ) : (
        <>No Details found</>
      )}

      <Form setResult={setResult} />
    </div>
  );
};

export default Home;
