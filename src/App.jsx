import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MedsPage from './pages/MedsPage';
import MedsLogPage from './pages/MedsLogPage';
import Footer from './components/Footer';
import NotFound from './components/NotFound'
import MedicationForm from './components/MedicationForm';

function App() {
  // Initialize medications from local storage or set to an empty array if not found
  const [medications, setMedications] = useState(() => {
    const savedMedications = localStorage.getItem('medications');
    return savedMedications ? JSON.parse(savedMedications) : [];
  });

  // Effect to load medications from local storage on mount
  useEffect(() => {
    const savedMedications = localStorage.getItem('medications');
    if (savedMedications) {
      setMedications(JSON.parse(savedMedications));
    }
  }, []);

  // Save medications to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('medications', JSON.stringify(medications));
  }, [medications]);

  const saveMedication = (newMedication) => {
    setMedications(prevMedications => [...prevMedications, newMedication]);
  };

  const removeMedication = (idToRemove) => {
    setMedications(prevMedications => prevMedications.filter(med => med.id !== idToRemove));
  };

  const medicationNames = [
    'Humalog(Insulin Lispro)', 'Clobazam', 'Quetiapine', 'Ibuprofen', 'Lisinopril', 'Amphetamine', 'Amlodipine', 'Prednisone', 'Gabapentin', 'Cyclobenzaprine', 'Amoxicillin', 'Levothyroxine', 'Albuterol HFA', 'Benzonatate', 'Alprazolam'
  ];

  const [selectedMedicationName, setSelectedMedicationName] = useState('');

  const dosageForms = [
    'Tablet', 'Capsule', 'Liquid', 'Injection', 'Inhaler',
    'Drops', 'Topical', 'Suppository', 'Powder', 'Patch'
  ];

  const [selectedDosageForm, setSelectedDosageForm] = useState('');

  const dosages = [];
  for (let i = 1; i <= 1000; i++) {
    dosages.push(i.toString());
  }

  const [selectedDosage, setSelectedDosage] = useState('');

  const unitsOfMeasure = ['mg', 'g', 'ml', 'IU', 'mcg', 'CFU', 'mEq', '%', 'mg/ml', 'l/min'];

  const [selectedUnit, setSelectedUnit] = useState('');

  const frequencies = [
    'Once Daily', 'Twice Daily (BID)', 'Thrice Daily (TID)', 'Four Times Daily (QID)', 'Every Other Day'
  ];

  const [selectedFrequency, setSelectedFrequency] = useState('');

  const hours = [];
  for (let i = 1; i <= 12; i++) {
    hours.push(i.toString());
  }

  const minutes = [];
  for (let i = 0; i < 60; i++) {
    minutes.push(i.toString().padStart(2, '0'));
  }

  const meridians = ['AM', 'PM'];

  const [timeEntries, setTimeEntries] = useState([
    { hour: '12', minute: '00', meridian: 'AM' }
  ]);

  const addTimeEntry = () => {
    setTimeEntries([...timeEntries, { hour: '12', minute: '00', meridian: 'AM' }]);
  };

  const removeTimeEntry = (index) => {
    setTimeEntries(prevTimes => prevTimes.filter((_, idx) => idx !== index));
  };

  const handleTimeChange = (index, field, value) => {
    const updatedTimeEntries = timeEntries.map((entry, idx) =>
      idx === index ? { ...entry, [field]: value } : entry
    );
    setTimeEntries(updatedTimeEntries);
  };

  const resetForm = () => {
    setSelectedMedicationName('');
    setSelectedDosage('');
    setSelectedUnit('');
    setSelectedDosageForm('');
    setSelectedFrequency('');
    setTimeEntries([{ hour: '12', minute: '00', meridian: 'AM' }]);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<><HomePage/><Footer/></>} />
        <Route path="/meds" element={<>
          <MedsPage medications={medications} removeMedication={removeMedication}/>
          <Footer/>
        </>} />
        <Route path="/meds-log" element={<><MedsLogPage/><Footer/></>} />
        <Route path="/add-medication" element={
          <><MedicationForm
              saveMedication={saveMedication}
              resetForm={resetForm}

              medicationNames={medicationNames}
              selectedMedicationName={selectedMedicationName}
              onMedicationNameChange={setSelectedMedicationName}

              dosageForms={dosageForms}
              selectedDosageForm={selectedDosageForm}
              onDosageFormChange={setSelectedDosageForm}

              dosages={dosages}
              selectedDosage={selectedDosage}
              onDosageChange={setSelectedDosage}

              unitsOfMeasure={unitsOfMeasure}
              selectedUnit={selectedUnit}
              onUnitChange={setSelectedUnit}

              frequencies={frequencies}
              selectedFrequency={selectedFrequency}
              onFrequencyChange={setSelectedFrequency}

              timeEntries={timeEntries}
              onTimeChange={handleTimeChange}
              addTimeEntry={addTimeEntry}
              removeTimeEntry={removeTimeEntry}
              hours={hours}
              minutes={minutes}
              meridians={meridians}
            />
          <Footer/></>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
