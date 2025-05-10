import { Suspense, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Details from './details';
import { fetchMovie } from '../../../utils/fetch';
import DetailsList from './details.loading';

export default function MovieDetils() {
  const { id } = useParams();
  const moviePromise = useRef();

  useEffect(() => {
    moviePromise.current = fetchMovie(id);
  }, [id]);

  return (
    <Suspense fallback={<DetailsList />}>
      {moviePromise.current && <Details moviePromise={moviePromise.current} />}
    </Suspense>
  );
}
