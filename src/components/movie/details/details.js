import { use } from 'react';

export default function Detils({ moviePromise }) {
  const movie = use(moviePromise);

  return (
    <div>
      {movie.title}
    </div>
  );
}
