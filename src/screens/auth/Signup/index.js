import { View } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import { styles } from "./styles";

const Signup = () => {
    return (
        <View style={styles.container}>
            <AuthHeader title="Sing Up"/>
        </View>
    )
}

export default Signup