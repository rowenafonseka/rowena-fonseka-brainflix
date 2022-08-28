import "./Highlight.scss";
import Views from "../../assets/Icons/views.svg";
import Likes from "../../assets/Icons/likes.svg";

function Highlight({ title, channel, timestamp, views, likes, description }) {
  return (
    <div className="highlight">
      <h1 className="highlight__title">{title}</h1>

      <div className="highlight__wrapper">
        <div className="highlight__wrap-author">
          <span className="highlight__wrap-author highlight__wrap-author--bold">
            By {channel}
          </span>
          <span className="highlight__wrap-author highlight__wrap-author">
            {new Date(timestamp).toLocaleDateString("en-US", {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
            })}
          </span>
        </div>

        <div className="highlight__wrappersub">
          <div className="highlight__wrap-social">
            <img
              className="highlight__wrap-social highlight__wrap-social--icon"
              src={Views}
              alt="views icon"
            ></img>
            <span>{views}</span>
          </div>

          <div className="highlight__wrap-socials">
            <img
              className="highlight__wrap-socials highlight__wrap-socials--icon"
              src={Likes}
              alt="likes icon"
            ></img>
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
