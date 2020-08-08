/**
 * Ref: https://medium.com/better-programming/react-router-architecture-thats-simple-scalable-and-protected-da896827f946
 */
import React, { ReactElement, FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Landing } from './modules';

const routes: any[] = [
  { path: '/', key: 'ROOT', exact: true, component: Landing },
  {
    path: '/app',
    key: 'APP',
    component: () => <h1>App Index</h1>,
    routes: [
      {
        path: '/app',
        key: 'APP_ROOT',
        exact: true,
        component: () => <h1>App Index</h1>
      },
      {
        path: '/app/page',
        key: 'APP_PAGE',
        exact: true,
        component: () => <h1>App Page</h1>
      }
    ]
  }
];

const RouteWithSubRoutes = (route: any): ReactElement => (
  <Route path={route.path} exact={route.exact} render={props => <route.component {...props} routes={route.routes} />} />
);

const RenderRoutes: FC = () => (
  <Switch>
    {routes.map((route: any) => (
      <RouteWithSubRoutes key={route.key} {...route} />
    ))}
    <Route component={() => <h1>Not Found!</h1>} />
  </Switch>
);

export { RenderRoutes, routes };
