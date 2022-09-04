import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import UploadVideo from "./pages/UploadVideo/UploadVideo";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/videos/:id" element={<Homepage />} />
        <Route path="/UploadVideo" element={<UploadVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
