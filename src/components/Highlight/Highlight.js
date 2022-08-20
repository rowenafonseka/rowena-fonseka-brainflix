import "./Highlight.scss";
import Views from "../../assets/Icons/views.svg";
import Likes from "../../assets/Icons/likes.svg";

function Highlight({ title, channel, timestamp, views, likes, description }) {
  return (
    <div className="highlight">
      <h1 className="highlight__title">{title}</h1>

      <div className="highlight__wrapper">
        <div className="highlight__wrap1">
          <span className="highlight__wrap1 highlight__wrap1--bold">
            By {channel}
          </span>
          <span className="highlight__wrap1 highlight__wrap1">{timestamp}</span>
        </div>

        <div className="highlight__wrappersub">
          <div className="highlight__wrap2">
            <img src={Views} alt="views icon"></img>
            <span>{views}</span>
          </div>

          <div className="highlight__wrap3">
            <img src={Likes} alt="likes icon"></img>
            <span>{likes}</span>
          </div>
        </div>
      </div>
      <div className="highlight__description">
        <p>{description}</p>
        <p className="highlight__comment">3 Comments</p>
      </div>
    </div>
  );
}

export default Highlight;
