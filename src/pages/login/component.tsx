import { Align, Container, Display, Justify } from '@ladders/common-ui';
import { gql } from 'apollo-boost';
import { parse } from 'querystring';
import * as React from 'react';
import { Mutation } from 'react-apollo';

export interface PublicProps {}

type Props = PublicProps;

const mutation = gql`
  mutation CreateUser($code: String) {
    createUser(code: $code) {
      twitchID
      accessToken
      canList
    }
  }
`;

export class LoginPage extends React.Component<Props> {
  public render() {
    return (
      <Mutation mutation={mutation}>
        {(createUser, { data, called }) => {
          if (!called) {
            const params = parse(location.search);
            createUser({ variables: { code: params['?code'] } });
          }

          let content = 'Logging in...';

          if (data) {
            if (!data.createUser) {
              content = 'Error logging you in, please try again.';
            } else {
              content = 'Logged in!';

              window.close();
            }
          }

          return (
            <Container display={Display.Flex} align={Align.Center} justify={Justify.Center} fullHeight>
              {content}
            </Container>
          );
        }}
      </Mutation>
    );
  }
}
