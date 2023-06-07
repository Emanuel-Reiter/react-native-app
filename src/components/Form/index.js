import react from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./style";

export default function Form() {

    const [opNumber1, setOpNumber1] = useState(null);
    const [opNumber2, setOpNumber2] = useState(null);
    const [opNumber3, setOpNumber3] = useState(null);

    const [alertMessage, setAlertMessage] = useState(null);
    const [resultMessage, setResultMessage] = useState(null); 

    const [buttonText, setButtonText] = useState("Calcular");

    const [outpuArea, setOutputArea] = useState("display: none");
    
    function CalculateOutput(){
        if(parseFloat(opNumber1) != null && parseFloat(opNumber2) != null && parseFloat(opNumber3) != null) {
            setOutputArea(styles.outputArea);
            
            const resultCubic = parseFloat((opNumber1 * (opNumber1 * opNumber1)).toFixed(2));
            const resultSum = parseFloat(resultCubic + opNumber1);
            const result = parseFloat((resultSum / opNumber3).toFixed(2));

            setAlertMessage(null);
            setResultMessage("O cubo de " + opNumber1 + " é: " + resultCubic + ", que somado com " + opNumber2 + " é igual a: " + resultSum + ", esse valor divido por " + opNumber3 + " é igual a: " + result);
            
            setOpNumber1(null);
            setOpNumber2(null);
            setOpNumber3(null);
            
            setButtonText("Calcular outro valor")
        }
        else {
            setOutputArea(styles.outputArea);
            setResultMessage(null);
            setAlertMessage("Preencha corretamente todos os campos.")
        }
    }

    return(
        <View style={styles.formHolder}>
            <View style={styles.formArea}>
                <Text>Número para calcular o cubo:</Text>
                <TextInput style={styles.input} placeholder="Ex. 8.7" onChange={setOpNumber1} value={opNumber1} keyboardType="default"></TextInput>
                
                <Text>Número para somar:</Text>
                <TextInput style={styles.input} placeholder="Ex. 132" onChange={setOpNumber2} value={opNumber2} keyboardType="default"></TextInput>

                
                <Text>Número para dividir:</Text>
                <TextInput style={styles.input} placeholder="Ex. 5" onChange={setOpNumber3} value={opNumber3}  keyboardType="default"></TextInput>


                <TouchableOpacity style={styles.button} onPress={() => CalculateOutput()}>
                    <Text style={styles.buttonText}>{buttonText}</Text>
                </TouchableOpacity>
            </View>

            <View style={outpuArea}>
                <Text>{alertMessage}</Text>
                <Text>{resultMessage}</Text>
            </View>
        </View>
    );
}