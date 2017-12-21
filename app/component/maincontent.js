import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  Root, Container
} from 'native-base';
import {
  Platform,
  View, 
  Text,
  AlertIOS, 
  Alert,
  StatusBar
} from 'react-native';
import { NavigationActions } from 'react-navigation';


import { NoAuthNavigator, MainNavigator } from 'app/layout/navigator';

// import { Colors } from 'app/config';

class MainContent extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    componentWillUnmount(){
    }

    renderApp(){
        return  (
            <Container>
                {
                    this.props.auth.token ?
                    <MainNavigator ref={nav => { if(nav) this.navigation = nav }} />
                    : 
                    <NoAuthNavigator ref={nav => { if(nav) this.navigation = nav }} />
                }
            </Container>
        )
    }
  
    render(){
        return (
            <Root>
                {this.renderApp()}
            </Root>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state
    };
}

export default connect(mapStateToProps)(MainContent);