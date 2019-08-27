/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

import GeneratedNumber from './GeneratedNumber';

const GeneratedNumbers = props => {
  const numbers = props.numbers;
  const fragments = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    fragments.push(
      <GeneratedNumber
        key={'number' + i}
        index={i + 1}
        primary={number.primary}
        secondary={number.secondary}
      />,
    );
  }
  return fragments;
};

class App extends React.Component {
  App() {
    this.setState({
      numbers: [],
      error: '',
    });
  }
  componentDidMount() {
    this.reloadNumber();
  }
  reloadNumber() {
    fetch('https://p1bqfi1qy0.execute-api.eu-west-1.amazonaws.com/dev/', {
      method: 'get',
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => {
        const oldNumbers =
          this.state && this.state.numbers ? this.state.numbers : [];
        this.setState({
          numbers: oldNumbers.concat({
            primary: result.eurojackpot.main,
            secondary: result.eurojackpot.secondary,
          }),
        });
      })
      .catch(err => {
        this.setState({
          error: String(err),
        });
      });
  }
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Button
                  onPress={() => {
                    this.reloadNumber();
                  }}
                  title="More numbers"
                />
              </View>
              <View style={styles.sectionContainer}>
                {this.state && this.state.numbers && (
                  <GeneratedNumbers numbers={this.state.numbers} />
                )}
              </View>
              <View style={styles.sectionContainer}>
                <Text>{this.state && this.state.error}</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
