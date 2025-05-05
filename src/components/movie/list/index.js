import { Suspense } from 'react';
import List from './list';
import { fetchList } from '../../../utils/fetch';

export default function MoviesList({ name }) {
  const listPromise = fetchList(name);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <List listPromise={listPromise} />
    </Suspense>
  );
}
