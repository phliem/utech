import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import SectionGithub from './section/SectionGithub.js';
import SectionStackoverflow from './section/SectionStackoverflow.js';

// import axios from 'axios';
import TechnologyItemConstant from '../../data/TechnologyListConstant.js';

export default class TechnologyInfo extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.navigation.getParam('itemId', '01')
        }
    }

    componentDidMount() {
        // const onSuccess = (response) => {
        //     console.log('response', response);
        // };

        // const onError = (error) => {
        //     console.log('error', error);
        // };

        // axios.get('../../data/technology/ItemConstant01.js')
        //     .then(onSuccess)
        //     .catch(onError);

        const currentTechnology = TechnologyItemConstant[1];

        this.setState({
            ...currentTechnology,
            imageUrl: require('../../asset/logo/logo_reactjs.png')
        });

    }

    render() {
        const imageUrl = 

        console.log('this.state', this.state);

        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    {this.state.imageUrl &&
                        <View style={styles.logo}>
                            <Image source={this.state.imageUrl} style={styles.img} />
                        </View>
                    }
                    
                    <View>
                        <Text style={styles.title}>{this.state.name}</Text>
                        <Text style={styles.subTitle}>{this.state.author}</Text>
                        <Text>{this.state.url}</Text>
                    </View>
                </View>

                {this.state.githubUrl && 
                    <SectionGithub apiUrl={this.state.githubUrl} />
                }
                
                <SectionStackoverflow />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 20,
    },
    head: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'grey',
        marginRight: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 2,
    },
    subTitle: {
        fontSize: 16,
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    img: {
        width: '100%',
        height: '100%',
    },
});

