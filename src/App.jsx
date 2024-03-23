import './App.css';
import Header from './components/Header';
import AddMedicationButton from './components/AddMedicationButton';
import MedicationCard from './components/MedicationCard';
import Footer from './components/Footer';

function App() {

  const medications = [
    { id: 1, name: 'Humalog(Insulin Lispro)', dosage: '20 units', dosageForm: 'Injection', frequency: 'Daily, 2 Times', time: '8:00 a.m. and 4:00 p.m.' },
    { id: 2, name: 'Clobazam', dosage: '10 mg', dosageForm: 'Tablet', frequency: 'Every 2 Days', time: '10:00 a.m.' },
    { id: 3, name: 'Quetiapine', dosage: '75 mg', dosageForm: 'Tablet', frequency: 'Daily, 3 times', time: '8:00 a.m., 2:00 p.m., and 8:00 p.m.'},
    { id: 4, name: 'Ibuprofen', dosage: '400 mg', dosageForm: 'Tablet', frequency: 'Every 4 to 6 hours as needed', time: '11:00 a.m. and 4:00 p.m.'}
  ];

  return (
    <>
      <Header />
      <AddMedicationButton />
      {medications.map((med) => (
        <MedicationCard
          key={med.id}
          medication={med.name}
          dosage={med.dosage}
          dosageForm={med.dosageForm}
          frequency={med.frequency}
          time={med.time}
        />
      ))}
      <Footer />
    </>
  )
}

export default App