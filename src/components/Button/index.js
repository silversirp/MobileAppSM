import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Button = ({title, onPress, style}) => {
    const handlePress = () => {
        console.log('Button has been clicked')
    }
    return (
        /*<Pressable hitSlop={20} onPress={handlePress} style={styles.container}>
            <Text>{title}</Text>
        </Pressable>*/
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button