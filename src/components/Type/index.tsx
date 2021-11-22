import { Container } from './styles';

type Props = {
  typeName: string;
};

function Test({ typeName }: Props): JSX.Element {
  return <Container type-name={typeName}>{typeName}</Container>;
}

export default Test;
