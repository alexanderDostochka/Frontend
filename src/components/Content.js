import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import variables from '../constants/style-variables';

const Content = props => {
    const { children, type } = props;
    
    const contentStyle = [
        {
            paddingLeft: variables.content[type],
            paddingRight: variables.content[type],
        }
    ];

    return (
        <View style={ contentStyle }>
            { children }
        </View>
    );
}

Content.propTypes = {
    type: PropTypes.string
}

Content.defaultProps = {
    type: "large"
}

export default Content;