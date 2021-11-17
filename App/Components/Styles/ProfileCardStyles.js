import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: Metrics.baseMargin
    },
    profilePicture: {
        width: Metrics.images.logo,
        height: Metrics.images.logo,
        borderRadius: Metrics.images.logo / 2
    },
    badgeStyle: {
        position: "absolute",
        bottom: 55,
        right: 105,
        borderWidth: 3,
        borderRadius: Metrics.images.large,
        borderColor: 'white'
    },
    nameStyle: {
        fontFamily: Fonts.type.base,
        fontSize: Fonts.size.h5,
        fontWeight: '500'
    },
    jobTitle: {
        fontFamily: Fonts.type.base,
        fontSize: Fonts.size.h6,
        color: Colors.faded,
        fontWeight: '600'
    }
})