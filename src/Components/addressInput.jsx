// AddressInput.js
import '../App.css'
import PropTypes from 'prop-types';

const AddressInput = ({setAddress, fetchData }) => {
    return (
      <div>
        <text className="Label">Owner bitcoin address</text>
        <br />
        <input
          className="Address-Input"
          type="text"
          placeholder="Enter Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <button className="lookup-button" onClick={fetchData}>
          Look up
        </button>
      </div>
    );
  }
  
AddressInput.propTypes = {
    setAddress: PropTypes.func.isRequired,
    fetchData: PropTypes.func.isRequired,
  };
  
  export default AddressInput;
