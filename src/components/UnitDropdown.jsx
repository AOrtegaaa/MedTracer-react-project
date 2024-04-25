import PropTypes from 'prop-types';
import '../components-css/Dropdown.css';

function UnitDropdown({ id, label, unitsOfMeasure, selectedUnit, onUnitChange }) {
  return (
    <div className='dropdownContainer'>
      <div className='labelBox'>
        <label htmlFor={id}>{label}</label>
      </div>
      <select className='selectBox'
        id={id}
        value={selectedUnit}
        onChange={(e) => onUnitChange(e.target.value)}
      >
        <option value="">Select a unit</option>
        {unitsOfMeasure.map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>
    </div>
  );
}

UnitDropdown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  unitsOfMeasure: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedUnit: PropTypes.string.isRequired,
  onUnitChange: PropTypes.func.isRequired,
};

export default UnitDropdown;