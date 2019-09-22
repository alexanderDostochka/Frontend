import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Image from '../Image';
import Text from '../Text';
import variables from '../../constants/style-variables';

const Category = React.memo(({ title, type }) => {

    return (
        <View style={ styles.block }>
            <View style={ styles.content }>
                <Image style={ styles.image } name={ type } />
                <Text size="body"> { title } </Text>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    block: {
        width: 120
    },
    content: {
        alignItems: 'center',
        padding: 12,
        borderRadius: 6,
        backgroundColor: variables.backgrounds.silver
    },
    image: {
        width: 45,
        height: 45,
        marginBottom: 5
    }
});

Category.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string
}

Category.defaultProps = {
    title: "",
    type: ""
}

export default Category;