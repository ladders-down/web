
import { Container } from '@ladders/common-ui';
import 'normalize.css';
import * as React from 'react';
import './styles.scss';

type Props = React.Props<Root>;

export class Root extends React.Component<Props, React.ComponentState> {
  public render() {
    return (
      <Container padding={{ x: 1, y: 2 }}>
        <h1>Hello World</h1>
        <p>Sweet</p>
      </Container>
    );
  }
}
