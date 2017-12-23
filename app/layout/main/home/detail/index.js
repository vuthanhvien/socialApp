import React, { Component } from 'react';
import { StyleSheet, Image, Alert, Picker, Modal, TouchableOpacity, TouchableNativeFeedback, ScrollView, Dimensions, Platform, KeyboardAvoidingView, NativeModules , FlatList, StatusBar} from 'react-native';
import { Button, Text , Container, Content, Input, Item, Form, Label, Icon, View, Spinner, List, ListItem, Left, Header, Right, Body } from 'native-base';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from 'app/layout/login/actions';

class Detail extends Component {
    static navigationOptions = {
        headerTitle: 'Detail',
        headerStyle: {
            backgroundColor: '#f4f4f4'
        },
        headerTintColor: '#604c8d',
        tabBarVisible: false,
    };

    constructor (props) {
        super(props);
        this.state = {
        }
    }

    render() {
        
        return (
            <Container style={{  backgroundColor: 'white'}}>
             
            </Container>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);