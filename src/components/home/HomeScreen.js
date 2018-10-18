import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        header: null,
    };

    // static navigationOptions = ({ navigation }) => {
    //   return {
    //       title: 'Home',
    //       headerRight: (
    //           <Button
    //               onPress={() => navigation.navigate('MyModal')}
    //               title="Info"
    //               color="#000"
    //           />
    //       ),
    //   }
    // };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>UTech</Text>
                <Text>Navigate through the techstack</Text>
                <Button
                    title="Go to Login"
                    onPress={() => this.props.navigation.navigate('LoginScreen')}
                />
            </View>
        );
    }
}
