import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login'
    };

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <Text>Login</Text>
                <View>
                    <TextInput
                        style={styles.formInput}
                        placeholder="username"
                        onChangeText={(username) => this.setState({ username })}
                        value={this.state.username}
                    />
                    <TextInput
                        style={styles.formInput}
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        secureTextEntry
                    />
                    <View>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('TabScreen')}
                        >
                            <Text>Go to TabScreen</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    formInput: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 10,
    }
});
