import React, { useState } from "react";
import { View, Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import { styles } from "./styles";

const Signup = () => {
    const [checked, setChecked] = useState(false)
    
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up"/>
            <Input label="Name" placeholder='Silver Maarika'/>
            <Input label="Email" placeholder='sm@gmail.com'/>
            <Input isPassword label="Password" placeholder='******'/>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>
        </View>
    )
}

export default Signup