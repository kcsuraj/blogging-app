import React, { FC } from 'react';
import { RenderRoutes } from './routes';
import { Navbar } from './components';

const App: FC = () => (
  <div>
    <Navbar />
    <RenderRoutes />
  </div>
);

export default App;
