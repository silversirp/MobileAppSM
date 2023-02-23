import React  from "react";
import { Pressable, Image, Text, View, TextInput } from "react-native";
import { styles } from "./styles";

const EditableBox= ({label, value, onChangeText, edaitable}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput editable={edaitable} value={value} onChangeText={onChangeText} style={styles.input} />
        </View>
    )
}

export default React.memo(EditableBox)