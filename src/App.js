import React from 'react';
import { Provider } from 'react-redux';
import reduxConfig from './redux/config';
import Navigation from './navigation';

const App = () => {
    return (
        <Provider store={ reduxConfig }>
            <Navigation />
        </Provider>
    );
}

export default App;