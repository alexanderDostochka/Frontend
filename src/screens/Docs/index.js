import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../../components/Logo';
import Content from '../../components/Content';
import Text from '../../components/Text';

// TODO: Move to redux
import { categories } from '../../constants/mock';

const Docs = ({ navigation }) => {
    return (
        <Content type="large">
            <Text> Hi </Text>
        </Content>
    );
};

const styles = StyleSheet.create({

});

Docs.navigationOptions = ({ navigation })  => ({
    headerTitle: (
        <Logo 
            padding={ false } 
            image={ navigation.state.params.type } 
            title={ navigation.state.params.title } />
    )
});

export default Docs;