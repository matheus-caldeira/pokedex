import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Contexts from './contexts';
import GlobalStyle from './styles/global';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Contexts>
        <Routes />
        <GlobalStyle />
      </Contexts>
    </BrowserRouter>
  );
}

export default App;
