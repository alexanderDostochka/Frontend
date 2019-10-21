import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Content from '../../components/Content';
import Category from '../../components/Category';

const Item = React.memo(({item, navigation, sort}) => {
    const openDoc = (type, title) => {
        navigation.navigate('Docs', { type, title });
    };
    
    return (
        <Content margin={[0, 10, 0, 10]}>
            <TouchableOpacity onPress={() => openDoc(item.type, item.title)} activeOpacity={0.8}>
                <Category sort={ sort } title={ item.title } image={ item.image } />
            </TouchableOpacity>
        </Content>
    );
});

Item.propTypes = {
    item: PropTypes.object,
    sort: PropTypes.bool,
    navigation: PropTypes.object
};

Item.defaultProps = {
    item: {},
    sort: false,
    navigation: {}
};

export default Item;