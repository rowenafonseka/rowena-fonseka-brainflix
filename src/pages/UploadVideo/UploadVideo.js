import "./UploadVideo.scss";
import Thumbnail from "../../assets/Images/Upload-video-preview.jpg";

function UploadVideo() {
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
                for="title-input"
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
                for="description-input"
              >
                Add a Video Description
              </label>
              <textarea
                className="Form__description Form__description--input"
                name="descriptionField"
                placeholder="Add a description to your video"
              ></textarea>
              <div className="Form__buttons">
                <input className="Form__btn" type="submit" value="publish" />
                <a className="Form__cancel" href="/">
                  cancel
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadVideo;
