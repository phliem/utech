import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight, View, Image } from 'react-native';

export default TechnologyTile = ({ technologyData, navigation }) => {
    let { width } = Dimensions.get('window');
    let boxSize = width - 100 - 60; // - 2 * inset - 2 * margin

    return (
        <TouchableHighlight
            style={[styles.container, { width: boxSize, height: boxSize }]}
            onPress={() => navigation.navigate('TechnologyScreen', { itemId: technologyData.id })}
        >
            <View style={[styles.circle, { width: boxSize * 0.5, height: boxSize * 0.5 }]}>
                <Image source={technologyData.logo} />
                <Text style={styles.text}>
                    {technologyData.name}
                </Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 30,
        backgroundColor: 'rgba(256, 256, 256, 0.95)',
        borderRadius: 1000,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 500,
    },
    text: {
        fontSize: 24
    }
});
