import { StyleSheet } from 'react-native';
import variables from '../../constants/style-variables';

export default StyleSheet.create({
    tag: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingVertical: 4,
        borderRadius: 500,
        borderColor: variables.colors.darkgrey,
        borderWidth: 0.5,
        backgroundColor: variables.colors.silver,
        marginRight: 8
    }
});