import { Root } from '@ladders/core/components/root';
import { modalReducer } from '@ladders/core/state/modal/reducer';
import { sessionReducer } from '@ladders/core/state/session/reducer';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:3000/graphql',
  }),
  cache: new InMemoryCache(),
});

const reducers = combineReducers({
  session: sessionReducer,
  modal: modalReducer,
});

const store = createStore(reducers, composeWithDevTools());

console.log(store);

const root = (
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <Root />
    </Provider>
  </ApolloProvider >
);

ReactDOM.render(root, document.querySelector('#root'));
