import PropTypes from 'prop-types';
import '../components-css/RemoveMedicationModal.css';

function RemoveMedicationModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="modalBackdrop">
      <div className="modalContent">
        <p>Are you sure you want to remove this medication?</p>
        <div className="modalButtons">
          <button className="removeModalButton" onClick={onConfirm}>
            Yes, Remove
          </button>
          <button className="cancelButton" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

RemoveMedicationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default RemoveMedicationModal;
