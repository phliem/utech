import React, { PureComponent, Fragment } from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight, Image } from 'react-native';

export default class Category extends PureComponent {

    constructor(props) { 
        super(props);

        let { width } = Dimensions.get('window');
        this.boxSize = width * 0.32;
    }

    render() {
        return (
            <TouchableHighlight
                style={[styles.box, { width: this.boxSize, height: this.boxSize }]}
                onPress={() => this.props.navigation.navigate('TechnologyModal', { categoryName: this.props.category.name })}
            >
                <Fragment>
                    {this.props.category.icon &&
                        <Image style={styles.icon} source={this.props.category.icon} />
                    }
                    <Text style={styles.text}>
                        {this.props.category.name}
                    </Text>
                </Fragment>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#339966',
        marginRight: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        tintColor: 'white',
        width: 45,
        height: 45,
        marginBottom: 10
    },
    text: {
        color: 'white',
    }
});
