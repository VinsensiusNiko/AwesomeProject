/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
import { ApolloClient, HttpLink, ApolloLink, InMemoryCache } from 'apollo-boost';

import AsyncStorage from '@react-native-community/async-storage';

const apolloInit = async (config) => {
  let getAuthData = await AsyncStorage.getItem('token');

  const httpLink = new HttpLink({ uri: 'https://lottemart.testingnow.me/graphql' });

  const authLink = new ApolloLink((operation, forward) => {
    getAuthData = JSON.parse(getAuthData);
    // Retrieve the authorization token from local storage.
    let token = '';
    if (getAuthData === null) {token === '';}
    else if (getAuthData.token === null) {token = '';}
    else {token = getAuthData.token;}
    const authorization = token !== '' ? `Bearer ${token}` : '';
    // Use the setContext method to set the HTTP headers.
    operation.setContext({
      headers: {
        authorization,
      },
    });

    // Call the next link in the middleware chain.
    return forward(operation);
  });

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink), // Chain it with the HttpLink
    cache: new InMemoryCache(),
  });

  const configClient = config.type === 'm' ? { mutation: config.schema } : { query: config.schema };
  if (config.data !== null) {configClient.variables = config.data;}

  if (config.type === 'm') {return apolloClient.mutate(configClient);}
  return apolloClient.query(configClient);
};

export const query = async (schema, data = null) => {
  const config = { type: 'q', schema, data };
  const apolloClientQuery = await apolloInit(config);
  return apolloClientQuery;
};

export const mutate = async (schema, data = null) => {
  const config = { type: 'm', schema, data };
  const apolloClientMutation = await apolloInit(config);
  return apolloClientMutation;
};
