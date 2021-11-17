import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
    container: {
        marginBottom: Metrics.baseMargin
    },
    titleStyle: {
      fontFamily: Fonts.type.base,
      fontSize: Fonts.size.h5,
      fontWeight: '600',
      marginBottom: Metrics.baseMargin
  },
  rowContainer: {
    flexDirection: "row",
    marginVertical: Metrics.baseMargin,
  },
  icons: {
    paddingTop: 3,
    color: Colors.faded,
    fontSize: Fonts.size.regular
  },
  dates: {
    marginHorizontal: Metrics.baseMargin,
    fontSize: Fonts.size.regular,
    fontWeight: "600",
    color: Colors.faded
  },
  details: {
    fontSize: Fonts.size.regular,
    fontWeight: "400"
  }
})