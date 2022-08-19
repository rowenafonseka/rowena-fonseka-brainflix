import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Highlight from "./components/Highlight/Highlight";
import Form from "./components/Form/Form";
import Comments from "./components/Comments/Comments";
import video from "./assets/data/video-details.json";
import "./App.scss";

function App() {

  return (
    <div className="App">
      <Header />
      <Hero video={video} />
      <Highlight video={video} />
      <Form />
      <Comments comments={video}/>
    </div>
  );
}

export default App;
