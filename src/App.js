import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import MovieDetils from './components/movie/details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="movie/:id" element={<MovieDetils />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
