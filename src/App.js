import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/home';
import MovieDetils from './components/movie/details';
import Trailer from './pages/player';
import Error from './pages/error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="movie/:id" element={<MovieDetils />} />
        </Route>
        <Route exact path="/play/trailer/:id" element={<Trailer />} />
        <Route exact path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
