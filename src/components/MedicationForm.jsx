import PropTypes from 'prop-types';
import Header from "./Header";
import MedicationNameDropdown from './MedicationNameDropdown';
import DosageFormDropdown from './DosageFormDropdown';
import DosageDropdown from './DosageDropdown';
import UnitDropdown from './UnitDropdown';
import FrequencyDropdown from './FrequencyDropdown';
import TimeDropdown from './TimeDropdown';
import '../components-css/MedicationForm.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function MedicationForm({
  medicationNames, selectedMedicationName, onMedicationNameChange,
  dosageForms, selectedDosageForm, onDosageFormChange,
  dosages, selectedDosage, onDosageChange,
  unitsOfMeasure, selectedUnit, onUnitChange,
  frequencies, selectedFrequency, onFrequencyChange,
  timeEntries, onTimeChange, addTimeEntry, removeTimeEntry, hours, minutes, meridians,
  saveMedication, resetForm
}) {
  const navigate = useNavigate();

  const [buttonText, setButtonText] = useState('Save');

  const handleSave = () => {
    const newMedication = {
      id: Date.now(),
      name: selectedMedicationName,
      dosage: selectedDosage,
      unit: selectedUnit,
      dosageForm: selectedDosageForm,
      frequency: selectedFrequency,
      times: timeEntries,
    };
    saveMedication(newMedication);
    setButtonText('Saved!');

    // Wait for 2 seconds, then navigate to the meds page and reset the form
    setTimeout(() => {
      navigate('/meds');
      resetForm();
      buttonText
    }, 2000);
  };

  return (
    <div className='medicationFormContainer'>
      <Header title='Add New Medication' />
      <form>
        <MedicationNameDropdown
          id="medication-dropdown"
          label="Medication Name:"
          medicationNames={medicationNames}
          selectedMedicationName={selectedMedicationName}
          onMedicationNameChange={onMedicationNameChange}
        />
      </form>
      <form>
        <DosageDropdown
          id="dosage-dropdown"
          label="Dosage Amount:"
          dosages={dosages}
          selectedDosage={selectedDosage}
          onDosageChange={onDosageChange}
        />
      </form>
      <form>
        <UnitDropdown
          id="unit-dropdown"
          label="Dosage Unit:"
          unitsOfMeasure={unitsOfMeasure}
          selectedUnit={selectedUnit}
          onUnitChange={onUnitChange}
        />
      </form>
      <form>
        <DosageFormDropdown
          id="dosageForm-dropdown"
          label="Dosage Form:"
          dosageForms={dosageForms}
          selectedDosageForm={selectedDosageForm}
          onDosageFormChange={onDosageFormChange}
        />
      </form>
      <form>
        <FrequencyDropdown
          id="frequency-dropdown"
          label="Frequency:"
          frequencies={frequencies}
          selectedFrequency={selectedFrequency}
          onFrequencyChange={onFrequencyChange}
        />
      </form>
      <form>
        <div className='timeDropdownTitle'>Time:</div>
      {timeEntries.map((time, index) => (
        <div key={index}>
          <TimeDropdown
            time={time}
            onTimeChange={(field, value) => onTimeChange(index, field, value)}
            hours={hours}
            minutes={minutes}
            meridians={meridians}
          />
          <button className='removeTimeButton' onClick={() => removeTimeEntry(index)}>Remove Time</button>
        </div>
      ))}
      </form>
      <button onClick={addTimeEntry} className="addTimeButton">Add Time</button>
      <div className="saveButtonContainer">
        <button className="saveMedicationButton" onClick={handleSave}>
          {buttonText}
        </button>
      </div>
    </div>
  )
}

MedicationForm.propTypes = {
  medicationNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedMedicationName: PropTypes.string.isRequired,
  onMedicationNameChange: PropTypes.func.isRequired,

  dosageForms: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedDosageForm: PropTypes.string.isRequired,
  onDosageFormChange: PropTypes.func.isRequired,

  dosages: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedDosage: PropTypes.string,
  onDosageChange: PropTypes.func.isRequired,

  unitsOfMeasure: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedUnit: PropTypes.string.isRequired,
  onUnitChange: PropTypes.func.isRequired,

  frequencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedFrequency: PropTypes.string.isRequired,
  onFrequencyChange: PropTypes.func.isRequired,

  timeEntries: PropTypes.arrayOf(PropTypes.shape({
    hour: PropTypes.string,
    minute: PropTypes.string,
    meridian: PropTypes.string
  })).isRequired,
  onTimeChange: PropTypes.func.isRequired,
  removeTimeEntry: PropTypes.func.isRequired,
  addTimeEntry: PropTypes.func.isRequired,
  hours: PropTypes.arrayOf(PropTypes.string).isRequired,
  minutes: PropTypes.arrayOf(PropTypes.string).isRequired,
  meridians: PropTypes.arrayOf(PropTypes.string).isRequired,
  saveMedication: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired
};

export default MedicationForm;