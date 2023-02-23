import React  from "react";
import { Pressable, Image, Text, View } from "react-native";
import { styles } from "./styles";

const ListItem = ({title, subtitle}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <Image style={styles.arrow} source={require('../../assets/arrow.png')} />
        </View>
    )
}

export default React.memo(ListItem)