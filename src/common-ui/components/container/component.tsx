import { InjectStyles, PublicProps as InjectStylesPublicProps } from '@ladders/common-ui/components/inject-styles';
import * as React from 'react';

type Props = InjectStylesPublicProps;

export class Container extends React.Component<Props, React.ComponentState> {
  public render() {
    return (
      <InjectStyles {...this.props}>
        <div>
          {this.props.children}
        </div>
      </InjectStyles>
    );
  }
}
