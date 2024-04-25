import PropTypes from 'prop-types';
import '../components-css/Dropdown.css';

function TimeDropdown({ time, onTimeChange, hours, minutes, meridians }) {
  return (
    <div className='timeDropdownContainer'>
      <select className='timeSelectBox'value={time.hour} onChange={(e) => onTimeChange('hour', e.target.value)}>
        {hours.map((hour, index) => (
          <option key={index} value={hour}>{hour}</option>
        ))}
      </select>
      <select className='timeSelectBox' value={time.minute} onChange={(e) => onTimeChange('minute', e.target.value)}>
        {minutes.map((minute, index) => (
          <option key={index} value={minute}>{minute}</option>
        ))}
      </select>
      <select className='timeSelectBox' value={time.meridian} onChange={(e) => onTimeChange('meridian', e.target.value)}>
        {meridians.map((meridian, index) => (
          <option key={index} value={meridian}>{meridian}</option>
        ))}
      </select>
    </div>
  );
}

TimeDropdown.propTypes = {
  time: PropTypes.shape({
    hour: PropTypes.string,
    minute: PropTypes.string,
    meridian: PropTypes.string
  }).isRequired,
  onTimeChange: PropTypes.func.isRequired,
  hours: PropTypes.arrayOf(PropTypes.string).isRequired,
  minutes: PropTypes.arrayOf(PropTypes.string).isRequired,
  meridians: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TimeDropdown;