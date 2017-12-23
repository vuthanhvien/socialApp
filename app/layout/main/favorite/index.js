import React, { Component } from 'react';
import { Image} from 'react-native';
import { Button, Text , Container, Tabs, Tab, TabHeading, Content, View, ListItem, Left, Right, Body} from 'native-base';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from 'app/layout/login/actions';

class Favorite extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor (props) {
        super(props);
        this.state = {
            isLoading: false,
           
        }
    }

    renderNotification(){
        var data = [
            {
                user: 'Angela PT',
                avatar: 'https://hinhanhdepvai.com/wp-content/uploads/2017/05/anh-girl-xinh.jpg',
                content: 'Create a new image https://hinhanhdepvai.com/wp-content/uploads/2017/05/anh-girl-xinh.jpg',
                time: '1 min ago',
                new: true
            },
            {
                user: 'Angela PT',
                avatar: 'https://hinhanhdepvai.com/wp-content/uploads/2017/05/anh-girl-xinh.jpg',
                content: 'Like your comment',
                time: '1 min ago',
                new: true
            },
            {
                user: 'Angela PT',
                avatar: 'https://hinhanhdepvai.com/wp-content/uploads/2017/05/anh-girl-xinh.jpg',
                content: 'Like your comment',
                time: '1 min ago'
            },
            {
                user: 'Ema PT',
                avatar: 'https://hinhanhdepvai.com/wp-content/uploads/2017/05/anh-girl-xinh-cuc-de-thuong-lam-hinh-nen.jpg',
                content: 'Like your comment',
                time: '1 min ago'
            }
        ]
        return(
            <Content>
                {
                    data ? data.map((item, index)=>{
                        return (
                             <ListItem key={index} style={{ backgroundColor: item.new ? '#f4f4f4' : 'white', borderBottomWidth: 1, borderColor: '#f4f4f4',  marginLeft: 0, paddingLeft: 15}}
                                onPress={()=>console.log('12')}>
                                <Image source={{uri: item.avatar}} style={{width: 40, height: 40, borderRadius: 20}}/>
                                <Text style={{flex: 1, fontSize: 14, color: '#777', padding: 10}} numberOfLines={3}>
                                    <Text style={{fontSize: 14, color: '#444', fontWeight: 'bold'}}>{item.user} </Text>
                                    {item.content}
                                </Text>
                                <Button style={{backgroundColor: '#604c8d', height: 30}} transparent small>
                                    <Text style={{color: 'white'}}>Visit</Text>
                                </Button>
                            </ListItem>
                            )
                    }):null
                }
            </Content>
            )
    }

    renderActivity(){
       var data = [
            {
                user: 'Angela PT',
                avatar: 'https://hinhanhdepvai.com/wp-content/uploads/2017/05/anh-girl-xinh.jpg',
                content: 'You like a picture',
                time: '1 min ago'
            },
            {
                user: 'Angela PT',
                avatar: 'https://hinhanhdepvai.com/wp-content/uploads/2017/05/anh-girl-xinh.jpg',
                content: 'You like your comment',
                time: '1 min ago'
            }
        ]
        return(
            <Content>
                {
                    data ? data.map((item, index)=>{
                        return (
                             <ListItem key={index} style={{ backgroundColor: item.new ? '#f4f4f4' : 'white', borderBottomWidth: 1, borderColor: '#f4f4f4', height: 60, marginLeft: 0, paddingLeft: 15}}
                                onPress={()=>console.log('12')}>
                                <Image source={{uri: item.avatar}} style={{width: 40, height: 40, borderRadius: 5}}/>
                                <Text style={{flex: 1, fontSize: 14, color: '#777', padding: 10}} numberOfLines={3}>
                                    {item.content}
                                </Text>
                            </ListItem>
                            )
                    }):null
                }
            </Content>
            )
    }

    render() {
        
        return (
            <Container style={{  backgroundColor: 'white'}}>
                <Tabs 
                    tabBarUnderlineStyle={{backgroundColor: '#604c8d'}}
                    >
                    <Tab
                        heading="Notification"
                        textStyle={{color: '#999'}}
                        activeTextStyle={{color: '#604c8d'}}
                        tabStyle={{backgroundColor: '#f4f4f4'}}
                        activeTabStyle={{backgroundColor: '#f4f4f4'}}>
                        {
                            this.renderNotification()
                        }
                    </Tab>
                   <Tab
                        heading="Activity"
                        textStyle={{color: '#999'}}
                        activeTextStyle={{color: '#604c8d'}}
                        tabStyle={{backgroundColor: '#f4f4f4'}}
                        activeTabStyle={{backgroundColor: '#f4f4f4'}}>
                         {
                            this.renderActivity()
                        }
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        // authActions: bindActionCreators(authActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorite);