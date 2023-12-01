"use client";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import UnitButtons from "../components/unitButtons";
import CustomButton from "../utilities/customButton";

export default function WeightCalculatorScreen({ navigation }) {
    const [startUnit, setStartUnit] = useState("");
    const [endUnit, setEndUnit] = useState("");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(null);

    //create lists for buttons
    const startUnits = ["Grams", "Ounces", "Pounds"];
    const endUnits = ["Grams", "Ounces", "Pounds"];

    const convertUnits = () => {
        let convertedResult;

        console.log("startUnit:", startUnit);
        console.log("endUnit:", endUnit);
        console.log("amount:", amount);

        if (startUnit === "Grams" && endUnit === "Ounces") {
            // Conversion logic: 1 gram = 0.03527396 ounces
            convertedResult = parseFloat(amount) / 28.35;

        } else if (startUnit === "Grams" && endUnit === "Pounds") {
            // Conversion logic: 1 gram = 0.00220462 pounds
            convertedResult = parseFloat(amount) / 453.6;

        } else if (startUnit === "Ounces" && endUnit === "Grams") {
            // Reverse conversion logic
            convertedResult = parseFloat(amount) * 28.35;

        } else if (startUnit === "Ounces" && endUnit === "Pounds") {
            // Correction: 1 ounce = 1/16 pound
            convertedResult = parseFloat(amount) / 16;

        } else if (startUnit === "Pounds" && endUnit === "Grams") {
            // Conversion logic: 1 pound = 453.592 grams
            convertedResult = parseFloat(amount) * 453.592;

        } else if (startUnit === "Pounds" && endUnit === "Ounces") {
            // Conversion logic: 1 pound = 16 ounces
            convertedResult = parseFloat(amount) * 16;
        }

        if (convertedResult !== undefined) {
            setResult(convertedResult.toFixed(2)); // Round to 2 decimal places
        } else {
            setResult(null); // Reset result if conversion not supported
        }
    };

    return (


        <View style={styles.container}>
            <Text style={styles.title}>Weight Calculator</Text>

            <Text style={styles.label}>Starting Quantity:</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Enter Amount Here"
                keyboardType="decimal-pad"
                onChangeText={(text) => setAmount(text)}
                value={amount}
            />
            <UnitButtons units={startUnits} selectedUnit={startUnit} onValueChange={setStartUnit} />


            <Text style={styles.label}>Convert to:</Text>


            <UnitButtons units={endUnits} selectedUnit={endUnit} onValueChange={setEndUnit} />


            <TouchableOpacity style={styles.calculateButton} onPress={convertUnits}>
                <Text style={styles.calculateButtonText}>Calculate</Text>
            </TouchableOpacity>

            <Text style={styles.answer}>Result:</Text>
            <Text style={styles.answer}>{result} {endUnit}</Text>

            <TouchableOpacity
                style={styles.unitCategoryButton}
                onPress={() => {
                    navigation.navigate('VolumeCalculator');
                }}
            >
                <Text style={styles.unitCategoryButtonText}>Go to Volume Calculator</Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                <CustomButton title="🧮" onPress={() => navigation.push('WeightCalculator')} />
                <CustomButton title="🏠" onPress={() => navigation.navigate('Home')} />
                <CustomButton title="⚖️" onPress={() => navigation.navigate('Tables')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
        backgroundColor: 'lightblue',
        padding: 20,
        marginTop: -70
    },

    label: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#306ea1',
        fontWeight: 'bold'
    },

    title: {
        fontSize: 40,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#306ea1',
    },

    startingQuantityLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#306ea1',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },

    answer: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#306ea1',
    },

    calculateButton: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#57a5bd',
        margin: 10,
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    calculateButtonText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '150%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#57a5bd',
        paddingHorizontal: 90,
        borderColor: 'darkgrey',
        borderStyle: 'solid'
    },

    buttonSpacer: {
        height: 10,
    },

    textInput: {
        width: '85%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },

    unitCategoryButton: {
        backgroundColor: '#57a5bd',
        padding: 25,
        marginTop: 30,
        borderRadius: 10
    },

    unitCategoryButtonText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    }

});

