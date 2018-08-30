import { Align, Container, Display, Justify } from '@ladders/common-ui';
import { Button } from '@ladders/common-ui/components/button';
import * as React from 'react';
import './styles.scss';

export interface PublicProps {}

type Props = PublicProps;

export class TopNav extends React.Component<Props, React.ComponentState> {
  public render() {
    return (
      <Container
        className="top-nav"
        padding={0.5}
        display={Display.Flex}
        justify={Justify.Between}
      >
        <Container>
          <img src="/assets/logo.png" alt="Ladders Down" title="Ladders Down" height={40} />
        </Container>
        <Container display={Display.Flex} justify={Justify.Between} align={Align.Center}>
          <Button>Login</Button>
          <Button>Join</Button>
        </Container>
      </Container>
    );
  }
}
