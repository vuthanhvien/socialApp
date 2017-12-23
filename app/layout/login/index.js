import React, { Component } from 'react';
import { StyleSheet, Image, Alert, Picker, Modal, TouchableWithoutFeedback, TouchableNativeFeedback, ScrollView, Dimensions, Platform, KeyboardAvoidingView, NativeModules , FlatList} from 'react-native';
import { Button, Text , Container, Content, Input, Item, Form, Label, Icon, View, Spinner, List, ListItem, Left } from 'native-base';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions.js';

class Login extends Component {
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
    }

    login(){
        if(this.state.name){
            var avatar = [
                'https://hinhnendep.pro/wp-content/uploads/2016/04/top-hinh-anh-avatar-girl-xinh-thu-hut-nhat-facebook-8.jpg',
                'http://tuvublog.com/wp-content/uploads/2017/08/6-61.jpg',
                'https://pbs.twimg.com/profile_images/848009415206858752/cDMhhlfF_400x400.jpg',
                'http://lazi.vn/uploads/users/avatar/1493713055_hinh-anh-girl-xinh-159.jpg',
                'https://s19.postimg.org/ua9j70urn/573abe612c4b1.jpg',
                'http://images.mid-day.com/images/2017/feb/01-Aankita.jpg'
            ]
            var auth = {
                token:'AAEAAQAAAAAAAAZYAAAAJGZkNjM0YjRhLTFhN2EtNGM0Zi1hYzFmLTcwOGZmZWMzYTY0Yw',
                user: this.state.name,
                avatar: avatar[this.state.name.length <= 6  ? this.state.name.length : 6]
            };


            this.props.actions.authLogin(auth);
                

            this.props.navigation && this.props.navigation.dispatch(NavigationActions.reset({
                key: null,
                index: 0,
                actions: [ NavigationActions.navigate({ 
                    routeName: 'Main'
                })]
            }));
        }
    }

    render() {
        return (
            <Container style={{flex: 1, justifyContent: 'center', backgroundColor: 'transparent'}}>
                <View style={{flex: 1, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}>
                    <Image source={{uri: 'https://media-exp2.licdn.com/mpr/mpr/AAEAAQAAAAAAAAZYAAAAJGZkNjM0YjRhLTFhN2EtNGM0Zi1hYzFmLTcwOGZmZWMzYTY0Yw.jpg'}} style={{flex: 1}} />
                </View>
                <View style={{flex: 1}}> 
                <FlatList 
                keyExtractor={(item, index)=> (item+'_'+index)}
                data={['fake']}
                inverted={true}
                renderItem={({item, index})=>{
                    return(
                    <View>
                        <View style={{justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Text style={{fontSize: 20, color: '#ccc', fontWeight: 'bold', margin: 15}}>DEMO APP</Text>
                        </View>
                        <Form style={{padding: 20}}>
                            <Item style={{backgroundColor: '#ffffffdd', paddingLeft: 15, marginLeft:0}} >
                                <Input 
                                placeholder='User Name'
                                value={this.state.name} 
                                onChangeText={(value) => this.setState({name: value})} 
                                autoCapitalize="none"
                                style={{fontSize: 16}} />
                            </Item>
                            <Item style={{backgroundColor: '#ffffffdd', paddingLeft: 15, marginLeft:0, marginBottom: 40, borderBottomWidth: 0}} >
                                <Input 
                                placeholder="Password" 
                                secureTextEntry={true}  
                                onChangeText={(value) => this.setState({password: value})} 
                                autoCapitalize="none"
                                style={{fontSize: 16}}  />
                            </Item>
                                <Button block transparent onPress={() => this.login()}  style={{borderRadius: 25 ,  backgroundColor: '#604c8d'}}>
                                    <Text style={{color:'white'}}>Login</Text>
                                </Button>
                        </Form>
                        {/*<View  style={{marginTop: 10, alignItems: 'center', flexDirection: 'row', backgroundColor: 'white', paddingLeft: 10}} >
                            <View style={{flex: 1}} />
                            <Button iconRight transparent onPress={()=> this.state.isLoading ? undefined :  this.props.navigation.navigate('Register') } >
                                <Text style={{color: '#444', fontSize: 14 }} >Register</Text>
                                <Icon name="arrow-forward"  style={{color: '#999', fontSize: 18}} />
                            </Button>
                        </View>*/}
                    </View>)
                }}>
                    </FlatList>
            </View>
            </Container>
        );
    }
}

const style = {

}

const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);