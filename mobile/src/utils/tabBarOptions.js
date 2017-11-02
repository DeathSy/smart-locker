import { inactiveBackgroundColor } from '../statics/core'

export default function tabBarOptions (platform) {
  if (platform === 'android') {
    return {
      style: {
        backgroundColor: inactiveBackgroundColor
      },
      showIcon: true,
      showLabel: false
    }
  }

  return {}
}
