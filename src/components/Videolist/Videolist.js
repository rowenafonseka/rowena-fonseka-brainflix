import "./Videolist.scss";

function Videolist({ vids, selectedVideoId, changeVideo }) {
  // const videos = props.vids;

  const filteredVideos = vids.filter((video) => {
    if (video.id === selectedVideoId) {
      return false;
    } else {
      return true;
    }
  });

  return (
    <div className="videolist">
      <h3 className="videolist__title">Next Videos</h3>

      {filteredVideos.map((video) => (
        <div
          onClick={() => {
            changeVideo(video.id);
          }}
          key={video.id}
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
        </div>
      ))}
    </div>
  );
}

export default Videolist;
