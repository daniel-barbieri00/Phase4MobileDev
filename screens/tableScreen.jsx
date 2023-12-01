import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomButton from "../utilities/customButton";

const ingredientData = [
    { name: 'Chocolate', weight: '200g', volume: '1 cup' },
    { name: 'Water', weight: '244g', volume: '1 cup' },
    { name: 'Flour', weight: '120g', volume: '1 cup' },
    { name: 'Sugar', weight: '150g', volume: '1 cup' },
    { name: 'Baking Soda', weight: '5g', volume: '1 teaspoon' },
    { name: 'Baking Powder', weight: '7g', volume: '1 teaspoon' },
    { name: 'Brown Sugar', weight: '180g', volume: '1 cup' },
    { name: 'White Chocolate', weight: '180g', volume: '1 cup' },
    { name: 'Egg Whites', weight: '100g', volume: '2 large egg whites' },
    { name: 'Egg Yolks', weight: '120g', volume: '2 large egg yolks' },
    { name: 'White Vinegar', weight: '254g', volume: '1 cup' },
    { name: 'Malt Vinegar', weight: '239g', volume: '1 cup' },
    { name: 'Vegetable Oil', weight: '254g', volume: '1 cup' },
    { name: 'Coconut Oil', weight: '200g', volume: '1 cup' },
    { name: 'Olive Oil', weight: '227', volume: '1 cup' }
    // Add more ingredients as needed
];

export default function TableScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 40, color: '#306ea1' }}>Weight Conversion Table</Text>
            <View style={styles.tableContainer}>
                <ScrollView style={styles.table}>
                    {ingredientData.map((ingredient, index) => (
                        <View style={styles.tableRow} key={index}>
                            <Text style={styles.Cell}>{ingredient.name}</Text>
                            <Text style={styles.Cell}>{ingredient.weight}</Text>
                            <Text style={styles.Cell}>{ingredient.volume}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton title="🧮" onPress={() => navigation.push('WeightCalculator')} />
                <View style={styles.buttonSpacer} />
                <CustomButton title="🏠" onPress={() => navigation.navigate('Home')} />
                <View style={styles.buttonSpacer} />
                <CustomButton title="⚖️" onPress={() => navigation.navigate('Tables')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        padding: 20,
        paddingBottom: 150
    },

    title: {
        fontSize: 30,
        marginBottom: 20,
        marginTop: 30,
        fontWeight: 'bold',
        color: '#306ea1'
    },

    answer: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#306ea1'
    },

    TitleButton: {
        padding: 25,
        margin: 15,
        backgroundColor: '#57a5bd',
        borderRadius: 10
    },

    titleButtonText: {
        fontSize: 28,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3
    },

    button: {
        padding: 15,
        borderRadius: 5
    },

    calculateButton: {
        padding: 20,
        borderRadius: 5,
        backgroundColor: '#57a5bd',
        margin: 10,
        height: 80,
        width: 275,
        justifyContent: 'center',
        alignItems: 'center'
    },

    calculateButtonText: {
        fontSize: 26,
        fontWeight: 'bold'
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '120%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#57a5bd',
        borderColor: 'darkgrey',
        paddingLeft: 30,
        paddingRight: 30,
        borderColor: 'darkgrey',
        borderStyle: 'solid'
    },

    buttonSpacer: {
        height: 10,
    },

    buttonText: {
        fontSize: 45,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3
    },

    textInput: {
        width: 300,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
        backgroundColor: 'white'
    },

    tableContainer: {
        width: '120%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    table: {
        width: '90%',
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },

    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },

    Cell: {
        flex: 1,
        display: 'flex',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#306ea1'
    },
}
);