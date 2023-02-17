import { StyleSheet } from "react-native"
import { colors } from "../../utils/colors"

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 8,
        justifyContent: 'center'
    },

    image: {
        width: 32,
        height: 32
    },

    title: {
        color: colors.grey
    },

    imageContainer: {
        backgroundColor: colors.lightgrey,
        padding: 8,
        borderRadius: 8,
        marginBottom: 8
    }


})
