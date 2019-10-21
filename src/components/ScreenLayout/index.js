import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';

const ScreenLayout = React.memo(props => {
    const { loader, children } = props;

    return (
        <Loader loader={ loader }>
            { children }
        </Loader>
    );
});

ScreenLayout.propTypes = {
    loader: PropTypes.bool
}

ScreenLayout.defaultProps = {
    loader: false
}

export default ScreenLayout;