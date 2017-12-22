import React, { Component } from 'react';
import { Image} from 'react-native';
import { Button, Text , Container, Header, Left, Body, Right, Icon, View, Input} from 'native-base';
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
            text: ''
        }
    }
    render() {
        
        return (
            <Container style={{  backgroundColor: 'white'}}>
                <Header style={{backgroundColor: '#604c8d', alignItems: 'center', justifyContent: 'center'}}>  
                    <View style={{height: 40, backgroundColor: 'white', flex:1, borderRadius: 10, paddingLeft: 15, flexDirection: 'row', alignItems: 'center', paddingRight: 15}}>
                        <Input 
                            value={this.state.text}
                            placeholder="Enter keyword"
                            onChangeText={(text) => this.setState({text})}
                            style={{fontSize: 12, height: 40}}
                            placeholderTextColor="#999"
                            onSubmitEditing ={()=>this.search()}
                        />
                        <Icon name="ios-search-outline" style={{color: '#999'}}/>
                    </View>
                </Header>
                <Text>Search</Text>
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