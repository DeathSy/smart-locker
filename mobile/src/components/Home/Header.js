import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import HeaderContent from './HeaderContent'

const IMAGE_URL = 'http://apollo.kmutt.ac.th/kmuttstdpic/default.aspx?&stdcode='

export const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },
  headerImage: {
    flex: 4,
    width: 120,
    borderRadius: 100,
    marginBottom: 0
  },
  headerContent: {
    flex: 1
  }
})

export const Header = () => (
  <View style={styles['headerContainer']}>
    <Image
      style={styles['headerImage']}
      source={{
        uri: `${IMAGE_URL}57130500008`
      }}
    />
    <HeaderContent style={styles['headerContent']} />
  </View>
)

export default Header
