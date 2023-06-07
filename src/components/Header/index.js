
import react from "react";
import { View, Text } from "react-native";

import styles from "./style.js";

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>ReactApp</Text>
        </View>
    )
}