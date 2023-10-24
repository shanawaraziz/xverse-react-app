// searchButton.js
import '../App.css'
import PropTypes from 'prop-types';

const searchButton = ({fetchData }) => {
    return (
      <div>
        <button className="lookup-button" onClick={fetchData}>
          Look up
        </button>
      </div>
    );
  }
  
searchButton.propTypes = {
    fetchData: PropTypes.func.isRequired,
  };
  
  export default searchButton;
