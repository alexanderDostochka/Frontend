import React from 'react';
import { View } from 'react-native';
import styles from './style';

const Tag = React.memo(({ children }) => {
    return (
        <View style={ styles.tag }>
            { children }
        </View>
    );
});

export default Tag;