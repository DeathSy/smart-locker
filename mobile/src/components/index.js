import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Platform, Image } from 'react-native'

import tabBarOptions from '../utils/tabBarOptions'

import Home from './Home'
import Permission from './Permission'
import Unlock from './Unlock'
import Notification from './Notification'
import Others from './Others'

import HomeIcon from '../statics/icons/home.png'
import PermissionIcon from '../statics/icons/users.png'
import UnlockIcon from '../statics/icons/key.png'
import NotiIcon from '../statics/icons/ring.png'
import OtherIcon from '../statics/icons/note.png'

export const navigationOptions = Icon => ({
  tabBarIcon: ({ tintColor }) => (
    <Image source={Icon} style={{ width: 24, height: 24, tintColor }} />
  )
})

const Index = TabNavigator(
  {
    Home: { screen: Home, navigationOptions: navigationOptions(HomeIcon) },
    Permission: {
      screen: Permission,
      navigationOptions: navigationOptions(PermissionIcon)
    },
    Unlock: {
      screen: Unlock,
      navigationOptions: navigationOptions(UnlockIcon)
    },
    Notification: {
      screen: Notification,
      navigationOptions: navigationOptions(NotiIcon)
    },
    Others: { screen: Others, navigationOptions: navigationOptions(OtherIcon) }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: tabBarOptions(Platform.OS)
  }
)

export default Index
