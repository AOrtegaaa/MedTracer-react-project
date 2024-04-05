import PropTypes from 'prop-types';
import '../components-css/MedicationCard.css';

function MedicationCard({ medication, dosage, dosageForm, frequency, time }) {
  return (
    <div className="medicationCard">
      <div className='medicationDetails'>
        <div className='medicationName'>{medication}</div>
        <div className="medicationDosage">{dosage}, {dosageForm}</div>
      </div>
      <div className="medicationFrequency">
        {frequency} — {time}
      </div>
    </div>
  );
}

MedicationCard.propTypes = {
  medication: PropTypes.string.isRequired,
  dosage: PropTypes.string.isRequired,
  dosageForm: PropTypes.string.isRequired,
  frequency: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default MedicationCard;