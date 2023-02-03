import { View } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { styles } from "./styles";

const Signup = () => {
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up"/>
            <Input label="Name" placeholder='Silver Maarika'/>
            <Input label="Email" placeholder='sm@gmail.com'/>
            <Input isPassword label="Password" placeholder='******'/>
        </View>
    )
}

export default Signup