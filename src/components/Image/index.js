import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { baseURL } from '../../constants/api';

const ImageCustom = React.memo(({ path, style }) => (
    <Image style={ style } source={{uri: `${baseURL}/${path}` }} />
));

ImageCustom.propTypes = {
    path: PropTypes.string
}

ImageCustom.defaultProps = {
    path: ""
}

export default ImageCustom;