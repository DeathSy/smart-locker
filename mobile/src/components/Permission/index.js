import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import ActionButton from 'react-native-action-button'

import App from '../App'
import Card from './Card'

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
  cardsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingBottom: 15
  },
  addButton: {
    position: 'absolute',
    bottom: 0
  },
  addIcon: {
    width: 60,
    height: 60
  }
})

const mockData = [
  { name: 'Jerrylee', studentId: '59130500123', until: '9:23 PM' },
  { name: 'Stefa', studentId: '57130500024', until: '3:30 PM' },
  { name: 'Eric', studentId: '6013050064', until: '7:09 PM' },
  { name: 'Jud', studentId: '58130500040', until: '9:48 PM' },
  { name: 'Saw', studentId: '56130500017', until: '9:14 PM' }
]

export const Index = () => (
  <ScrollView style={styles['container']}>
    <Text style={styles['titleText']}>Permission</Text>
    <View style={styles['cardsContainer']}>{renderCards(mockData)}</View>
    <ActionButton
      buttonColor='red'
      useNativeFeedBack={false}
      offsetY={320}
      onPress={() => null}
    />
  </ScrollView>
)

export const renderCards = datas =>
  datas.map((data, index) => <Card key={index} detail={data} />)

export default App(Index)
