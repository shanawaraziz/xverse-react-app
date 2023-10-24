import  { useState } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

const Results = ({ inscriptions }) => {
  const [expandedInscription, setExpandedInscription] = useState(null);

  const handleExpandClick = (inscription) => {
    if (expandedInscription === inscription) {
      setExpandedInscription(null);
    } else {
      setExpandedInscription(inscription);
    }
  };

  return (
    <ul className="results">
      <h3>Results:</h3>
      {inscriptions.map((inscription, index) => (
        <li key={index} className="result">
          <div className="header">
            <h4>Inscription: {inscription[0].id.slice(0, 8)}</h4>
            <button onClick={() => handleExpandClick(inscription)}>
              {expandedInscription === inscription ? 'close' : '>'}
            </button>
          </div>
          {expandedInscription === inscription && (
            <div className="details">
              <p>Inscription ID: {inscription[0].id}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

Results.propTypes = {
  inscriptions: PropTypes.array.isRequired,
};

export default Results;