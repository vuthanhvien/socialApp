import React, { Component } from 'react';
import { StyleSheet, Image, Alert, Picker, Modal, TouchableOpacity, TouchableNativeFeedback, ScrollView, Dimensions, Platform, KeyboardAvoidingView, NativeModules , FlatList, StatusBar} from 'react-native';
import { Button, Text , Container, Content, Input, Item, Form, Label, Icon, View, Spinner, List, ListItem, Left, Header, Right, Body } from 'native-base';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from 'app/layout/login/actions';

class Home extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor (props) {
        super(props);
        this.state = {
            isLoading: false,
           
        }
    }

    componentWillMount(){

        this.setState({
            userRecent: [{
                name: 'Emma Stone',
                avatar: 'https://kenh14cdn.com/2016/a65b1712879841ed949541589bb27ce4-1481932442078.jpg'
            },{
                name: 'Mackenzie Foy',
                avatar: 'https://www.shemazing.net/wp-content/uploads/2016/07/mfdawn2.jpg'
            },{
                name: 'Keira Knightley',
                avatar: 'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg'
            },{
                name: 'Emma Stone',
                avatar: 'https://kenh14cdn.com/2016/a65b1712879841ed949541589bb27ce4-1481932442078.jpg'
            },{
                name: 'Mackenzie Foy',
                avatar: 'https://www.shemazing.net/wp-content/uploads/2016/07/mfdawn2.jpg'
            },{
                name: 'Keira Knightley',
                avatar: 'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg'
            },{
                name: 'Emma Stone',
                avatar: 'https://kenh14cdn.com/2016/a65b1712879841ed949541589bb27ce4-1481932442078.jpg'
            },{
                name: 'Mackenzie Foy',
                avatar: 'https://www.shemazing.net/wp-content/uploads/2016/07/mfdawn2.jpg'
            },{
                name: 'Keira Knightley',
                avatar: 'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg'
            }]
        })
       
    }
    logout(){
        this.props.authActions.authLogout();
    }

    renderItem(item){
        return (
            <View>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>this.props.navigation.navigate('Detail', item)}>
                <View style={{flexDirection: 'row', borderTopWidth: 1, borderColor: '#f4f4f4', padding: 5, paddingLeft: 10, alignItems: 'center'}}>
                    <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: '#ccc'}}>
                    <Image source={{uri: item.avatar}} style={{width: 50, height: 50, borderRadius: 25}} />
                    </View>
                    <View style={{height: 50, flex: 1, justifyContent: 'center', marginLeft: 10}}>
                        <Text style={{color: '#444', fontWeight: 'bold', fontSize: 14}}>{item.user}</Text>
                    </View>
                    <Button transparent onPress={()=>console.log('123')}>
                        <Icon name="ios-more-outline" style={{color: '#444'}} />
                    </Button>
                    {/*<Text style={{fontSize: 10, color: '#999', paddingRight: 8}}>{item.time}</Text>*/}
                </View>
                {
                    item.image ? 
                    <Image source={{uri: item.image[0]}} style={{height: 400, width: '100%'}}/>:null
                }
                {
                    item.content ?
                    <View style={{paddingLeft: 20, paddingRight: 10, paddingTop: 10 }}>
                        <Text style={{fontSize: 14, color: '#444'}} numberOfLines={item.image ? 5 : 15}>
                            {item.content}
                        </Text>
                    </View>
                    :null
                }
                </TouchableOpacity>
                <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
                    <TouchableOpacity   onPress={()=>{ item.like = !item.like; this.setState({}) }} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon  name={ item.like ? 'ios-heart' : 'ios-heart-outline'} style={{color: item.like ? '#EE2737' : '#604c8d', marginLeft: 5, marginRight: 5}}/>
                    </TouchableOpacity>

                    <Icon  name="ios-text-outline" style={{color: '#604c8d', marginLeft: 5, marginRight: 5}}/>
                    {
                        item.comment && item.comment.length > 0 ?
                        <Text style={{fontSize:12, color: '#555'}}>
                            <Text style={{fontSize: 12, fontWeight: 'bold', color: '#444'}}>{item.comment[0].name} :</Text>
                            {item.comment[0].text}
                        </Text>
                    :null
                    }
                </View>
            </View>
            )
    }
    renderHeader(){
        return (
            <View style={{height: 120, paddingTop:10}}>
                <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                {
                    this.state.userRecent ? this.state.userRecent.map((user, index)=>{
                        return (
                            <View style={{width: 80, height: 90, padding: 10}} key={index}>
                                <View style={{width: 66, height: 66, borderRadius: 33, borderColor: '#604c8d', borderWidth: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image source={{uri: user.avatar}} style={{width: 60, height: 60, borderRadius: 30}}/>
                                </View>
                                <Text style={{fontSize: 12, color: '#999'}} numberOfLines={1}>{user.name}</Text>
                            </View>
                        )
                    }) :null
                }

                </ScrollView>
            </View>
            )
    }
    noDataDisplay(){
        return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', height: 400}}>
                <Text style={{color: '#444', marginBottom: 10}}> No feed available</Text>
                <View>
                    <Button transparent style={{borderColor: '#604c8d', borderWidth: 1}} onPress={()=>this.props.navigation.navigate('Create')}>
                        <Text>Create</Text>
                    </Button>
                </View>
                </View>
            )
    }
    render() {
        
        return (
            <Container style={{  backgroundColor: 'white'}}>
                <Header style={{backgroundColor: '#f4f4f4'}}>
                    <Left style={{flex: 1}}>
                        <Button onPress={()=>console.log('123')} transparent style={{width: '100%', height: 60}}>
                            <Icon name="ios-camera-outline" style={{color:'#604c8d', marginLeft: 5, fontSize: 30}} />
                        </Button>
                    </Left>
                    <Body style={{flex: 2, alignItems: 'center', borderBottomWidth : 5, borderColor: '#604c8d',  height: 60, justifyContent: 'center'}}>
                    <Text style={{color: '#604c8d', fontSize: 18, fontWeight: 'bold', justifyContent: 'center'}}>
                        Timeline
                    </Text>
                    </Body>
                    <Right style={{flex: 1, flexDirection: 'row'}}>
                        <Button onPress={()=>this.props.navigation.navigate('Setting')} transparent style={{width: '100%', height: 60, justifyContent: 'flex-end'}}>
                            <Icon name="ios-settings-outline" style={{color:'#604c8d', marginRight: 5, fontSize: 30}} />
                        </Button>
                    </Right>
                </Header>
                <FlatList
                    ListHeaderComponent ={()=>this.renderHeader()}
                    data={this.props.app.timeline}
                    keyExtractor={(item, index)=>index}
                    renderItem={({item, index})=>this.renderItem(item)}
                    ListEmptyComponent={()=>this.noDataDisplay()}
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