import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions } from 'react-native';
import Image from '../Image';
import Text from '../Text';
import variables from '../../constants/style-variables';

const Category = React.memo(({ title, image, sort }) => {
    const { width } = Dimensions.get('window');
    const itemWidth = (width - 50) / 3;

    return (
        <View style={ [sort ? styles.block : { minWidth: itemWidth, maxWidth: itemWidth }] }>
            <View style={ [sort && { flexDirection: 'row' },{alignItems: 'center'}, {...styles.content}] }>
                <Image style={ styles.image } path={ image } />
                <Text size="body"> { title } </Text>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    block: {
        minWidth: '100%',
        minWidth: '100%',
    },
    content: {
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
    image: PropTypes.string,
    sort: PropTypes.bool
}

Category.defaultProps = {
    title: "",
    image: "",
    sort: false
}

export default Category;