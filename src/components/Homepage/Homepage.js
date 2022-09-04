import "./Homepage.scss";
import Hero from "../Hero/Hero";
import Highlight from "../Highlight/Highlight";
import Form from "../Form/Form";
import Comments from "../Comments/Comments";
import Videolist from "../Videolist/Videolist";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL + "/videos";
console.log(apiUrl);

function Homepage() {
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
      })

      .catch((error) => {
        alert(error.message);
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

export default Homepage;
