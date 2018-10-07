import { Container, Direction, Display } from '@ladders/common-ui';
import { loadComponent } from '@ladders/common/utils/loadable';
import { TopNav } from '@ladders/features/navigation/components/top-nav';
import React from 'react';
import { Route, Switch } from 'react-router';

export interface PublicProps {}
type Props = PublicProps;

const HomePage = loadComponent(() => import(/* webpackChunkName: pages.home */ '@ladders/pages/home'), 'HomePage');

export const DefaultPage = (_props: Props) => {
  return (
    <Container
      display={Display.Flex}
      direction={Direction.Column}
      grow
    >
      <TopNav />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Container>
  );
};
