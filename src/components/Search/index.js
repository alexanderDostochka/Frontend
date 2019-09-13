import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { View, Animated, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import variables from '../../constants/style-variables';
import { lang } from '../../constants/mock';
import styles from './style';

const Search = React.memo(({ speedAnimation, placeholder }) => {
    const initialWidth = 9;
    const iconSize = 12;

    const [fadeAnim] = useState(new Animated.Value(initialWidth));

    const onFocus = (focus = false) => {
        Animated.timing(fadeAnim, {
                toValue: focus ? 100 : initialWidth,
                duration: speedAnimation * 1000,
            },
        ).start();
    }

    const interpolateBar = fadeAnim.interpolate({inputRange:[0,100],outputRange:['0%','100%']});
    const styleBar = [{ width: interpolateBar }];
    
    return (
        <Animated.View style={ styleBar } >
            <View style={ styles.search }>
                <TextInput 
                    placeholder={ placeholder } 
                    style={ styles.input } 
                    onFocus={() => onFocus(true)} 
                    onBlur={() => onFocus()} />
                <Icon style={ styles.icon } name="search" size={ iconSize } color={ variables.colors.darkgrey } />
            </View>
        </Animated.View>
    );
});

Search.propTypes = {
    speedAnimation: PropTypes.number,
    placeholder: PropTypes.string
}

Search.defaultProps = {
    speedAnimation: 1,
    placeholder: lang.search
}

export default Search;