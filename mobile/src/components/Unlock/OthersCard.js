import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import LockerImage from '../../statics/icons/locker.png'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#162f52',
    width: '48%',
    height: 200,
    marginBottom: 15,
    borderRadius: 12,
    padding: 18,
    paddingTop: 5,
    paddingBottom: 5
  },
  lockerTitle: {
    color: 'white',
    fontFamily: 'BoonJot-Regular',
    fontSize: 20,
    flex: 1
  },
  lockerImage: {
    flex: 3,
    width: 85,
    alignSelf: 'center'
  },
  lockerContent: {
    flex: 1,
    fontSize: 20,
    fontFamily: 'BoonJot-Regular',
    alignSelf: 'center',
    color: 'white'
  }
})

export const OtherCards = () => (
  <View style={styles['container']}>
    <Text style={styles['lockerTitle']}>Koichi</Text>
    <Image style={styles['lockerImage']} source={LockerImage} />
    <Text style={styles['lockerContent']}>อลัว 4</Text>
  </View>
)

export default OtherCards
