import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  descriptionText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'BoonJot-Regular'
  },
  dateText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'BoonJot-Regular'
  },
  timeText: {
    color: 'white',
    fontSize: 41,
    fontFamily: 'BoonJot-Regular'
  }
})

export const LockerContent = ({ style }) => (
  <View style={style}>
    <Text style={styles['descriptionText']}>เปิดใช้งานครั้งล่าสุด</Text>
    <Text style={styles['dateText']}>20-02-2017</Text>
    <Text style={styles['timeText']}>15:45</Text>
    <Text style={styles['descriptionText']}>by 58130500042</Text>
  </View>
)

export default LockerContent
