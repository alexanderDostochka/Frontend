import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { Image } from 'react-native';
import variables from './constants/style-variables';

// screens
import Doc from './screens/Doc';

const navigation = createStackNavigator({
    Doc
}, {
    defaultNavigationOptions: {
        headerStyle: {
            height: 60,
            elevation: 0,
            borderBottomWidth: 0.3,
            borderColor: variables.colors.silver
        },
        headerBackImage: <Image />,
        headerBackTitle: null,
        headerLeftContainerStyle: {
            paddingLeft: variables.content.large
        },
        headerRightContainerStyle: {
            justifyContent: 'flex-end',
            width: '100%',
            paddingLeft: variables.content.large,
            paddingRight: variables.content.large
        },
    }
});

export default createAppContainer(navigation);