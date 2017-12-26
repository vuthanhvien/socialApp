import React, { Component } from 'react';
import {
    Text,
    View,
    KeyboardAvoidingView,
    Platform
} from 'react-native';

import {
Container 
} from 'native-base';

import {Provider} from 'react-redux';

import MainContent from 'app/component/maincontent.js';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './service/store.js';
// console.log(configureStore());
const { persistor, store } = configureStore();

const onBeforeLift = () => {
}

import { AppNavigator } from 'app/layout/navigator.js';

console.disableYellowBox = true;
if((process.env.NODE_ENV || '').toLowerCase() === 'production'){
    console.log = function(){};
    console.error = function(){};
}

export default class App extends Component  {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        console.log(store.getState());
        return (
            <Provider store={ store } >
            
                <PersistGate  
                    loading={ <Container style={{backgroundColor: '#604c8d', alignItems: 'center', justifyContent: 'center'}}> 
                                <Text style={{color: 'white'}}>Loading ...</Text>
                            </Container>}
                    onBeforeLift={onBeforeLift}
                    persistor={persistor}
                    >
                        {
                            Platform.OS === 'ios' ?
                                <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                                    <Container>
                                        <MainContent />
                                    </Container>
                                </KeyboardAvoidingView>
                                :
                                <Container>
                                    <MainContent />
                                </Container>
                        }
                </PersistGate>
            </Provider>
        );
    }
}

