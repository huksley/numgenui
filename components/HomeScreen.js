import React, { Fragment } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button, StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Header from './Header';
import GeneratedNumbers from './GeneratedNumbers';

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
  buttonContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  button: {
    margin: 40,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
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

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  HomeScreen() {
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
        const oldNumbers = this.state && this.state.numbers ? this.state.numbers : [];
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
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            <Header />
            <View style={styles.body}>
              <View style={styles.buttonContainer}>
                <Button
                  style={styles.button}
                  onPress={() => {
                    this.reloadNumber();
                  }}
                  title="More numbers"
                />
                <Button
                  style={styles.button}
                  color="gray"
                  onPress={() => this.props.navigation.navigate('Options')}
                  title="Options"
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

export default HomeScreen;
