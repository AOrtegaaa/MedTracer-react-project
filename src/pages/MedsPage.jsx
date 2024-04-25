import Header from '../components/Header';
import AddMedicationButton from '../components/AddMedicationButton';
import MedicationCard from '../components/MedicationCard';
import PropTypes from 'prop-types';

function MedsPage({ medications, removeMedication }) {
  return (
    <>
      <Header title='My Medications'/>
      <AddMedicationButton />
      {medications.map(medication => (
        <MedicationCard
        key={medication.id}
        id={medication.id}
        name={medication.name}
        dosage={medication.dosage}
        unit={medication.unit}
        dosageForm={medication.dosageForm}
        frequency={medication.frequency}
        times={medication.times}
        removeMedication={removeMedication} />
      ))}
    </>
  );
}

MedsPage.propTypes = {
  medications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    dosage: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    dosageForm: PropTypes.string.isRequired,
    frequency: PropTypes.string.isRequired,
    times: PropTypes.arrayOf(PropTypes.shape({
      hour: PropTypes.string.isRequired,
      minute: PropTypes.string.isRequired,
      meridian: PropTypes.string.isRequired
    })).isRequired
  })).isRequired,
  removeMedication: PropTypes.func.isRequired
};

export default MedsPage;