import React, { Component } from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';

export default Category = ({ category, navigation }) => {
    let { width } = Dimensions.get('window');
    let boxSize = width * 0.22;

    return (
        <TouchableHighlight
            style={[styles.container, { width: boxSize, height: boxSize }]}
            onPress={() => navigation.navigate('TechnologyModal', { categoryName: category.name })}
        >
            <Text>{category.name}</Text>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'olive',
        marginRight: 10,
        borderRadius: 4,
    }
});
