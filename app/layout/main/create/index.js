import React, { Component } from 'react';
import { Image} from 'react-native';
import { Button, Text , Container, Header, Tabs, Tab, TabHeading, Icon, Left, Body, Right, Content, View, Input, Spinner} from 'native-base';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as timelineActions from 'app/layout/main/home/actions';

class Create extends Component {
    static navigationOptions = {
        header: null,
        tabBarVisible: false,
    };

    constructor (props) {
        super(props);
        this.state = {
            isLoading: false,
            text: ''
        }
    }
    save(){
        this.setState({isLoading: true});
        var dt = new Date();
        var data = {
                type: 1,
                avatar: this.props.auth.avatar,
                user: this.props.auth.user,
                time: dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate(),
                id: dt.getTime(),
                content: this.state.text
            }
        this.props.timelineActions.addTimeline(data);
        setTimeout(()=>{
            this.setState({isLoading: false, text: ''});
            this.props.navigation.goBack();
        }, 5000);
    }
    render() {
        console.log(this.props);
        return (
            <Container style={{  backgroundColor: 'white'}}>
                <Header style={{backgroundColor: '#f4f4f4'}}>
                    <Left style={{flex: 1}}>
                        <Button transparent onPress={()=>this.props.navigation.goBack()} style={{width: '100%'}}>
                            <Icon name="md-close" style={{color: '#604c8d'}} />
                        </Button>
                    </Left>
                    <Body  style={{flex: 2, alignItems: 'center'}}>
                        <Text style={{color: '#604c8d', fontSize: 18, fontWeight: 'bold'}}>Make a post</Text>
                    </Body>
                    <Right  style={{flex: 1}}>
                        <Button transparent onPress={()=>this.save()}  style={{width: '100%', justifyContent: 'flex-end'}}>
                        {
                            this.state.isLoading ?
                            <Spinner color="#604c8d" size="small" />
                            :
                            <Icon name="ios-send" style={{color: '#604c8d', fontSize: 30}} />
                        }
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <View style={{margin: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 10}}>
                    <View style={{ paddingLeft:15 }}>
                        <Input 
                            value={this.state.text}
                            onChangeText={(text) => this.setState({text})}
                            placeholder="What on your mine ?"
                            placeholderTextColor="#999"
                            style={{color: '#444', height: 160, textAlignVertical: 'top'}}
                            multiline={true}
                            ref="input"
                        />
                        </View>
                        <View style={{flexDirection: 'row', backgroundColor: '#f4f4f4', borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                            <Button transparent>
                                <Icon name="ios-image-outline" style={{color: '#604c8d'}} />
                            </Button>
                            <Button transparent>
                                <Icon name="ios-camera-outline" style={{color: '#604c8d'}} />
                            </Button>
                        </View>
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
        timelineActions: bindActionCreators(timelineActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Create);