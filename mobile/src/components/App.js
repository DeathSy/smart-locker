import React from 'react'
import { View, StyleSheet } from 'react-native'

import { backgroundColor } from '../statics/core'

export const styles = StyleSheet.create({
  container: {
    backgroundColor,
    flex: 1
  }
})

const App = Component => props => (
  <View style={styles['container']}>
    <Component {...props} />
  </View>
)

export default App
