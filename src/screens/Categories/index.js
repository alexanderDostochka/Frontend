import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, TouchableOpacity } from 'react-native';
import Logo from '../../components/Logo';
import Image from '../../components/Image';
import ScreenLayout from '../../components/ScreenLayout';
import Content from '../../components/Content';
import Text from '../../components/Text';
import { getCategories } from '../../redux/actions/categories';
import { lang } from '../../constants/mock';
import Item from './Item';
import _ from 'lodash';

const Categories = (props) => {
    const { navigation, getCategories, categories, loader } = props;
    const [sort, setSort] = useState(false);
    
    useEffect(() => {
        getCategories();
    }, []);

    return (
        <ScreenLayout loader={ loader }>
            <Content type="large">
                <Content margin={[25]}>
                    <Content margin={[0, 15]} spaceEvenly>
                        <Text size="h3" weight="300">{ lang.categories }</Text>
                        <TouchableOpacity onPress={() => setSort(!sort)}>
                            <Image style={{ width: 24, height: 24 }} path={`sort_${sort ? 't' : 'c'}.png`} />
                        </TouchableOpacity>
                    </Content>
                        <FlatList
                            data={ categories }
                            renderItem={({ item }) => 
                                <Item item={ item } navigation={ navigation } sort={ sort }/>
                            }
                            keyExtractor={item => item.type}
                            numColumns={sort ? 1 : 3}
                            key={sort ? 1 : 3}
                        />
                </Content>
            </Content>
        </ScreenLayout>
    );
};

Categories.navigationOptions  = {
    headerTitle: (
        <Logo image="js.png" title={ lang.docs } />
    )
};

Categories.propTypes = {
    getCategories: PropTypes.func,
    categories: PropTypes.array,
    loader: PropTypes.bool
}

Categories.defaultProps = {
    getCategories: _.noop,
    categories: [],
    loader: true
}

const mapStateToProps = state => {
    return {
        categories: state.categories.categories,
        loader: state.categories.loader
    }
}

export default connect(mapStateToProps, { getCategories })(Categories);