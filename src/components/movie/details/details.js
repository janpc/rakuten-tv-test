/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import { use, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import Modal from '../../common/modal/modal';
import {
  Cast,
  Description,
  Directors,
  Genres,
  ImageContent,
  ImageTitle,
  MovieInfo,
  People,
  PeopleList,
  PeopleTitle,
  ShowMore,
  Snapshot,
  SnapshotContainer,
  Title,
  TrailerButton,
  TrailerImage,
} from './details.styles';
import PeopleListItem from '../../people/item/item';
import trailerIcon from '../../../assets/images/trailer.svg';

export default function Detils({ moviePromise }) {
  const {
    title,
    images,
    genres,
    plot,
    directors,
    actors,
    id,
    error,
    content,
  } = use(moviePromise);

  const navigate = useNavigate();
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    if (error) {
      navigate('/error', { state: content });
    }
  }, [error]);

  function handleClose() {
    navigate('/');
  }

  if (error) {
    return;
  }

  return (
    <Modal onClose={handleClose}>
      <SnapshotContainer>
        <Snapshot alt={title} src={images.snapshot_webp} />
        <ImageContent>
          {images.title_treatment
            ? <ImageTitle src={images.title_treatment} />
            : <Title>{title}</Title>}
          <TrailerButton to={`/play/trailer/${id}`}>
            <TrailerImage src={trailerIcon} alt="Play Trailer" />
          </TrailerButton>
        </ImageContent>
      </SnapshotContainer>
      <MovieInfo>
        <Genres>
          {genres.map(({ name }, index) => {
            if (index === genres.length - 1) {
              return <span>{name}</span>;
            }

            return (
              <span>
                {name}
                ,
              </span>
            );
          })}
        </Genres>
        <Description $full={showFullDescription}>
          <span>{plot}</span>
          {!showFullDescription
            && (
              <ShowMore
                type="button"
                onClick={() => setShowFullDescription(true)}
              >
                Ver más...
              </ShowMore>
            )}
        </Description>
      </MovieInfo>
      <People>
        <Directors>
          <PeopleTitle>Directores</PeopleTitle>
          <PeopleList $cols={1}>
            {
              directors.map(((director) => <PeopleListItem key={director.id} info={director} />))
            }
          </PeopleList>
        </Directors>
        <Cast>
          <PeopleTitle>Cast</PeopleTitle>
          <PeopleList $cols={3}>
            {
              actors.map(((actor) => <PeopleListItem key={actor.id} info={actor} />))
            }
          </PeopleList>
        </Cast>
      </People>
    </Modal>
  );
}
