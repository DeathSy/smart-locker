import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native'

import App from '../App'
import OtherCards from './OthersCard'
import LockerImage from '../../statics/icons/locker.png'

export const styles = StyleSheet.create({
  container: {
    padding: 18,
    flex: 1
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'BoonJot-Regular',
    marginBottom: 15
  },
  myLocker: {
    flex: 1,
    backgroundColor: '#162f52',
    borderRadius: 12,
    padding: 18,
    paddingTop: 5
  },
  myLockerTitle: {
    color: 'white',
    fontFamily: 'BoonJot-Regular',
    fontSize: 20,
    flex: 1
  },
  myLockerText: {
    color: 'white',
    fontFamily: 'BoonJot-Regular',
    fontSize: 25,
    flex: 1,
    alignSelf: 'center',
    paddingTop: 10
  },
  otherLocker: {
    flex: 2,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingBottom: 30
  },
  imageContainer: {
    flex: 2,
    alignSelf: 'center',
    width: 130
  }
})

export const Index = () => (
  <ScrollView style={styles['container']}>
    <Text style={styles['titleText']}>Unlock Locker</Text>
    <TouchableOpacity
      onPress={() => Alert.alert('Locker unlocked')}
      style={styles['myLocker']}
    >
      <Text style={styles['myLockerTitle']}>My Locker</Text>
      <Image style={styles['imageContainer']} source={LockerImage} />
      <Text style={styles['myLockerText']}>เกสรลำเจียก 9</Text>
    </TouchableOpacity>
    <View style={styles['otherLocker']}>
      <OtherCards />
      <OtherCards />
      <OtherCards />
    </View>
  </ScrollView>
)

export default App(Index)
