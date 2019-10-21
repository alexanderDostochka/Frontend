import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import variables from '../../constants/style-variables';

const Loader = React.memo(({ loader, children }) => {
    if(loader) {
        return (
            <View style={ styles.container }>
                <ActivityIndicator size={ 30 } color={ variables.colors.darkgrey } />
            </View>
        );
    } else {
        return children;
    }
});

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
});

Loader.propTypes = {
    loader: PropTypes.bool
}

Loader.defaultProps = {
    loader: false
}

export default Loader;