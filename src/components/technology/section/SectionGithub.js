import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import IconStar from '../../../asset/icon/icon_star.png';
import IconFork from '../../../asset/icon/icon_fork.png';
import IconWatch from '../../../asset/icon/icon_watch.png';
import IconBug from '../../../asset/icon/icon_bug.png';

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
                openIssues: resp.data.open_issues_count,
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

        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.sectionTitle}>Github Stats</Text>
                </View>
                <View style={styles.github}>
                    <View style={styles.githubBox}>
                        <Image source={IconStar} style={styles.githubIcon} />
                        <Text>{this.state.stars} stars</Text>
                    </View>
                    <View style={styles.githubBox}>
                        <Image source={IconFork} style={styles.githubIcon} />
                        <Text>{this.state.forks} forks</Text>
                    </View>
                    <View style={styles.githubBox}>
                        <Image source={IconWatch} style={styles.githubIcon} />
                        <Text>
                            {this.state.watchers} watchers
                        </Text>
                    </View>
                    <View style={styles.githubBox}>
                        <Image source={IconBug} style={styles.githubIcon} />
                        <Text>
                            {this.state.openIssues} open issues
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    github: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    githubBox: {
        width: '47%',
        backgroundColor: 'white',
        borderRadius: 3,
        padding: 5,
        marginVertical: 10,
        alignItems: 'center',
    },
    githubIcon: {
        width: 20,
        height: 20,
    },
});

