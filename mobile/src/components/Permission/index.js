import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import App from '../App'
import Card from './Card'
import { removeAccount } from '../../ducks/account'
import { mapStateToProps, mapActionToProps } from '../../utils/helper'

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

export const Index = ({ account, removeAccount }) => (
  <ScrollView style={styles['container']}>
    <Text style={styles['titleText']}>Permission</Text>
    <View style={styles['cardsContainer']}>
      {renderCards(account.accounts, removeAccount)}
    </View>
  </ScrollView>
)

export const renderCards = (datas, removeAction) =>
  datas.map((data, index) => (
    <Card key={index} detail={data} onRemove={removeAction} />
  ))

export default connect(
  mapStateToProps(['account']),
  mapActionToProps({ removeAccount })
)(App(Index))
