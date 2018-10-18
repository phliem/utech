import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import TechnologyListConstant from '../../data/TechnologyListConstant.js';
import TechnologyList from './TechnologyList.js';

export default class TechnologyModal extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // loadData
    }


    render() {
        const categoryName = this.props.navigation.getParam('categoryName', '');

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Button
                        onPress={() => this.props.navigation.goBack()}
                        title="X"
                    />
                </View>
                <View style={styles.body}>
                    <Text>{categoryName}</Text>
                </View>
                <View style={styles.footer}>
                    <TechnologyList technologiesData={TechnologyListConstant} navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 20,
    },
    header: {
        flexGrow: 2,
        width: '100%',
        alignItems: 'flex-end',
    },
    body: {
        flexGrow: 2,
        width: '100%',
        alignItems: 'center',
    },
    footer: {
        flexGrow: 8,
        width: '100%',
        alignItems: 'center',
    },
});
