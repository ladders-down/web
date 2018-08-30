
import { Container, Direction, Display } from '@ladders/common-ui';
import { TopNav } from '@ladders/features/navigation/components/top-nav';
import 'normalize.css';
import * as React from 'react';
import './styles.scss';

type Props = React.Props<Root>;

export class Root extends React.Component<Props, React.ComponentState> {
  public render() {
    return (
      <Container
        display={Display.Flex}
        direction={Direction.Column}
        grow
      >
        <TopNav />
      </Container>
    );
  }
}
