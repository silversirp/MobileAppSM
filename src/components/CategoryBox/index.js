import React  from "react";
import { Pressable, Image, Text, View } from "react-native";
import { categories } from "../../data/categories";
import { colors } from "../../utils/colors";
import { styles } from "./styles";

const CategoryBox = ({title, image, onPress, isSelected}) => {
    return (
         <Pressable onPress={onPress} style={styles.container}>
            <View style={[styles.imageContainer, isSelected ? {backgroundColor: colors.black} : {}]}>
                <Image style={styles.image} source={{uri: image}}/>
            </View>
            <Text style={[styles.title, isSelected ? {color: colors.blue, fontWeight: '500'} : {}]}>{title}</Text>   
        </Pressable> 
    )
}

export default React.memo(CategoryBox)