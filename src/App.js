import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import UploadVideo from "./pages/UploadVideo/UploadVideo";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/UploadVideo" element={<UploadVideo />} />
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <Header />
    //   <Main />
    //   <Upload />
    // </div>
  );
}

export default App;
