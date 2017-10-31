import { TabNavigator } from 'react-navigation'
import { Platform } from 'react-native'

import tabBarOptions from '../utils/tabBarOptions'

import Home from './Home'
import Permission from './Permission'
import Unlock from './Unlock'
import Notification from './Notification'
import Others from './Others'

const Index = TabNavigator(
  {
    Home: { screen: Home },
    Permission: { screen: Permission },
    Unlock: { screen: Unlock },
    Notification: { screen: Notification },
    Others: { screen: Others }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: tabBarOptions(Platform.OS)
  }
)

export default Index
