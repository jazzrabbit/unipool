// screens/SplashScreen.js
import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

const FIVE_SECONDS = 5000;

class SplashScreen extends React.Component {
  componentDidMount() {
    // When mounted, wait one second, then navigate to App
    setTimeout(() => {
      this.props.navigation.navigate('LoadingScreen');
    }, FIVE_SECONDS);
  }

  render() {
    return (
      <Text>
        Splash
      </Text>
    );
  }
}
export default SplashScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }

})