import  { useState, useEffect } from 'react';
import axios from 'axios';
import Title from './Components/title' // Import the Title component
import AddressInput from './Components/addressInput'; // Import the AddressInput component
import Results from './Components/results'; // Import the Results component
import './App.css';

function App() {
  const [inscriptions, setInscriptions] = useState([]);
  const [address, setAddress] = useState('');

  const fetchData = () => {
    axios.get(`https://api-3.xverse.app/v1/address/${address}/ordinal-utxo`)
      .then(response => {
        const inscriptionsData = response.data.results.map(result => result.inscriptions);
        setInscriptions(inscriptionsData);
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Title /> {/* Render the Title component */}
      <AddressInput  setAddress={setAddress} fetchData={fetchData} /> {/* Render the AddressInput component */}
      <Results inscriptions={inscriptions} /> {/* Render the Results component */}
    </div>
  );
}

export default App;
