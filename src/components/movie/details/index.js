import { Suspense } from 'react';
import { useParams } from 'react-router';
import Details from './details';
import { fetchMovie } from '../../../utils/fetch';
import DetailsList from './details.loading';

export default function MovieDetils() {
  const { id } = useParams();
  const moviePromise = fetchMovie(id);

  console.log(id);

  return (
    <Suspense fallback={<DetailsList />}>
      {moviePromise && <Details moviePromise={moviePromise} />}
    </Suspense>
  );
}
