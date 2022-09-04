import "./UploadVideo.scss";
import Thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import Image from "../../assets/Images/Upload-video-preview.jpg";
import axios from "axios";

function UploadVideo() {
  // usestate for modal
  const [modalState, setModalState] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setModalState(!modalState);

    axios
      .post(process.env.REACT_APP_API_URL + "/videos", {
        title: event.target.title.value,
        description: event.target.description.value,
        Image: Image,
      })

      .then(() => {
        setIsSuccess(true);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(error.response.data);
      });
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
          <form onSubmit={(() => modalState(true), handleSubmit)}>
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
                <button className="Form__btn" type="submit" value="submit">
                  Publish
                </button>

                <a className="Form__cancel" href="/">
                  cancel
                </a>
              </div>
            </div>
            {isSuccess}
            {errorMessage}
          </form>
        </div>
      </div>
      <Modal open={modalState} onClose={() => setModalState(false)} />
    </div>
  );
}

export default UploadVideo;
