import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { colorGaztaroaDark } from '../common/common';

export const ActivityIndicator = () => {
    return (
        <View style={styles.indicatorView}>
            <ActivityIndicator size='large' color={colorGaztaroaDark} />
            <Text style={styles.indicatorText}>En proceso . . .</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    indicatorView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    indicatorText: {
        color: colorGaztaroaDark,
        fontSize: 14,
        fontWeight: 'bold'
    }
});