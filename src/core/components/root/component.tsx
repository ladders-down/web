
import { loadComponent } from '@ladders/common/utils/loadable';
import { ModalRoot } from '@ladders/core/components/modal-root';
import 'normalize.css';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles.scss';

type Props = React.Props<Root>;

const DefaultPage = loadComponent(() => import(/* webpackChunkName: pages.default */ '@ladders/pages/default'), 'DefaultPage');
const LoginPage = loadComponent(() => import(/* webpackChunkName: pages.login */ '@ladders/pages/login'), 'LoginPage');

export class Root extends React.Component<Props, React.ComponentState> {
  public render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route exact path="/" component={DefaultPage} />
          </Switch>
        </Router>
        <ModalRoot />
      </>
    );
  }
}
