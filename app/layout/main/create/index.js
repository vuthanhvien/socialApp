import React, { Component } from 'react';
import { Image, FlatList, Keyboard, TouchableOpacity, ScrollView} from 'react-native';
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

    componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow () {
    // alert('Keyboard Shown');
    this.setState({image: false})
  }

  _keyboardDidHide () {
    // alert('Keyboard Hidden');
  }

    constructor (props) {
        super(props);
        this.state = {
            isLoading: false,
            text: '',
            image: false,
            imageSelected : []
        }
    }
    save(){
        Keyboard.dismiss();
        this.setState({isLoading: true});
        var dt = new Date();
        var data = {
                type: 1,
                avatar: this.props.auth.avatar,
                user: this.props.auth.user,
                time: dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate(),
                id: dt.getTime(),
                content: this.state.text,
                image: this.state.imageSelected
            }
        setTimeout(()=>{
            this.props.timelineActions.addTimeline(data);
            this.setState({isLoading: false, text: '', imageSelected: [], image: false});
            this.props.navigation.goBack();
        }, 0);
    }
    openImages(){
        Keyboard.dismiss();
        this.setState({image: !this.state.image});
    }
    onSelect(item){
        console.log(this.state.imageSelected);
        var imageSelected = this.state.imageSelected;
        imageSelected.push(item);
        this.setState({imageSelected: imageSelected});
    }
    _renderImage( item, index ){
        return (
            <TouchableOpacity onPress={()=>this.onSelect(item)} style={{width: '33%', height: 100, margin: 1}}>
                <Image style={{width: "100%", height: '100%'}} source={{uri: item}}/>
            </TouchableOpacity>
            )
    }
    render() {
        var urls = [
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://globalhobo.com.au/wp-content/uploads/2013/11/rome-selfiej.jpg',
        'https://i.pinimg.com/736x/3f/3f/05/3f3f05ead894bd298b38e9a9f4f785ec--selfies-poses-selfie-poses-instagram.jpg',
        'https://pbs.twimg.com/media/C2jHJ8mUUAA6B2f.jpg',
        'http://4.bp.blogspot.com/-d0visepcRCo/ViOmxp7xMsI/AAAAAAAAAjQ/VuG-cwWaxtE/s1600/selfie%2Bpretty%2Bgirl.jpg',
        'https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11357443_436485073200726_427658500_n.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        'http://globalhobo.com.au/wp-content/uploads/2013/11/rome-selfiej.jpg',
        'https://i.pinimg.com/736x/3f/3f/05/3f3f05ead894bd298b38e9a9f4f785ec--selfies-poses-selfie-poses-instagram.jpg',
        'https://pbs.twimg.com/media/C2jHJ8mUUAA6B2f.jpg',
        'http://4.bp.blogspot.com/-d0visepcRCo/ViOmxp7xMsI/AAAAAAAAAjQ/VuG-cwWaxtE/s1600/selfie%2Bpretty%2Bgirl.jpg',
        'https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11357443_436485073200726_427658500_n.jpg',
        'http://www.celebshairstyles.com/wp-content/uploads/2017/01/Keira-Knightley-Short-Bob-Hairstyle.jpg',
        ]
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
                        {
                            this.state.imageSelected && this.state.imageSelected.length > 0 ?
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                            {
                                this.state.imageSelected.map((img, index)=>{
                                return(
                                        <Image key={index} source={{uri: img}} style={{width: 100, height: 100, margin: 2}} />
                                    )
                                })
                            }
                            </ScrollView>
                            :null
                        }
                        <View style={{flexDirection: 'row', backgroundColor: '#f4f4f4', borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                            <Button transparent onPress={()=>this.openImages()}>
                                <Icon name="ios-image-outline" style={{color: '#604c8d'}} />
                            </Button>
                            <Button transparent>
                                <Icon name="ios-camera-outline" style={{color: '#604c8d'}} />
                            </Button>
                        </View>
                    </View>
                </Content>
                {
                    this.state.image ?
                    <View style={{height: 220}}>
                        <FlatList 
                            numColumns={4}
                            keyExtractor={(item, index)=> (index)}
                            data={urls}
                            renderItem={({item, index}) =>this._renderImage(item, index)}
                        >
                        </FlatList>
                    </View>
                    :null
                }
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