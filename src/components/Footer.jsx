import '../components-css/Footer.css';
import homeButton from '../assets/homeLogo.png';
import medicationLogButton from '../assets/medicationLogLogo.png';
import medicationButton from '../assets/pillLogo.png';
import PropTypes from 'prop-types';

function Footer({ onHomeClick, onMedsClick, onMedsLogClick }) {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <button className="nav-button" onClick={onHomeClick}>
          <img src={homeButton} alt="Home" />
          <div className="footerButtonName">Home</div>
        </button>
        <button className="nav-button" onClick={onMedsClick}>
          <img src={medicationButton} alt="Medication" />
          <div className="footerButtonName">Meds</div>
        </button>
        <button className="nav-button" onClick={onMedsLogClick}>
          <img src={medicationLogButton} alt="Medication Log" />
          <div className="footerButtonName">Meds Log</div>
        </button>
      </nav>
    </footer>
  );
}

Footer.propTypes = {
  onHomeClick: PropTypes.func.isRequired,
  onMedsClick: PropTypes.func.isRequired,
  onMedsLogClick: PropTypes.func.isRequired,
};

export default Footer;