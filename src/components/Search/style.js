import { StyleSheet } from 'react-native';
import variables from '../../constants/style-variables';

export default StyleSheet.create({
    search: {
        flexDirection: 'row',
        paddingLeft: 4,
        paddingRight: 4,
        borderRadius: 500,
        backgroundColor: variables.colors.silver,
        alignItems: 'center'
    },
    icon: {
        right: 27,
        zIndex: 1
    },
    input: {
        width: '100%',
        zIndex: 10,
        paddingLeft: 10,
        paddingRight: 25,
        height: 35,
        paddingTop: 1.5,
        paddingBottom: 1.5
    }
});