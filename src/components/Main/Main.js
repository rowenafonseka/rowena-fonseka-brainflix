import "./Main.scss";
import Hero from "../../components/Hero/Hero";
import Highlight from "../../components/Highlight/Highlight";
import Form from "../../components/Form/Form";
import Comments from "../../components/Comments/Comments";
import Videolist from "../../components/Videolist/Videolist";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL + "/videos";
console.log(apiUrl);

function Main() {
  const { id } = useParams();

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setVideos(response.data);

        let videoId;

        if (id) {
          videoId = id;
        } else {
          videoId = response.data[0].id;
        }

        return axios.get(apiUrl + "/" + videoId);
      })
      .then((response) => {
        setSelectedVideo(response.data);
      });
  }, [id]);

  if (videos.length === 0 || selectedVideo === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Hero image={selectedVideo.image} />
      <main className="main">
        <div className="main__content">
          {selectedVideo && (
            <Highlight
              selectedVideo={selectedVideo}
              title={selectedVideo.title}
              channel={selectedVideo.channel}
              timestamp={selectedVideo.timestamp}
              views={selectedVideo.views}
              likes={selectedVideo.likes}
              description={selectedVideo.description}
            />
          )}
          <div className="main__comments">
            <Form />
            {selectedVideo && (
              <Comments
                selectedVideo={selectedVideo}
                comments={selectedVideo.comments}
              />
            )}
          </div>
        </div>
        <div className="main__videos">
          <Videolist selectedVideo={selectedVideo} videos={videos} />
        </div>
      </main>
    </>
  );
}

export default Main;
