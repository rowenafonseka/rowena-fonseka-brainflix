import "./UploadVideo.scss";
import Thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

function UploadVideo() {
  // usestate for modal
  const [modalState, setModalState] = useState(false);

  // function for toggling the modal using state
  function toggleModal(event) {
    event.preventDefault();
    setModalState(!modalState);
  }

  return (
    <div className="Upload">
      <h1 className="Upload__header">Upload Video</h1>

      <div className="Upload__wrapper">
        <div className="Upload__thumb">
          <h2 className="Upload__thumbTitle">Video Thumbnail</h2>
          <img
            className="Upload__thumbnail"
            src={Thumbnail}
            alt="Video Preview"
          />
        </div>
        <div className="Form">
          <form>
            <div className="Form__title">
              <label
                className="Form__title Form__title--grey"
                htmlFor="title-input"
              >
                Title Your Video
              </label>
              <input
                className="Form__title Form__title--input"
                type="text"
                name="titleField"
                placeholder="Add a title to your video"
              />
            </div>
            <div className="Form__description">
              <label
                className="Form__description Form__description--grey"
                htmlFor="description-input"
              >
                Add a Video Description
              </label>
              <textarea
                className="Form__description Form__description--input"
                name="descriptionField"
                placeholder="Add a description to your video"
              ></textarea>
              <div className="Form__buttons">
                <button
                  onClick={toggleModal}
                  className="Form__btn"
                  type="submit"
                  value="submit"
                >
                  Publish
                </button>

                <a className="Form__cancel" href="/">
                  cancel
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Modal toggle={modalState} action={toggleModal} />
    </div>
  );
}

export default UploadVideo;
