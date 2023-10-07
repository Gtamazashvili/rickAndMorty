import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import DetailedInfo from "../pages/DeatiledInfo";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<DetailedInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
