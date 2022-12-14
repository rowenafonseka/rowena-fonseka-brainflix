import "./Videolist.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Videolist({ videos, selectedVideo }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const filteredVideos = videos.filter((video) => {
    if (video.id === selectedVideo.id) {
      return false;
    } else {
      return true;
    }
  });

  return (
    <div className="videolist">
      <h3 className="videolist__title">Next Videos</h3>

      {filteredVideos.map((video) => (
        <Link
          to={`/videos/${video.id}`}
          key={video.id}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="videolist__container"
        >
          <div>
            <img
              className="videolist__img"
              src={video.image}
              alt="next video"
            ></img>
          </div>
          <div className="videolist__detail">
            <p className="videolist__detail videolist__detail--bold">
              {video.title}
            </p>
            <p>{video.channel}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Videolist;
