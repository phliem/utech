import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import iconKey from '../../../asset/icon/icon_key.png';

import axios from 'axios';

export default class SectionGithub extends Component {

    constructor(props) {
        super(props);

        this.state = {
            apiUrl: props.apiUrl 
        };
    }

    componentDidMount() {
        const onSuccess = (resp) => {
            this.setState({
                stars: resp.data.stargazers_count,
                forks: resp.data.forks_count,
                watchers: resp.data.watchers_count,
            })
        };

        const onError = (error) => {
            console.error('Error api', error);
        };

        axios.get(this.state.apiUrl)
            .then(onSuccess)
            .catch(onError);
    }

    render() {
        if (!this.state) { 
            return [];
        }
        // console.log('this.state.githubData', this.state.githubData);

        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.sectionTitle}>Github Stats</Text>
                </View>
                <View style={styles.github}>
                    <View style={styles.githubBox}>
                        <Image source={iconKey} style={styles.githubIcon} />
                        <Text>{this.state.stars} stars</Text>
                    </View>
                    <View style={styles.githubBox}>
                        <Image source={iconKey} style={styles.githubIcon} />
                        <Text>{this.state.forks} forks</Text>
                    </View>
                    <View style={styles.githubBox}>
                        <Image source={iconKey} style={styles.githubIcon} />
                        <Text>
                            {this.state.watchers} watcher
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
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

