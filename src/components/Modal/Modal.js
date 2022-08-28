import "./Modal.scss";

function Modal(props) {
  const modalState = props.toggle;

  return (
    <>
      {modalState && (
        <div className="modal">
          <div onClick={modalState} className="overlay">
            <div className="modal__content">
              <h2>Your video has been published!</h2>
              <button className="modal__close" onClick={modalState}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
