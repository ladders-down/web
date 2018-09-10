import { ladders } from '@ladders';
import { Align, Container, Display, InjectStyles, Justify } from '@ladders/common-ui';
import { Button } from '@ladders/common-ui/components/button';
import { LinkTarget } from '@ladders/common-ui/components/link';
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
          <InjectStyles margin={{ right: 0.5 }}>
            <Button>Login</Button>
          </InjectStyles>
          <Button to={this.getOAuthURL()} target={LinkTarget.Popup}>Join</Button>
        </Container>
      </Container>
    );
  }

  private getOAuthURL = () => {
    return `https://id.twitch.tv/oauth2/authorize?client_id=${ladders.config.clientID}&redirect_uri=http://localhost:3000&response_type=code&scope=${ladders.config.scopes}&force_verify`;
  }
}
