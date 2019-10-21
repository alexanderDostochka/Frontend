import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import variables from '../../constants/style-variables';

const Content = props => {
    const { children, type, margin, spaceEvenly } = props;
    
    const contentStyle = [
        {
            marginTop: margin[0],
            marginBottom: margin[1],
            marginLeft: margin[2],
            marginRight: margin[3]
        },
        {
            paddingLeft: variables.content[type],
            paddingRight: variables.content[type],
        },
        spaceEvenly && {
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center'
        }
    ];

    return (
        <View style={ contentStyle }>
            { children }
        </View>
    );
}

Content.propTypes = {
    type: PropTypes.string,
    margin: PropTypes.array,
    spaceEvenly: PropTypes.bool
}

Content.defaultProps = {
    type: "",
    margin: [],
    spaceEvenly: false
}

export default Content;