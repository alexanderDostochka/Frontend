import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../components/Text';
import Code from '../../components/Code';
import Content from '../../components/Content';
import _ from 'lodash';

const DocBuilderLayout = React.memo(({ data }) => _.map(data, (item, index) => (
    <Content key={ index } margin={[15, 15]}>
        {
            item.title !== "" && (
                <Text size="h2" weight="300">{ item.title }</Text>
            )
        }
        {
            item.description !== "" && (
                <Text size="body" color="grey">{ item.description }</Text>
            )
        }
        {
            item.code !== "" && (
                <Content margin={[15, 0, -8]}>
                    <Code code={ item.code }/>
                </Content>
            )
        }
        {
            item.codeDesc !== "" && (
                <Text size="caption" color="grey">{ item.codeDesc }</Text>
            )
        }
        {
            item.text !== "" && (
                <Content margin={[15]}>
                    <Text size="body">{ item.text }</Text>
                </Content>
            )
        }
    </Content>
)));

DocBuilderLayout.propTypes = {
    data: PropTypes.array
};

DocBuilderLayout.defaultProps = {
    data: []
};

export default DocBuilderLayout;