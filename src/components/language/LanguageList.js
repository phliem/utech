import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import LanguageRow from './LanguageRow.js';

export default LanguageList = ({ langData, navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={langData}
                renderItem={({ item }) => <LanguageRow lang={item} navigation={navigation} />}
                keyExtractor={(item) => `${item.id}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});
