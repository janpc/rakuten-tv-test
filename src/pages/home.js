import MoviesList from '../components/movie/list';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <MoviesList name="free-top-movies" />
      <MoviesList name="store-hottest" />
      <MoviesList name="store-all-offers" />
      <MoviesList name="free-recently-added" />
    </>
  );
}
