import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import video from "./assets/data/video-details.json";
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Hero video={video} />
    </div>
  );
}

export default App;
