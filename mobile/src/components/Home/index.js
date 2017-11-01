import React from 'react'
import { StyleSheet, View } from 'react-native'

import App from '../App'
import Header from './Header'
import Locker from './Locker'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  lockerStyle: {
    flex: 2,
    margin: 19,
    marginTop: 20,
    padding: 40,
    paddingTop: 20,
    borderRadius: 10,
    backgroundColor: '#162f52',
    justifyContent: 'center'
  }
})

export const Index = () => (
  <View style={styles['container']}>
    <Header />
    <Locker style={styles['lockerStyle']} />
  </View>
)

export default App(Index)
