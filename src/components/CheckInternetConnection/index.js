import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import Text from '../Text';
import NetInfo from "@react-native-community/netinfo";
import variables from '../../constants/style-variables';
import { lang } from '../../constants/mock';

const CheckInternetConnection = React.memo(() => {
    const initialWidth = -variables.content.large;
    const [connect, setConnect] = useState(false);
    const [fadeAnim] = useState(new Animated.Value(initialWidth));

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            onAnimate(!state.isConnected);
            setConnect(!state.isConnected);
        });
          
        return () => unsubscribe();
    }, [0]);

    const onAnimate = (connect = false) => {
        Animated.timing(fadeAnim, {
                toValue: connect ? 0 : initialWidth,
                duration: 700,
            },
        ).start();
    }

    if(connect) {
        return (
            <Animated.View style={ [styles.error, { marginTop: fadeAnim} ] } >
                <Text color="white" size="body">
                    { lang.no_internet_connection }
                </Text>
            </Animated.View>
        );
    };
});

const styles = StyleSheet.create({
    error: {
        backgroundColor: variables.backgrounds.danger,
        padding: variables.content.large / 2,
    }
});

export default CheckInternetConnection;