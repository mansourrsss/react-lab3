import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Movies from "./pages/Movies";
import TopRated from "./pages/TopRated";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/topRated" element={<TopRated />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
