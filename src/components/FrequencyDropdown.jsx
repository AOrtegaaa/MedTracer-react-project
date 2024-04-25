import PropTypes from 'prop-types';
import '../components-css/Dropdown.css';

function FrequencyDropdown({ id, label, frequencies, selectedFrequency, onFrequencyChange }) {
  return (
    <div className='dropdownContainer'>
      <div className='labelBox'>
        <label htmlFor={id}>{label}</label>
      </div>
      <select className='selectBox'
        id={id}
        value={selectedFrequency}
        onChange={(e) => onFrequencyChange(e.target.value)}
      >
       <option value="">Select a frequency</option>
          {frequencies && frequencies.map((frequency, index) => (
            <option key={index} value={frequency}>
              {frequency}
            </option>
        ))}
      </select>
    </div>
  );
}

FrequencyDropdown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  frequencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedFrequency: PropTypes.string.isRequired,
  onFrequencyChange: PropTypes.func.isRequired,
};

export default FrequencyDropdown;