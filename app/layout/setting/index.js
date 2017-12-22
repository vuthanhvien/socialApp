import React, { Component } from 'react';
import { StyleSheet, Image, Alert, Picker, Modal, TouchableWithoutFeedback, TouchableNativeFeedback, ScrollView, Dimensions, Platform, KeyboardAvoidingView, NativeModules , FlatList} from 'react-native';
import { Button, Text , Container, Content, Input, Item, Form, Label, Icon, View, Spinner, List, ListItem, Left, Header, Right, Body , Separator} from 'native-base';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from 'app/layout/login/actions';

class Setting extends Component {
    static navigationOptions = {
        headerTitle: 'Settings',
        headerStyle : {
            backgroundColor: '#f4f4f4',
        },
        headerTintColor: '#604c8d'
    };

    constructor (props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount(){
       
    }
    logout(){
        this.props.authActions.authLogout();
    }
  
    render() {
        
        return (
            <Container style={{  backgroundColor: 'white'}}>
                <Content>
                    <Separator>
                        <Text style={{fontSize: 14}}>Information</Text>
                    </Separator>
                    <ListItem style={{borderBottomWidth: 0}}>
                        <Body>
                            <Text style={{color: '#444'}}>Manage friends list</Text>
                        </Body>
                    </ListItem>
                    <ListItem style={{borderBottomWidth: 0}}>
                        <Body>
                            <Text style={{color: '#444'}}>Config email</Text>
                        </Body>
                    </ListItem>
                    <ListItem style={{borderBottomWidth: 0}}>
                        <Body>
                            <Text style={{color: '#444'}}>Profile</Text>
                        </Body>
                    </ListItem>
                    <Separator>
                        <Text style={{fontSize: 14}}>Account</Text>
                    </Separator>
                    <ListItem style={{borderBottomWidth: 0}} onPress={()=>this.logout()}>
                        <Body>
                            <Text style={{color: '#444'}}>Logout</Text>
                        </Body>
                        <Icon name="ios-log-out" style={{color: '#444'}}/>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Setting);