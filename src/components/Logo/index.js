import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import variables from '../../constants/style-variables';
import Image from '../Image';
import Text from '../Text';

const Logo = React.memo(({ title, image, padding }) => {  
    const logoStyle = [
        padding && { paddingLeft: variables.content.large },
        styles.logo
    ]; 

    return (
        <View style={ logoStyle }>
            <Image style={ styles.image } name={ image } />
            <Text> { title } </Text>
        </View>
    );
});

const styles = StyleSheet.create({
    logo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    image: {
        width: 25, 
        height: 25,
        marginRight: 8
    }
});

Logo.propTypes = {
    padding: PropTypes.bool,
    title: PropTypes.string,
    img: PropTypes.string,
}

Logo.defaultProps = {
    padding: true,
    title: "",
    img: "",
}


export default Logo;