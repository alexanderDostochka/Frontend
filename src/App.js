import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import reduxConfig from './redux/config';
import Navigation from './navigation';

const App = () => {
    useEffect(() => {
        StatusBar.setBackgroundColor('white');
        StatusBar.setBarStyle('dark-content');
    }, [0]);

    return (
        <Provider store={ reduxConfig() }>
            <Navigation />
        </Provider>
    );
}

export default App;