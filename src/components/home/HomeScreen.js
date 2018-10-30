import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import ImageSource from '../../asset/design/dev_room.png';

export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.img} source={ImageSource}></Image>
                <Text style={styles.title}>UTech</Text>
                <Text style={styles.subtitle}>Learn about techstack</Text>
                <TouchableOpacity
                    style={styles.cta}
                    onPress={() => this.props.navigation.navigate('TabScreen')}
                >
                    <Text style={styles.ctaText}>Let's start</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBE7E4',
        alignItems: 'center',
    },
    img: {
        marginTop: 30,
        marginBottom: 30,
        width: '100%',
        height: '60%',
    },
    title: {
        fontSize: 28,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 15,
        color: '#797986'
    },
    cta: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#40bf80',
        borderRadius: 20,
    },
    ctaText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
});
