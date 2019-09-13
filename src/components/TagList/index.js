import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text } from 'react-native';
import styles from './style';
import Tag from '../Tag';

const TagList = React.memo(({ tags }) => {
    return (
        <ScrollView showsHorizontalScrollIndicator={ false } horizontal={ true } style={ styles.list }>
            {
                tags.map((item, index) => (
                    <Tag key={ index }>
                        <Text>{ item }</Text>
                    </Tag>
                ))
            }
        </ScrollView>
    );
});

TagList.propTypes = {
    tags: PropTypes.array
}

TagList.defaultProps = {
    tags: []
}

export default TagList;