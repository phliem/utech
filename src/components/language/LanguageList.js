import React, { PureComponent } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import LanguageRow from './LanguageRow.js';

export default class LanguageList extends PureComponent {

    constructor(props) { 
        super(props);
    }

    render() { 
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.langData}
                    renderItem={({ item }) => <LanguageRow lang={item} navigation={this.props.navigation} />}
                    keyExtractor={(item) => `${item.id}`}
                />
            </View>
        )
    }
}; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});
