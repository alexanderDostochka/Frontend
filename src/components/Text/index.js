import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import variables from '../../constants/style-variables';

const TextCustom = ({ children, color, size, weight }) => {
    const textStyle = [
        { color: variables.colors[color] },
        { 
            fontSize: variables.fontSizes[size],
            lineHeight: variables.lineHeight[size],
            fontWeight: weight
        }
    ];

    return (
        <Text style={ textStyle }>
            { children }
        </Text>
    );
}

TextCustom.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    weight: PropTypes.string
}

TextCustom.defaultProps = {
    color: "black",
    size: "body",
    weight: "400"
}


export default TextCustom;