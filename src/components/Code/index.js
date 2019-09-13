import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/styles/prism';

const Code = ({ code }) => {
    return (
        <SyntaxHighlighter 
            language='javascript' 
            style={ atomDark }
            highlighter={"prism"}
        >
            
  	    { code }
        </SyntaxHighlighter>
    );
};

Code.propTypes = {
    code: PropTypes.string
}

Code.defaultProps = {
    code: ''
}

export default Code;