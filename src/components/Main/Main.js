import Hero from "../../components/Hero/Hero";
import Highlight from "../../components/Highlight/Highlight";
import Form from "../../components/Form/Form";
import Comments from "../../components/Comments/Comments";
import Videolist from "../../components/Videolist/Videolist";
import video from "../../assets/data/video-details.json";
import videos from "../../assets/data/videos.json";

function Main() {
  return (
    <>
      <Hero video={video} />
      <Highlight video={video} />
      <Form />
      <Comments comments={video} />
      <Videolist vids={videos} />
    </>
  );
}

export default Main;
