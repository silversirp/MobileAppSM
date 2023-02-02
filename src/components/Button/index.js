import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const Button = ({title, onPress}) => {
    const handlePress = () => {
        console.log('Button has been clicked')
    }
    return (
        /*<Pressable hitSlop={20} onPress={handlePress} style={styles.container}>
            <Text>{title}</Text>
        </Pressable>*/
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button