import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';

import LanguageList from './LanguageList.js';
import langConstant from '../../data/LanguageConstant.js';

export default class LanguageTab extends PureComponent {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // TODO Load Language from API 
    }

    render() {
        return (
            <View style={styles.tabWrap}>
                <LanguageList langData={langConstant} navigation={this.props.navigation}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    tabWrap: {
        flex: 1,
        backgroundColor: '#EBE7E4',
        padding: 20,
        paddingRight: 0,
    }
});


