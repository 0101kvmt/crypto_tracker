import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'

import { CryptoContainer } from './src/components'
import { Header } from './src/components'
import Store from './src/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store ={Store}>
        <View style={styles.container}>
          <Header hello={this.props} />
          <Text>REAL-TIME Crypto</Text>
          <Text>REAL-TIME HODLS</Text>
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
