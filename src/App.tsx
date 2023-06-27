import "./App.css";
import Navbar from "./components/navbar";
import Movies from "./components/movies";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/movies/:category" element={<Movies />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
