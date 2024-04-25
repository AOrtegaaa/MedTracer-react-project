import PropTypes from 'prop-types';
import { useState } from 'react';
import '../components-css/MedicationCard.css';
import RemoveMedicationModal from './RemoveMedicationModal';

function MedicationCard({ id, name, dosage, unit, dosageForm, frequency, times, removeMedication }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemoveClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmRemove = () => {
    removeMedication(id);
    setIsModalOpen(false);
  };

  // Helper function to format the time slots
  const formatTimes = (times) => {
    return times.map(t => `${t.hour}:${t.minute} ${t.meridian}`).join(', ');
  };

  return (
  <div className="medicationCard">
    <div className='medicationDetails'>
      <div className='medicationName'>{name}</div>
      <div className="medicationDosage">{dosage} {unit}, {dosageForm}</div>
    </div>
    <div className="medicationFrequency">
      {frequency} — {formatTimes(times)}
    </div>
    <button className="removeButton" onClick={handleRemoveClick}>Remove</button>
    <RemoveMedicationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmRemove}
    />
  </div>
  );
}

MedicationCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  dosage: PropTypes.string,
  unit: PropTypes.string,
  dosageForm: PropTypes.string.isRequired,
  frequency: PropTypes.string.isRequired,
  times: PropTypes.arrayOf(
    PropTypes.shape({
      hour: PropTypes.string,
      minute: PropTypes.string,
      meridian: PropTypes.string
    })
  ).isRequired,
  removeMedication: PropTypes.func.isRequired
};

export default MedicationCard;
