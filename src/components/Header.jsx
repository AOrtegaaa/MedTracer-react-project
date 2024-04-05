import userProfileButton from '../assets/userLogo.png';
import '../components-css/Header.css'

function Header() {
  return (
    <div className="Header">
      <span className="myMedicationTitle">My Medicines</span>
      <button className="userProfileButton">
        <img src={userProfileButton} alt="User Profile" />
      </button>
    </div>
  );
}

export default Header;