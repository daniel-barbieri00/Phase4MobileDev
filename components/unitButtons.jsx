// Inside the UnitButtons component

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function UnitButtons({ units, selectedUnit, onValueChange }) {

    return (
        <View style={styles.buttonContainer}>
            {units.map((unit) => (
                <TouchableOpacity
                    key={unit}
                    style={[
                        styles.button,
                        selectedUnit === unit && styles.selectedButton, // Apply selected style
                    ]}
                    onPress={() => onValueChange(unit)}
                >
                    <Text style={styles.buttonText}>{unit}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    button: {
        flex: 1,
        backgroundColor: '#57a5bd',
        padding: 13,
        borderRadius: 10,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    selectedButton: {
        backgroundColor: '#306ea1', // Change the background color for the selected button
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
