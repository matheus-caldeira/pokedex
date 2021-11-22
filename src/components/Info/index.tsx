import { Container } from './styles';

type Props = {
  icon?: string;
  name: string;
  infos: string[];
};

const defaultProps = {
  icon: undefined,
};

function Info({ icon, name, infos }: Props): JSX.Element {
  return (
    <Container>
      <div>
        {icon && <img src={icon} alt={name} />}
        <div>
          {infos.map(info => (
            <p key={info}>{info}</p>
          ))}
        </div>
      </div>
      <small>{name}</small>
    </Container>
  );
}

Info.defaultProps = defaultProps;

export default Info;
