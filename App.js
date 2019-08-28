import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/HomeScreen';

class OptionsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
  }
); 

const AppContainer = createAppContainer(AppNavigator);

 export default class App extends React.Component {
  render() {
    return <AppContainer />;
  } 
}
