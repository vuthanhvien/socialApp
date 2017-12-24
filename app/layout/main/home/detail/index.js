import React, { Component } from 'react';
import { StyleSheet, Image, Alert, Picker, Modal, TouchableOpacity, TouchableNativeFeedback, ScrollView, Dimensions, Platform, KeyboardAvoidingView, NativeModules , FlatList, StatusBar} from 'react-native';
import { Button, Text , Container, Content, Input, Item, Form, Label, Icon, View, Spinner, List, ListItem, Left, Header, Right, Body } from 'native-base';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from 'app/layout/login/actions';

class Detail extends Component {
    static navigationOptions = {
        header: null,
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
        var item = this.props.navigation.state.params;
        console.log(item);
        return (
            <Container style={{  backgroundColor: 'white'}}>
                <Content>
                <Header style={{backgroundColor: '#f4f4f4'}}>
                    <Left style={{flex: 1}}>
                        <Button transparent onPress={()=>this.props.navigation.goBack()}>
                            <Icon name="md-close" style={{color: '#604c8d'}}/>
                        </Button>
                    </Left>
                    <Body style={{alignItems: 'center', flex: 2}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#604c8d'}}>
                            {item.user}
                        </Text>
                    </Body>
                    <Right style={{flex: 1}}>
                    </Right>
                </Header>
                {
                    item.image ? 
                    <View>
                        <Image style={{width: '100%', height: 350}} source={{uri: item.image[0]}} />
                    </View>:null
                }
                <View style={{flexDirection: 'row', margin: 10}}>
                    <View style={{width: 60}}>
                        <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: '#ccc'}}>
                            <Image source={{uri: item.avatar}} style={{width: 50, height: 50, borderRadius: 25}} />
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{height: 50, alignItems: 'center', flexDirection: 'row'}}>
                            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#444', flex: 1}}>{item.user}</Text>
                            <Text style={{fontSize: 12, color: '#999'}}>{item.time}</Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 14, color: '#444'}}>{item.content}</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#eee'}}>
                    <View style={{height: 40, flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderColor: '#eee', borderRightWidth: 1}}>
                        <Icon name="ios-heart-outline" /> 
                        <Text style={{fontSize: 14, marginLeft: 10, color: '#444'}}>Love</Text>
                    </View>
                    <View style={{height: 40, flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderColor: '#eee', borderRightWidth: 1}}>
                        <Icon name="ios-text-outline" /> 
                        <Text style={{fontSize: 14, marginLeft: 10, color: '#444'}}>Comments</Text>
                    </View>
                    <View style={{height: 40, flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderColor: '#eee', borderRightWidth: 1}}>
                        <Icon name="ios-share-outline" /> 
                        <Text style={{fontSize: 14, marginLeft: 10, color: '#444'}}>Share</Text>
                    </View>
                </View>
                <View>
                    
                </View>
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
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);