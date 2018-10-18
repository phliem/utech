import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';

export default TechnologyTile = ({ technologyData, navigation }) => {
    let { width } = Dimensions.get('window');
    let boxSize = width * 0.4;

    return (
        <TouchableHighlight
            style={[styles.container, { width: boxSize, height: boxSize }]}
            onPress={() => navigation.navigate('TechnologyScreen', { itemId: technologyData.id })}
        >
            <Text>{technologyData.name}</Text>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'tomato',
        marginRight: 10,
        borderRadius: 4,
    }
});
