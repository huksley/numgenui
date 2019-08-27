import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  number: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  indexColumn: {
    width: '10%',
    textAlign: 'center',
    borderColor: '#d0d0d0',
    borderWidth: 1,
  },
  primaryColumn: {
    width: '60%',
    textAlign: 'center',
    borderColor: '#d0d0d0',
    borderWidth: 1,
  },
  secondaryColumn: {
    width: '30%',
    textAlign: 'center',
    borderColor: '#d0d0d0',
    borderWidth: 1,
  },
  index: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  primary: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  secondary: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

class GeneratedNumber extends React.Component {
  GeneratedNumber(props) {
    this.props = props;
  }

  render() {
    return (
      <View style={styles.number}>
        <View style={styles.indexColumn}>
          <Text style={styles.index}>{this.props.index || 1}</Text>
        </View>
        <View style={styles.primaryColumn}>
          <Text style={styles.primary}>
            {this.props.primary && this.props.primary.join(', ')}
          </Text>
        </View>
        <View style={styles.secondaryColumn}>
          <Text style={styles.secondary}>
            {this.props.secondary && this.props.secondary.join(', ')}
          </Text>
        </View>
      </View>
    );
  }
}

export default GeneratedNumber;
