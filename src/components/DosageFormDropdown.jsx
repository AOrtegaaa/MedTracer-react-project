import PropTypes from 'prop-types';
import '../components-css/Dropdown.css';

function DosageFormDropdown({ id, label, dosageForms, selectedDosageForm, onDosageFormChange }) {
  return (
    <div className='dropdownContainer'>
      <div className='labelBox'>
        <label htmlFor={id}>{label}</label>
      </div>
      <div>
        <select className='selectBox'
          id={id}
          value={selectedDosageForm}
          onChange={(e) => onDosageFormChange(e.target.value)}
        >
          <option value="">Select a dosage form</option>
          {dosageForms && dosageForms.map((form, index) => (
            <option key={index} value={form}>
              {form}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

DosageFormDropdown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dosageForms: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedDosageForm: PropTypes.string.isRequired,
  onDosageFormChange: PropTypes.func.isRequired
};

export default DosageFormDropdown;