import { Outlet } from 'react-router';
import MoviesList from '../components/movie/list';
import { Main } from '../styles/main.styles';
import Header from '../components/common/header/header';

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <MoviesList name="free-top-movies" />
        <MoviesList name="store-hottest" />
        <MoviesList name="store-all-offers" />
        <MoviesList name="free-recently-added" />
        <Outlet />
      </Main>
    </>
  );
}
