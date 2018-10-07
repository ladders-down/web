import * as React from 'react';
export interface PublicProps {}

type Props = PublicProps;

export class HomePage extends React.Component<Props> {
  public render() {
    return (
      <>
        Welcome.
      </>
    );
  }
}
