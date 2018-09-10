import { StyleProps } from '@ladders/common-ui/components/inject-styles';
import { LinkTarget } from '@ladders/common-ui/components/link/component';
import * as React from 'react';
import './styles.scss';

export interface PublicProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  to?: string;
  target?: LinkTarget;
}

type Props = React.Props<Button> & PublicProps & StyleProps;

export class Button extends React.Component<Props, React.ComponentState> {
  public render() {
    return (
      <button className={this.props.className} onClick={this.onClick}>
        {this.props.children}
      </button>
    );
  }

  private onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (this.props.onClick) {
      this.props.onClick(e);
      return;
    }

    if (this.props.to) {
      if (this.props.target) {
        const name = '';
        let windowFeatures = '';

        if (this.props.target === LinkTarget.Popup) {
          const width = 520;
          const height = 720;

          const screenWidth = screen.width;
          const screenHeight = screen.height;

          let left = (screenWidth - width) / 2;
          let top = (screenHeight - height) / 2;

          left = left > -1 ? left : 0;
          top = top > -1 ? top : 0;

          windowFeatures = `width=520,height=720,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,centerscreen=yes,chrome=yes,top=${top},left=${left}`;
        }

        window.open(this.props.to, name, windowFeatures);
        return;
      }

      location.href = this.props.to;
    }
  }
}
