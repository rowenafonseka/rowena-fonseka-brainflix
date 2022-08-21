import "./Main.scss";
import Hero from "../../components/Hero/Hero";
import Highlight from "../../components/Highlight/Highlight";
import Form from "../../components/Form/Form";
import Comments from "../../components/Comments/Comments";
import Videolist from "../../components/Videolist/Videolist";
import video from "../../data/video-details.json";
import videos from "../..//data/videos.json";
import { useState } from "react";

function Main() {
  const [selectedVideo, setSelectedVideo] = useState(video[0]);

  const changeVideo = (id) => {
    const foundVideo = video.find((video) => {
      if (video.id === id) {
        return true;
      }
    });

    setSelectedVideo(foundVideo);
  };

  return (
    <>
      <Hero image={selectedVideo.image} />
      <div className="main">
        <div className="main__content">
          <Highlight
            title={selectedVideo.title}
            channel={selectedVideo.channel}
            timestamp={selectedVideo.timestamp}
            views={selectedVideo.views}
            likes={selectedVideo.likes}
            description={selectedVideo.description}
          />
          <div className="main__comments">
            <Form />
            <Comments comments={selectedVideo.comments} />
          </div>
        </div>
        <div className="main__videos">
          <Videolist
            changeVideo={changeVideo}
            vids={videos}
            selectedVideoId={selectedVideo.id}
          />
        </div>
      </div>
    </>
  );
}

export default Main;
