import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  contentText: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
    fontFamily: 'BoonJot-Regular'
  },
  contentTitle: {
    color: 'white',
    fontSize: 21,
    alignSelf: 'center',
    fontFamily: 'BoonJot-Regular'
  }
})

export const HeaderContent = ({ style }) => (
  <View style={style}>
    <Text style={styles['contentTitle']}>58130500100</Text>
    <Text style={styles['contentText']}>Vipatip Thanunpraditkul</Text>
  </View>
)

export default HeaderContent
