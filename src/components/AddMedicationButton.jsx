import '../components-css/AddMedicationButton.css';
import { Link } from 'react-router-dom';

function AddMedicationButton() {
  return (
    <Link to={"/add-medication"}>
    <button className='addMedicationButton'>&#43; Add Medication</button>
    </Link>
  )
}

export default AddMedicationButton