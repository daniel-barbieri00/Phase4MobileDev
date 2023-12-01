"use client";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import UnitButtons from "../components/unitButtons";
import CustomButton from "../utilities/customButton";

export default function VolumeCalculatorScreen({ navigation }) {
    const [startUnit, setStartUnit] = useState("");
    const [endUnit, setEndUnit] = useState("");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(null);

    //create lists for buttons
    const startUnits = ["Cups", "Teaspoons", "Liters"];
    const endUnits = ["Cups", "Teaspoons", "Liters"];

    const convertUnits = () => {
        console.log("Calculating....")

        let convertedResult;

        console.log("startUnit:", startUnit);
        console.log("endUnit:", endUnit);
        console.log("amount:", amount);

        if (startUnit === "Cups" && endUnit === "Teaspoons") {
            // Conversion logic: 1 cup = 48 teaspoons
            convertedResult = parseFloat(amount) * 48;

        } else if (startUnit === "Cups" && endUnit === "Liters") {
            // Conversion logic: 1 cup = 0.236588 liters
            convertedResult = parseFloat(amount) * 0.236588;

        } else if (startUnit === "Teaspoons" && endUnit === "Cups") {
            // Reverse conversion logic
            convertedResult = parseFloat(amount) / 48;

        } else if (startUnit === "Teaspoons" && endUnit === "Liters") {
            // Conversion logic: 1 teaspoon = 0.00492892 liters
            convertedResult = parseFloat(amount) * 0.00492892;

        } else if (startUnit === "Liters" && endUnit === "Cups") {
            // Conversion logic: 1 liter = 4.22675 cups
            convertedResult = parseFloat(amount) * 4.22675;

        } else if (startUnit === "Liters" && endUnit === "Teaspoons") {
            // Conversion logic: 1 liter = 202.884 teaspoons
            convertedResult = parseFloat(amount) * 202.884;
        }

        if (convertedResult !== undefined) {
            setResult(convertedResult.toFixed(2)); // Round to 2 decimal places
        } else {
            setResult(null); // Reset result if conversion not supported
        }
    };


    return (


        <View style={styles.container}>
            <Text style={styles.title}>Volume Calculator</Text>

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
                    navigation.navigate('WeightCalculator');
                }}
            >
                <Text style={styles.unitCategoryButtonText}>Go to Weight Calculator</Text>
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