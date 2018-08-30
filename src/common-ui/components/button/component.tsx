import * as React from 'react';
import './styles.scss';

export interface PublicProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type Props = React.Props<Button> & PublicProps;

export class Button extends React.Component<Props, React.ComponentState> {
  public render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}
