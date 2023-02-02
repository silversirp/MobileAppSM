import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 8,
        width: '100%'
        // height: 60,
        // position: "absolute",
        // right: 36,
        //top: '74.88%',
        // bottom: -70
    },

    title: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }
})