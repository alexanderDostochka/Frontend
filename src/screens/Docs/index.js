import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import Logo from '../../components/Logo';
import { getDocs } from '../../redux/actions/docs';
import ScreenLayout from '../../components/ScreenLayout';
import Item from './Item';
import _ from 'lodash';

const Docs = ({ navigation, getDocs, data, loader }) => {
    const type = navigation.state.params.type;

    useEffect(() => { 
        getDocs({type});
    }, [0]);

    return (
        <ScreenLayout loader={ loader }>
            <FlatList
                data={ data }
                renderItem={({ item }) => <Item item={ item } navigation={ navigation } />}
                keyExtractor={item => item.id}
            />
        </ScreenLayout>
    );
};

Docs.propTypes = {
    navigation: PropTypes.object,
    getDocs: PropTypes.func,
    data: PropTypes.array,
    loader: PropTypes.bool
};

Docs.defaultProps = {
    navigation: {},
    getDocs: _.noop,
    data: [],
    loader: true
};

Docs.navigationOptions = ({ navigation })  => ({
    headerTitle: (
        <Logo 
            padding={ false } 
            image={ `${navigation.state.params.type}.png` } 
            title={ navigation.state.params.title } />
    )
});

const mapStateToProps = state => {
    return {
        data: state.docs.docs,
        loader: state.docs.loader
    }
}

export default connect(mapStateToProps, { getDocs })(Docs);