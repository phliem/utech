import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const GraphTab = () => (
    <View style={styles.container}>
        <Text>Hello test</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GraphTab;
