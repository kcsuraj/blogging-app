/**
 * Ref: https://medium.com/better-programming/react-router-architecture-thats-simple-scalable-and-protected-da896827f946
 */
import React, { ReactElement, FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './modules/landing'
import { SignIn, SignUp } from './modules/auth'

const routes: any[] = [
  { path: '/', exact: true, component: Landing },
  {
    path: '/signin',
    component: SignIn
    // routes: [
    //   {
    //     path: '/app',
    //     exact: true,
    //     component: () => <h1>App Index</h1>
    //   },
    //   {
    //     path: '/app/page',
    //     exact: true,
    //     component: () => <h1>App Page</h1>
    //   }
    // ]
  },
  {
    path: '/signup',
    component: SignUp
  }
]

const RouteWithSubRoutes = (route: any): ReactElement => (
  <Route path={route.path} exact={route.exact} render={props => <route.component {...props} routes={route.routes} />} />
)

const RenderRoutes: FC = () => (
  <Switch>
    {routes.map((route: any) => (
      <RouteWithSubRoutes key={route.path} {...route} />
    ))}
    <Route component={() => <h1>Not Found!</h1>} />
  </Switch>
)

export { RenderRoutes, routes }
