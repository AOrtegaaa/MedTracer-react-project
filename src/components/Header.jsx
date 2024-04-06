import PropTypes from 'prop-types';
import userProfileButton from '../assets/userLogo.png';
import notificationButton from '../assets/notificationLogo.png'
import '../components-css/Header.css'

function Header({title}) {
  return (
    <div className="Header">
      <span className="myMedicationTitle">{title}</span>
      <div>
        <button className="notificationButton">
          <img src={notificationButton} alt="Notifications" />
        </button>
        <button className="userProfileButton">
          <img src={userProfileButton} alt="User Profile" />
        </button>
      </div>
    </div>
  );
}
Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;