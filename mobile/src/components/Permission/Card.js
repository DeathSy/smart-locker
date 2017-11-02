import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native'

const IMAGE_URL = 'http://apollo.kmutt.ac.th/kmuttstdpic/default.aspx?&stdcode='

export const styles = StyleSheet.create({
  container: {
    width: '48%',
    height: 250,
    backgroundColor: '#162f52',
    borderRadius: 12,
    marginBottom: 12,
    padding: 16,
    alignItems: 'center'
  },
  cardTitle: {
    color: 'white',
    fontFamily: 'BoonJot-Regular',
    fontSize: 26,
    margin: 5
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    margin: 5
  },
  cardContent: {
    color: 'white',
    fontFamily: 'BoonJot-Regular',
    fontSize: 28,
    margin: 5
  },
  exit: {
    position: 'absolute',
    left: 150,
    top: 10,
    width: 50,
    height: 50
  },
  exitText: {
    color: '#ccc',
    fontFamily: 'BoonJot-Regular',
    fontSize: 15
  }
})

export const Card = ({ detail, onRemove }) => (
  <View style={styles['container']}>
    <TouchableOpacity
      style={styles['exit']}
      onPress={() =>
        Alert.alert('Are you sure you want to remove this person?', '', [
          { text: 'cancel', onPress: () => null },
          { text: 'yes', onPress: () => onRemove(detail.studentId) }
        ])}
    >
      <Text style={styles['exitText']}>X</Text>
    </TouchableOpacity>
    <Text style={styles['cardTitle']}>{detail.name}</Text>
    <Image
      style={styles['cardImage']}
      source={{ uri: `${IMAGE_URL}${detail.studentId}` }}
    />
    <Text style={styles['cardContent']}>01:06:04</Text>
  </View>
)

export default Card
