import PropTypes from 'prop-types';
import '../components-css/Dropdown.css';

function DosageDropdown({ id, label, dosages, selectedDosage, onDosageChange }) {
  return (
    <div className='dropdownContainer'>
      <div className='labelBox'>
        <label htmlFor={id}>{label}</label>
      </div>
      <select className='selectBox'
        id={id}
        value={selectedDosage}
        onChange={(e) => onDosageChange(e.target.value)}
      >
        <option value="">Select a dosage</option>
        {dosages.map((dosage) => (
          <option key={dosage} value={dosage}>
            {dosage}
          </option>
        ))}
      </select>
    </div>
  );
}

DosageDropdown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dosages: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedDosage: PropTypes.string,
  onDosageChange: PropTypes.func.isRequired,
};

export default DosageDropdown;