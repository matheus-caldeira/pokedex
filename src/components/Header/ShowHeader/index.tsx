import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Header, Nav } from './styles';

type ShowHeaderProps = {
  id?: number;
  name?: string;
  image?: string;
  next: number;
  back: number;
};

const defaultProps = {
  id: 0,
  name: '',
  image: '',
};

function ShowHeader({
  id,
  name,
  image,
  next,
  back,
}: ShowHeaderProps): JSX.Element {
  const navigate = useNavigate();

  const nextPage = useCallback(() => {
    if (next) navigate(`/${next}`);
  }, [navigate, next]);

  const backPage = useCallback(() => {
    if (back) navigate(`/${back}`);
  }, [navigate, back]);

  return (
    <Container>
      <Header>
        <button type="button" onClick={() => navigate('/')}>
          <div className="icon" />
        </button>
        <h1>{name}</h1>
        <h2>#{String(id).padStart(3, '0')}</h2>
      </Header>
      <Nav>
        {back ? (
          <button type="button" onClick={backPage}>
            <div className="icon" />
          </button>
        ) : (
          <span />
        )}
        <img src={image} alt={name} />
        {next ? (
          <button type="button" onClick={nextPage}>
            <div className="icon" />
          </button>
        ) : (
          <span />
        )}
      </Nav>
    </Container>
  );
}

ShowHeader.defaultProps = defaultProps;

export default ShowHeader;
