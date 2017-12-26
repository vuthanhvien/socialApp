import React, { Component } from 'react';
import { StyleSheet, Image, Alert, Picker, Modal, TouchableOpacity, TouchableNativeFeedback, ScrollView, Dimensions, Platform, KeyboardAvoidingView, NativeModules , FlatList, StatusBar, Keyboard} from 'react-native';
import { Button, Text , Container, Content, Input, Item, Form, Label, Icon, View, Spinner, List, ListItem, Left, Header, Right, Body, Toast } from 'native-base';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import * as actions from './../actions';

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
            inputText: ''
        }
    }
    componentWillMount(){
        var index = this.props.navigation.state.params;
        console.log(index);
        this.setState({data: this.props.app.timeline[index ? index : 0]})
    }
    send(){
        var dt = new Date().getTime();
        var item = this.state.data;
        var currentUser = this.props.auth;
        var comments = this.state.comments;
        var comment = ({
            avatar: currentUser.avatar,
            text: this.state.inputText,
            user: currentUser.user,
            id: dt
            });
        this.setState( { inputText: ''})
        setTimeout(()=>{
            this.props.actions.addComment(comment, item.id);
            Keyboard.dismiss();
           
        }, 0);
    }
    reply(item){

    }
    like(){
        Alert.alert('Like')

    }
    share(){
        Alert.alert('Shared')
    }
    renderComment(comment, index){
        return(
            <View style={{padding: 7, paddingLeft: 15 }}>
                <View style={{flexDirection: 'row', padding: 5, backgroundColor: '#eee', borderRadius: 28}}>
                    <View style={{width: 50}}>
                        <View style={{width: 46, height: 46, borderRadius: 23, backgroundColor: '#ccc'}}>
                            <Image source={{uri: comment.avatar}} style={{width: 46, height: 46, borderRadius: 23}}/>
                        </View>
                    </View>
                    <View style={{flex: 1, padding: 3, paddingLeft: 5}}>
                        <Text style={{fontSize: 14, color: '#444', fontWeight: 'bold'}}>{comment.user}</Text>
                        <Text style={{fontSize: 13, color: '#555' }}>{comment.text}</Text>
                    </View>
                </View>
                {/*
                <View style={{position: 'absolute', height: 24, backgroundColor: '#999', right: 35, bottom: 0,  borderRadius: 12, paddingLeft: 8, paddingRight: 8, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 12, color: 'white'}}>Reply {comment.id}</Text>
                </View>
                */}
            </View>
        )
    }
    renderHeader(item){
        return(
            <View>
               
                <View>
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
                            <TouchableOpacity onPress={()=>this.like()} style={{flex: 1}}>
                                <View style={{height: 40, flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderColor: '#eee', borderRightWidth: 1}}>
                                    <Icon name={item.like ? "ios-heart" : "ios-heart-outline"} style={{color: item.like ? '#EE2737' : '#604c8d'}} /> 
                                    <Text style={{fontSize: 14, marginLeft: 10, color: '#444'}}>Love</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.setState({isComment: true})} style={{flex: 1}}>
                                <View style={{height: 40, flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderColor: '#eee', borderRightWidth: 1}}>
                                    <Icon name="ios-text-outline" /> 
                                    <Text style={{fontSize: 14, marginLeft: 10, color: '#444'}}>Comments</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.share()} style={{flex: 1}}>
                                <View style={{height: 40, flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderColor: '#eee', borderRightWidth: 1}}>
                                    <Icon name="ios-share-outline" /> 
                                    <Text style={{fontSize: 14, marginLeft: 10, color: '#444'}}>Share</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                </View>
                </View>
            )
    }
    render() {
        var item = this.state.data;
        var comments = item.comments ? item.comments.slice().reverse() : [];
        return (
            <Container style={{  backgroundColor: 'white'}}>
                <Header style={{backgroundColor: '#f4f4f4'}}>
                    <Left style={{flex: 1}}>
                        <Button transparent onPress={()=>this.props.navigation.goBack()} style={{flex: 1}}>
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
                <FlatList 
                    inverted={true}
                    ListFooterComponent ={()=>this.renderHeader(item)}
                    keyExtractor={(item, index)=> (index)}
                    data={ comments }
                    renderItem={({item, index}) =>this.renderComment(item, index)}
                >
                </FlatList>
                <View style={{flex: 1000}} />
                <View style={{borderTopWidth: 1, borderColor: '#eee', height: 54, flexDirection: 'row' , alignItems: 'center', justifyContent: 'center'}}>
                    <Button transparent style={{height: 54}}>
                        <Icon name="ios-image-outline" style={{color: '#604c8d'}}/>
                    </Button>
                    <View style={{margin: 5, flex: 1, borderWidth: 1, borderColor: '#eee', borderRadius: 22, paddingLeft: 10}}>
                        <Input style={{fontSize: 14}} 
                            placeholder="Enter your comment" 
                            placeholderTextColor="#999" 
                            multiline={true} 
                            value={this.state.inputText}
                            onChangeText={(text)=>this.setState({inputText: text})}
                            />
                    </View>
                    <Button transparent style={{height: 54}} onPress={()=>this.send()}>
                        <Icon name="md-send" style={{color: '#604c8d', fontSize: 28}} />
                    </Button>
                </View>
            </Container>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);