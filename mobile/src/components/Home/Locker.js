import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import LockerBody from './LockerBody'

export const styles = StyleSheet.create({
  lockerTitle: {
    color: 'white',
    fontFamily: 'BoonJot-Regular',
    fontSize: 35,
    alignSelf: 'center',
    flex: 1,
    marginBottom: 30
  },
  lockerBody: {
    flex: 4,
    flexDirection: 'row'
  },
  lockerImage: {
    flex: 1,
    height: 190,
    marginRight: 12
  },
  lockerButton: {
    borderRadius: 10,
    backgroundColor: '#366d9b'
  }
})

export const Locker = ({ style }) => (
  <View style={style}>
    <Text style={styles['lockerTitle']}>เกสรลำเจียก 9</Text>
    <LockerBody style={styles['lockerBody']} />
    <Button
      style={styles['lockerButton']}
      title='Change Password'
      onPress={() => null}
    />
  </View>
)

export default Locker
