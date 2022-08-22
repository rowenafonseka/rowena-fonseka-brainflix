import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Upload from "./pages/Upload/Upload";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Upload />
    </div>
  );
}

export default App;
