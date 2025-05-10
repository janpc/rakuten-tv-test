import { use } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from '../../common/modal/modal';

export default function Detils({ moviePromise }) {
  const movie = use(moviePromise);
  const navigate = useNavigate();

  function handleClose() {
    navigate('/');
  }

  return (
    <Modal onClose={handleClose}>
      {movie.title}
    </Modal>
  );
}
