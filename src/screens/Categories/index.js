import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../../components/Logo';
import Content from '../../components/Content';
import Category from '../../components/Category';
import Text from '../../components/Text';

// TODO: Move to redux
import { categories } from '../../constants/mock';

const Categories = ({ navigation }) => {
    const gotoDoc = (type, title) => {
        navigation.navigate('Docs', { type, title });
    };

    const renderItem = item => (
        <Content margin={[0, 10, 0, 10]}>
            <TouchableOpacity onPress={() => gotoDoc(item.type, item.title)} activeOpacity={0.8}>
                <Category title={ item.title } type={ item.type } />
            </TouchableOpacity>
        </Content>
    );

    return (
        <Content type="large">
            <Content margin={[25]}>
                <Content margin={[0, 15]}>
                    <Text size="h3" weight="300">Categories</Text>
                </Content>
                <FlatList
                    contentContainerStyle={ styles.list }
                    style={ styles.categories }
                    data={ categories }
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={item => item.type}
                    numColumns={3}
                />
            </Content>
        </Content>
    );
};

const styles = StyleSheet.create({
    list: {
       
    
    }
});

Categories.navigationOptions  = {
    headerTitle: (
        <Logo image="js" title="Docs" />
    )
};

export default Categories;