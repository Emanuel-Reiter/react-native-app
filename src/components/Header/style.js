import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        height: 100, 
        width: "100%",

        justifyContent: "flex-end",

        padding: 30,
        
        backgroundColor: "hsl(220, 25%, 90%)",

        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },

    title: {
        fontSize: 16,
    },
});

export default styles;