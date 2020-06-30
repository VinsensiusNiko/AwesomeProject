import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import {InMemoryCache} from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import stores from './stores';

import Home from '../src/pages/Home';
import Profile from '../src/pages/Profile';
import SplashScreen from '../src/pages/SplashScreen';
import Landing from '../src/pages/Landing';
import Pdp from '../src/pages/Pdp';
import Categories from '../src/pages/Categories';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const client = new ApolloClient({
  uri: 'https://lottemart.testingnow.me/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={stores}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{title: 'welcome Dude !'}}
            />
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Pdp" component={Pdp} />
            <Stack.Screen name="Categories" component={Categories} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ApolloProvider>

    // ---Tabs Bottom---
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={Home} />
    //     <Tab.Screen name="Profile" component={Profile} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default App;
