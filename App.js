import React, { Component } from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

// Modals
import TechnologyModal from './src/components/technology/TechnologyModal';

// Screens
import HomeScreen from './src/components/home/HomeScreen';
import LoginScreen from './src/components/login/LoginScreen';
import TechnologyScreen from './src/components/technology/TechnologyScreen';

// Tabs
import LanguageTab from './src/components/language/LanguageTab';
import GraphTab from './src/components/graph/GraphTab';

// Create Tab Navigation
const TabNavRoutes = {
    'Language List': LanguageTab,
    'Graph View': GraphTab
};
const TabNavOptions = {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: () => {
            const { routeName } = navigation.state;

            let icon;
            switch (routeName) {
                case 'Language List':
                    icon = require('./src/asset/icon/icon_code.png');
                    break;
                case 'Graph View':
                    icon = require('./src/asset/icon/icon_graph.png');
                    break;
                default:
                    break;
            }

            if (icon) {
                return <Image source={ icon } style={{ width: 30, height: 30 }} />;
            }
            return null;
        }
    })
};
const TabNavigator = createBottomTabNavigator(TabNavRoutes, TabNavOptions);

// Create Screens Navigation
const MainNavRoutes = {
    HomeScreen: {
        screen: HomeScreen
    },
    LoginScreen: {
        screen: LoginScreen
    },
    TabScreen: {
        screen: TabNavigator,
        navigationOptions: () => ({
            title: 'Languages',
        }),
    },
    TechnologyScreen: {
        screen: TechnologyScreen
    }
};
const MainNavOptions = {
    initialRouteName: 'HomeScreen'
};
const MainNavigator = createStackNavigator(MainNavRoutes, MainNavOptions);


// Create Root and Modal Navigation
const RootNavRoutes = {
    Main: {
        screen: MainNavigator
    },
    TechnologyModal: {
        screen: TechnologyModal
    }
};
const RootNavOptions = {
    mode: 'modal',
    headerMode: 'none',
};
const RootNavigator = createStackNavigator(RootNavRoutes, RootNavOptions);

export default class App extends Component {
    render() {
        return <RootNavigator />;
    }
};
