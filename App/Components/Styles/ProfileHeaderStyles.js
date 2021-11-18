import { StyleSheet } from 'react-native'
import { Fonts, ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
    container: {
      ...ApplicationStyles.groupContainer,
      justifyContent: 'space-between',
      alignItems: 'center',
      height: Metrics.navBarHeight,
      paddingTop: Metrics.navBarHeight / 2
    },
    leftContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginLeft: Metrics.baseMargin
    },
    rightContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginRight: Metrics.baseMargin
    },
    title: {
      fontSize: Fonts.size.h5,
      fontFamily: Fonts.type.base,
      fontWeight: '400'
    },
    cornerImage: {
      width: Metrics.icons.medium,
      height: Metrics.icons.medium,
      marginLeft: Metrics.baseMargin
    },
    badge: {
      position: "absolute",
      bottom: 20,
      right: 40
    },
})