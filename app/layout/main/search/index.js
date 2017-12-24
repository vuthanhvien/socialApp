import React, { Component } from 'react';
import { Image, ScrollView, FlatList} from 'react-native';
import { Button, Text , Container, Header, Left, Body, Right, Icon, View, Input, Content } from 'native-base';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from 'app/layout/login/actions';

class Search extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor (props) {
        super(props);
        this.state = {
            isLoading: false,
            text: '',
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
    _renderImage(item){
        return (
            <Image style={{width: 120, height: 100, margin: 2}} source={{uri: item}}  />
            )
    }
    render() {

        var urls = [
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',        
        ]
        
        return (
            <Container style={{  backgroundColor: 'white'}}>
                <Header style={{backgroundColor: '#604c8d', alignItems: 'center', justifyContent: 'center'}}>  
                    <View style={{height: 40, backgroundColor: 'white', flex:1, borderRadius: 10, paddingLeft: 15, flexDirection: 'row', alignItems: 'center', paddingRight: 15}}>
                        <Input 
                            value={this.state.text}
                            placeholder="Enter keyword"
                            onChangeText={(text) => this.setState({text})}
                            style={{fontSize: 14, height: 40}}
                            placeholderTextColor="#999"
                            onSubmitEditing ={()=>this.search()}
                        />
                        <Icon name="ios-search-outline" style={{color: '#999'}}/>
                    </View>
                </Header>
                <Content>
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
                    <FlatList 
                        numColumns={4}
                        keyExtractor={(item, index)=> (index)}
                        data={urls}
                        renderItem={({item, index}) =>this._renderImage(item, index)}
                    >
                    </FlatList>
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
        // authActions: bindActionCreators(authActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);