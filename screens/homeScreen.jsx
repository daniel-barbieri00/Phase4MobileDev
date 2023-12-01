import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 60,
                marginBottom: 130,
                marginTop: 90,
                fontWeight: 'bold',
                color: '#306ea1'
            }}>BakeCalc</Text>
            <TouchableOpacity style={styles.TitleButton} onPress={() => navigation.navigate('WeightCalculator')}>
                <Text style={styles.titleButtonText}>Go to Calculator 🧮</Text>
            </TouchableOpacity>
            <View style={styles.buttonSpacer} />
            <TouchableOpacity style={styles.TitleButton} onPress={() => navigation.navigate("Tables")}>
                <Text style={styles.titleButtonText}>Go to Tables        ⚖️</Text>
            </TouchableOpacity>
        </View>
    );
};

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