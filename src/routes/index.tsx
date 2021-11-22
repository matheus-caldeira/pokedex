import { Routes as Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Show from '../pages/Show';

function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Show />} />
      <Route path="*" element={<Home />} />
    </Switch>
  );
}

export default Routes;
