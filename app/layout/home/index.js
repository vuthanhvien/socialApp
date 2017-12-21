import React, { Component } from 'react';
import { StyleSheet, Image, Alert, Picker, Modal, TouchableWithoutFeedback, TouchableNativeFeedback, ScrollView, Dimensions, Platform, KeyboardAvoidingView, NativeModules , FlatList} from 'react-native';
import { Button, Text , Container, Content, Input, Item, Form, Label, Icon, View, Spinner, List, ListItem, Left, Header, Right, Body } from 'native-base';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from 'app/layout/login/actions';

class Home extends Component {
    static navigationOptions = {
        header: null,
        tabBarVisible: false
    };

    constructor (props) {
        super(props);
        this.state = {
            isLoading: false,
           
        }
    }

    componentWillMount(){

        this.setState({
            data: [
            {
                type: 1,
                title: 'New post',
                content : 'Yolow babty',
                user: 'Vien',
                avatar: '',
                time: '12/12/2017',
                image: 'https://www.planwallpaper.com/static/images/Child-Girl-with-Sunflowers-Images.jpg'
            },
            {
                type: 2,
                title: 'New post',
                content : 'Yolow babty',
                user: 'Vien',
                avatar: '',
                time: '12/12/2017',
                image: 'https://www.planwallpaper.com/static/images/Child-Girl-with-Sunflowers-Images.jpg'
            },
            {
                type: 3,
                title: 'New post',
                content : 'Yolow babty',
                user: 'Vien',
                avatar: '',
                time: '12/12/2017',
                image: 'https://www.planwallpaper.com/static/images/Child-Girl-with-Sunflowers-Images.jpg'
            }]
        })
       
    }
    logout(){
        this.props.authActions.authLogout();
    }

    renderItem(item){
        console.log(item)
        return (
            <View>
                <Image source={{uri: item.image}} style={{height: 300, width: '100%'}}/>
                <Text>{item.content}</Text>
            </View>
            )
    }
    render() {
        
        return (
            <Container style={{  backgroundColor: 'white'}}>
                <Header style={{backgroundColor: '#53C7FE'}}>
                    <Left>
                        <Icon name="ios-camera-outline" style={{color:'white', marginLeft: 5, fontSize: 30}} />
                    </Left>
                    <Body>
                    <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                        Demo Feed
                    </Text>
                    </Body>
                    <Right>
                        <Icon name="ios-settings-outline" style={{color:'white', marginRight: 5, fontSize: 30}} />
                    </Right>
                </Header>
                <FlatList

                    data={this.state.data}
                    keyExtractor={(item, index)=>item.type+index}
                    renderItem={({item, index})=>this.renderItem(item)}
                    >

                </FlatList>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);