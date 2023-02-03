import { StyleSheet } from "react-native"
import { colors } from "../../utils/colors"

export const styles = StyleSheet.create({
    container: {
        // margin: 24,
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 54,
        marginVertical: 20
    },

    text: {
        color: colors.blue,
        fontWeight: '500'
    },

    line: {
        backgroundColor: colors.lightgrey,
        height: 1,
        flex: 1,
        marginVertical: 8
    }

})
