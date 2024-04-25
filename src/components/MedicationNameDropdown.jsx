import PropTypes from 'prop-types';
import '../components-css/Dropdown.css';

function MedicationNameDropdown({ id, label, medicationNames, selectedMedicationName, onMedicationNameChange }) {
  return (
    <div className='dropdownContainer'>
      <div className='labelBox'>
        <label htmlFor={id}>{label}</label>
      </div>
      <div>
        <select className='selectBox'
          id={id}
          value={selectedMedicationName}
          onChange={(e) => onMedicationNameChange(e.target.value)}
        >
          <option value="">Select a medication</option>
          {medicationNames && medicationNames.map((medicationName, index) => (
            <option key={index} value={medicationName}>
              {medicationName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

MedicationNameDropdown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  medicationNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedMedicationName: PropTypes.string.isRequired,
  onMedicationNameChange: PropTypes.func.isRequired
};

export default MedicationNameDropdown;