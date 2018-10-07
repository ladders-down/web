import { Align, Container, Display, Justify } from '@ladders/common-ui';
import { Button } from '@ladders/common-ui/components/button';
import { LinkTarget } from '@ladders/common-ui/components/link';
import { OAuthPage } from '@ladders/pages/oauth/component';
import * as React from 'react';
import './styles.scss';

export interface PublicProps {}

export interface ReduxDispatchProps {
  // tslint:disable-next-line:no-any
  showModal: (content: React.ComponentType) => void;
}

type Props = PublicProps & ReduxDispatchProps;

export class TopNavPresentation extends React.Component<Props, React.ComponentState> {
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
          <Button onClick={this.onLoginClicked} target={LinkTarget.Popup}>Login</Button>
        </Container>
      </Container>
    );
  }

  private onLoginClicked = () => {
    this.props.showModal(OAuthPage);
  }

  // private getOAuthURL = () => {
  //   return `https://id.twitch.tv/oauth2/authorize?client_id=${ladders.config.clientID}&redirect_uri=http://localhost:8081/login&response_type=code&scope=${ladders.config.scopes}&force_verify`;
  // }
}
