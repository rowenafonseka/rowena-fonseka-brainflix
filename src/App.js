import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Highlight from "./components/Highlight/Highlight";
import Form from "./components/Form/Form";
import Comments from "./components/Comments/Comments";
import Videolist from "./components/Videolist/Videolist";
import video from "./assets/data/video-details.json";
import videos from "./assets/data/videos.json";
import "./App.scss";

function App() {

  return (
    <div className="App">
      <Header />
      <Hero video={video} />
      <Highlight video={video} />
      <Form />
      <Comments comments={video} />
      <Videolist vids={videos}/>
    </div>
  );
}

export default App;
