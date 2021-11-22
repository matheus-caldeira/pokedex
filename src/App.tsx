import Routes from './routes';
import Contexts from './contexts';
import GlobalStyle from './styles/global';

function App(): JSX.Element {
  return (
    <Contexts>
      <Routes />
      <GlobalStyle />
    </Contexts>
  );
}

export default App;
