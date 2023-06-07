import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formHolder: {
        flex: 1,

        alignItems: "center",

        marginTop: 30,
    },

    formArea: {
        width: "80%",
        height: "auto",

        backgroundColor: "hsl(220, 25%, 90%)",

        padding: 30,

        borderRadius: 30,
    },

    input: {
        width: "100%",
        
        backgroundColor: "hsl(220, 10%, 85%)",

        padding: 10,
        marginBottom: 15,

        borderRadius: 50,
    },

    button: {
        width: "100%",
        height: 60,
        
        backgroundColor: "hsl(260, 66%, 75%)",

        alignItems: "center",
        justifyContent: "center",

        padding: 10,
        marginTop: 15,

        borderRadius: 50,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "hsl(220, 10%, 90%)",
    },

    outputArea: {
        width: "80%",
        height: "auto",

        backgroundColor: "hsl(220, 25%, 90%)",

        padding: 30,
        marginTop: 30,

        borderRadius: 30,
    },
});

export default styles;