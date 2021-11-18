import {StyleSheet} from 'react-native'
import {Colors, Metrics, Fonts} from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.cloud,
    justifyContent: 'center'
  },
  title: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.h2,
    textAlign: 'center'
  }
})
