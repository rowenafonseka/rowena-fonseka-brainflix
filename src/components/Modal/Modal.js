import "./Modal.scss";

function Modal(props) {
  const modalState = props.toggle;
  const action = props.action;

  return (
    <>
      {modalState && (
        <div className="modal">
          <div onClick={modalState} className="overlay">
            <div className="modal__content">
              <h2>Your video has been published!</h2>
              <button className="modal__close" onClick={action}>
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
