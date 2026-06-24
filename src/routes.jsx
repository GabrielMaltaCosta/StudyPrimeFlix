import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./Pages/Home/Home";
import Movie from "./Pages/Movie/Movie";
import Notfound from "./Pages/Error/NotFound";

function RoutesApp() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<Movie />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}
export default RoutesApp;
