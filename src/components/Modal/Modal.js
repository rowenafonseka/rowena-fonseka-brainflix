import "./Modal.scss";

function Modal({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      <div className="modal">
        <div onClick={onClose} className="overlay">
          <div
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <div className="modal__content">
              <h2>Your video has been published!</h2>
              <button className="modal__close" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
