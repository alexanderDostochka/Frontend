import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import images from '../../constants/images';

const ImageCustom = React.memo(({ name, style }) => (
    <Image style={ style } source={ images[name] } />
));

ImageCustom.propTypes = {
    name: PropTypes.string
}

ImageCustom.defaultProps = {
    name: ""
}

export default ImageCustom;