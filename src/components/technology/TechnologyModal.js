import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Button, ImageBackground, TouchableHighlight, Image } from 'react-native';

import TechnologyListConstant from '../../data/TechnologyListConstant.js';
import TechnologyList from './TechnologyList.js';

import BackgroundImage from '../../asset/design/bg_books.jpg';
import IconCross from '../../asset/icon/icon_cross.png';

export default class TechnologyModal extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const categoryName = this.props.navigation.getParam('categoryName', '');

        return (
            <ImageBackground source={BackgroundImage} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
                            <Image
                                style={styles.close}
                                source={IconCross}
                            />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.title}>
                            {categoryName}
                        </Text>
                    </View>
                    <View style={styles.footer}>
                        <TechnologyList technologiesData={TechnologyListConstant} navigation={this.props.navigation} />
                    </View>
                </View>
            </ImageBackground>
            
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    header: {
        flexGrow: 2,
        width: '100%',
        alignItems: 'flex-end',
        padding: 10,
    },
    close: {
        tintColor: 'black',
        width: 30,
        height: 30,
    },
    body: {
        flex: 1,
        flexGrow: 4,
        width: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(256, 256, 256, 0.95)',
        borderRadius: 50,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    footer: {
        flexGrow: 6,
        width: '100%',
        alignItems: 'center',
        paddingTop: 20,
    },
});
