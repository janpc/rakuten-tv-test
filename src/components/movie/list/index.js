import { Suspense } from 'react';
import List from './list';
import { fetchList } from '../../../utils/fetch';
import LoadingList from './list.loading';

export default function MoviesList({ name }) {
  const listPromise = fetchList(name);

  return (
    <Suspense fallback={<LoadingList />}>
      <List listPromise={listPromise} />
    </Suspense>
  );
}
