import '../components-css/Footer.css';
import { NavLink } from 'react-router-dom';
import homeButton from '../assets/homeLogo.png';
import medicationLogButton from '../assets/medicationLogLogo.png';
import medicationButton from '../assets/pillLogo.png';

function Footer() {
  const getClassName = ({ isActive }) => isActive ? "nav-button active" : "nav-button";

  return (
    <footer className="footer">
      <nav className="footer-nav">
      <NavLink to="/" className={getClassName}>
        <button className="nav-button">
          <img src={homeButton} alt="Home" />
          <div className='footerButtonName'>Home</div>
        </button>
      </NavLink>
      <NavLink to="/meds" className={getClassName}>
        <button className="nav-button">
          <img src={medicationButton} alt="Medication" />
          <div className='footerButtonName'>Meds</div>
        </button>
      </NavLink>
      <NavLink to="/meds-log" className={getClassName}>
        <button className="nav-button">
          <img src={medicationLogButton} alt="Medication Log" />
          <div className='footerButtonName'>Meds Log</div>
        </button>
      </NavLink>
      </nav>
    </footer>
  );
}

export default Footer;
