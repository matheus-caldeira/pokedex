import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';

function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
