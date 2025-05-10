import { Container, Name, Photo } from './item.styles';

export default function PeopleListItem({ info }) {
  return (
    <Container>
      <Photo src={info.photo} alt={info.name} loading="lazy" />
      <Name>{info.name}</Name>
    </Container>
  );
}
