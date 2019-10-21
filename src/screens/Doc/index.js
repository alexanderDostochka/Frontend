import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDoc } from '../../redux/actions/docs';
import { ScrollView } from 'react-native';
import Logo from '../../components/Logo';
import Text from '../../components/Text';
import Content from '../../components/Content';
import DocBuilderLayout from '../../components/DocBuilderLayout';
import ScreenLayout from '../../components/ScreenLayout';
import { lang } from '../../constants/mock';
import _ from 'lodash';

const Docs = ({ navigation, getDoc, data, loader }) => {
    const id = navigation.state.params.id;

    useEffect(() => {
        getDoc({id});
    }, [0]);

    return (
        <ScreenLayout loader={ loader }>
            <ScrollView>
                <Content type="large" margin={[15, 15]}>
                    <DocBuilderLayout data={ data } />
                    <Text size="caption" color="grey">
                        { lang.taken_information }
                    </Text>
                </Content>
            </ScrollView>
        </ScreenLayout>
    );
};

Docs.navigationOptions = ({ navigation })  => ({
    headerTitle: (
        <Logo 
            padding={ false }
            image={ `${navigation.state.params.type}.png` } 
            title={ navigation.state.params.title } />
    )
});

Docs.propTypes = {
    getDoc: PropTypes.func,
    doc: PropTypes.array,
    loader: PropTypes.bool
}

Docs.defaultProps = {
    getDoc: _.noop,
    doc: [],
    loader: true
}

const mapStateToProps = state => {
    return {
        data: state.doc.doc,
        loader: state.doc.loader
    }
}

export default connect(mapStateToProps, { getDoc })(Docs);