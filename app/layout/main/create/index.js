import React, { Component } from 'react';
import { Image} from 'react-native';
import { Button, Text , Container, Header, Tabs, Tab, TabHeading, Icon} from 'native-base';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from 'app/layout/login/actions';

class Create extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor (props) {
        super(props);
        this.state = {
            isLoading: false,
           
        }
    }
    render() {
        return (
            <Container style={{  backgroundColor: 'white'}}>
               
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
export default connect(mapStateToProps, mapDispatchToProps)(Create);