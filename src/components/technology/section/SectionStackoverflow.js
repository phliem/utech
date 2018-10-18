import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import iconKey from '../../../asset/icon/icon_key.png';

// import axios from 'axios';

export default class SectionStackoverflow extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // const onSuccess = (response) => {
        //     console.log('response', response);
        // };

        // const onError = (error) => {
        //     console.log('error', error);
        // };

        // axios.get('../../data/technology/.js')
        //     .then(onSuccess)
        //     .catch(onError);

        this.setState(
            { 
                question: '103'
            }
        );

    }

    render() {
        if (!this.state || !this.state.question) {
            return [];
        }
        // console.log('this.state.githubData', this.state.githubData);

        return (
            <View>
                <View>
                    <Text style={styles.sectionTitle}>Stackoverflow Stats</Text>
                </View>
                <View style={styles.github}>
                    <View style={styles.githubBox}>
                        <Image source={iconKey} style={styles.githubIcon} />
                        <Text>{this.state.question} questions</Text>
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    github: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    githubBox: {
        width: '32%',
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 3,
        padding: 5,
        minHeight: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    githubIcon: {
        width: 20,
        height: 20,
    },
});

