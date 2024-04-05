import '../components-css/Footer.css';
import homeButton from '../assets/homeLogo.png';
import medicationLogButton from '../assets/medicationLogLogo.png';
import medicationButton from '../assets/pillLogo.png';


function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <button className="nav-button">
          <img src={homeButton} alt="Home" />
          <div className='footerButtonName'>Home</div>
        </button>
        <button className="nav-button">
          <img src={medicationButton} alt="Medication" />
          <div className='footerButtonName'>Meds</div>
        </button>
        <button className="nav-button">
          <img src={medicationLogButton} alt="Medication Log" />
          <div className='footerButtonName'>Meds Log</div>
        </button>
      </nav>
    </footer>
  );
}

export default Footer;