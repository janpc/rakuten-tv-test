import { Outlet } from 'react-router-dom';
import MoviesList from '../components/movie/list';
import { Main } from '../styles/main.styles';

export default function Home() {
  return (
    <Main>
      <MoviesList name="free-top-movies" />
      <MoviesList name="store-hottest" />
      <MoviesList name="store-all-offers" />
      <MoviesList name="free-recently-added" />
      <Outlet />
    </Main>
  );
}
