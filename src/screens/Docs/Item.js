import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Content from '../../components/Content';
import Card from '../../components/Card';

const Item = React.memo(({navigation, item}) => {
    const openDoc = (id, title, type) => {
        navigation.navigate('Doc', { id, title, type });
    };

    return (
        <Content type="large">
            <TouchableOpacity onPress={() => openDoc(item.id, item.title, item.type)} activeOpacity={0.8}>
                <Card title={ item.title } description={ item.description } />
            </TouchableOpacity>
        </Content>
    );
});

Item.propTypes = {
    navigation: PropTypes.object,
    item: PropTypes.object
};

Item.defaultProps = {
    navigation: {},
    item: {}
};

export default Item;