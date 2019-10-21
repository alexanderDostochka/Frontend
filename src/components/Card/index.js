import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import Content from '../Content';
import variables from '../../constants/style-variables';

const Card = React.memo(({ title, description }) => {
    return (
        <View style={ styles.card }>
            <Content>
                <Text size="h3" weight="400">
                    { title }
                </Text>
            </Content>
            <Content margin={[5]}>
                <Text color="grey" size="body" weight="200">
                    { description }
                </Text>
            </Content>
        </View>
    );
});

const styles = StyleSheet.create({
    card: {
        paddingTop: 12,
        paddingBottom: 12,
        borderBottomColor: variables.colors.silver,
        borderBottomWidth: 0.3
    }
});

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

Card.defultProps = {
    title: "",
    description: ""
}

export default Card;