import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Highlight from "./components/Highlight/Highlight";
import video from "./assets/data/video-details.json";
import "./App.scss";

function App() {

  return (
    <div className="App">
      <Header />
      <Hero video={video} />
      <Highlight video={video} />
    </div>
  );
}

export default App;
