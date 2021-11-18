import {StyleSheet} from 'react-native'
import {Colors, Metrics} from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.cloud
  },
  screenContainer: {
    marginBottom: Metrics.navBarHeight
  },  
  cardStyle: {
    margin: Metrics.smallMargin
  }
})
