import './App.css';
import { useState } from 'react';
import Home from './pages/Home';

function App() {
  const [result, setResult] = useState({});

  return (
    <>
      <Home result={result} setResult={setResult} />
    </>
  );
}

export default App;
