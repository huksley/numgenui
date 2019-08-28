import React from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Header = () => (
  <ImageBackground
    accessibilityRole={'image'}
    source={require('../assets/logo.png')}
    style={styles.background}
    imageStyle={styles.logo}
  >
    <Text style={styles.text}>Number Generator</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: '#303030',
  },
  logo: {
    opacity: 0.4,
    overflow: 'visible',
    resizeMode: 'cover',
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 45,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.white,
  },
});

export default Header;
