import { ladders } from '@ladders';
import { Align, Container, Display, Justify } from '@ladders/common-ui';
import React from 'react';

export const OAuthPage: React.StatelessComponent = () => {
  return (
    <Container display={Display.Flex} align={Align.Center} justify={Justify.Center} fullHeight>
      <iframe src={`https://id.twitch.tv/oauth2/authorize?client_id=${ladders.config.clientID}&redirect_uri=http://localhost:8081/login&response_type=code&scope=${ladders.config.scopes}&force_verify`} />
    </Container>
  );
};
