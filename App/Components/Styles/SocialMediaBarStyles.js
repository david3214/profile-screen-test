import { StyleSheet } from 'react-native'
import { Fonts, Colors, ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    bubblesContainer: {
        ...ApplicationStyles.groupContainer,
        justifyContent: "center"
    },
    roundButton: {
        width: Metrics.icons.large + 2, //Spacing for the icon to not be cut off
        height: Metrics.icons.large + 2,
        backgroundColor: Colors.snow
    },
})