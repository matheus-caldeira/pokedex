import IStat from '../../dtos/IStat';
import transformStateName from '../../utils/transformStateName';

import { Container } from './styles';

type Props = {
  stat: IStat;
};

function Stat({ stat }: Props): JSX.Element {
  return (
    <Container progress={stat.base_stat}>
      <h4>{transformStateName(stat.stat.name)}</h4>
      <hr className="break" />
      <p>{String(stat.base_stat).padStart(3, '0')}</p>
      <div>
        <div className="progress opacity" />
        <div className="progress" />
      </div>
    </Container>
  );
}

export default Stat;
