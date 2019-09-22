import React from 'react';
import { createAppContainer, View } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Image from './components/Image';
import variables from './constants/style-variables';

// screens
import Categories from './screens/Categories';
import Docs from './screens/Docs';

const navigation = createStackNavigator({
    Categories,
    Docs
}, {
    defaultNavigationOptions: {
        headerStyle: {
            height: 60,
            elevation: 0,
            borderBottomWidth: 0.3,
            borderColor: variables.colors.silver
        },
        headerBackImage: <Image style={{ width: 20, height: 20 }} name="back" />,
        headerBackTitle: null,
        headerRightContainerStyle: {
            justifyContent: 'flex-end',
            width: '100%',
            paddingLeft: variables.content.large,
            paddingRight: variables.content.large
        },
    }
});

export default createAppContainer(navigation);