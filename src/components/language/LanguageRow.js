import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CategoryList from '../category/CategoryList.js';
import CategoryConstant from '../../data/CategoryConstant.js';

export default class LanguageRow extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.fontTitle}>
                        {this.props.lang.name}
                    </Text>
                    {this.props.lang.desc &&
                        <Text style={styles.fontDesc}>
                            {this.props.lang.desc}
                        </Text>
                    }
                </View>
                <View style={styles.categBox}>
                    <CategoryList categoriesData={CategoryConstant} navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 30,
    },
    fontTitle: {
        fontSize: 18,
        marginBottom: 8,
    },
    fontDesc: {
        fontSize: 14,
        marginBottom: 8,
        color: '#777777'
    },
    categBox: {
        flexDirection: 'row',
    }
});

