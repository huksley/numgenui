import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/HomeScreen';

class OptionsScreen extends React.Component {
  static navigationOptions = {
    title: 'Options',
  };

  render() {
    return (
      <View>
        <Text>Options Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Options: {
      screen: OptionsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: <Text>⚙ </Text>,
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
