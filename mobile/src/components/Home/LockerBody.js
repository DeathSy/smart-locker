import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import LockerIcon from '../../statics/icons/locker.png'
import LockerContent from './LockerContent'

export const styles = StyleSheet.create({
  lockerImage: {
    flex: 1,
    height: 140,
    marginRight: 12
  },
  lockerContent: {
    flex: 1.5,
    alignItems: 'flex-end'
  }
})

export const LockerBody = ({ style }) => (
  <View style={style}>
    <Image style={styles['lockerImage']} source={LockerIcon} />
    <LockerContent style={styles['lockerContent']} />
  </View>
)

export default LockerBody
