import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: Metrics.baseMargin
    },
    titleStyle: {
        fontFamily: Fonts.type.base,
        fontSize: Fonts.size.h5,
        fontWeight: '600',
        marginBottom: Metrics.baseMargin
    },
    bodyText: {
      fontFamily: Fonts.type.base,
      fontSize: Fonts.size.regular,
      color: Colors.faded,
      fontWeight: '600',
      marginBottom: Metrics.baseMargin
    },
    skillContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginBottom: Metrics.baseMargin
    },
    skills: {
      paddingVertical: Metrics.baseMargin,
      paddingHorizontal: Metrics.baseMargin,
      marginHorizontal: Metrics.smallMargin,
      marginVertical: Metrics.smallMargin,
      backgroundColor: '#f1f5ff',
      color: '#4d7cfe',
      fontFamily: Fonts.type.base,
      fontSize: Fonts.size.regular,
      fontWeight: '600'
    }
})