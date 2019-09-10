import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { Image } from 'react-native';

// screens
import Main from './screens/Main';

const navigation = createStackNavigator({
    Main
}, {
    defaultNavigationOptions: {
        headerStyle: {},
        headerBackImage: <Image />,
        headerBackTitle: null,
        headerLeftContainerStyle: {},
        headerRightContainerStyle: {},
    }
});

export default createAppContainer(navigation);