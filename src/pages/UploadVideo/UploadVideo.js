import "./UploadVideo.scss";
import Thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import Image from "../../assets/Images/Upload-video-preview.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div className="upload">
      <h1 className="upload__header">Upload Video</h1>

      <div className="upload__wrapper">
        <div className="upload__thumb">
          <h2 className="upload__thumb-title">Video Thumbnail</h2>
          <img
            className="upload__thumbnail"
            src={Thumbnail}
            alt="Video Preview"
          />
        </div>
        <div className="form">
          <form onSubmit={(() => modalState(true), handleSubmit)}>
            <div className="form__title">
              <label
                className="form__title form__title--light"
                htmlFor="title-input"
              >
                Title Your Video
              </label>
              <input
                className="form__title form__title--input"
                type="text"
                name="titleField"
                placeholder="Add a title to your video"
              />
            </div>
            <div className="form__description">
              <label
                className="form__description form__description--light"
                htmlFor="description-input"
              >
                Add a Video Description
              </label>
              <textarea
                className="form__description form__description--input"
                name="descriptionField"
                placeholder="Add a description to your video"
              ></textarea>
              <div className="form__buttons">
                <button className="form__btn" type="submit" value="submit">
                  Publish
                </button>
                <Link to={"/"}>
                  <button className="form__cancel" type="button">
                    Cancel
                  </button>
                </Link>
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
