import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Image
} from 'react-native';
import TextField from '@material-ui/core/TextField';

import firebase from 'firebase'
import 'firebase/auth'
import db from '../config'
// import { TextInput, } from 'react-native-paper';
// import { Icon } from 'react-native-elements'

import MyTextInput from '../components/MyTextInput'
import styles from "../Styles";

class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_email: 'test@abc.com',
            input_password: '123456'
        };
    }
    LogIn = async (email, password) => {
        console.log(this.state, email, password);
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                //this.props.navigation.navigate('Drawer')

                return alert('Logged In', response)
            })
            .catch((error) => {
                var errorcode = error.code;
                var errormessege = error.message;
                console.log(error)
                return alert(errormessege)
            })
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/splashhome.svg')} style={styles.HomeImage} />
                {/* <Image source={require('../assets/splashhome.png')} style={styles.HomeImage}/> */}

                <Text style={styles.HomeHeading}>
                    Barter
                  </Text>
                {/* <MyTextInput placeholder="Email"/> */}
                <TextField
                    id="email Input"
                    label="Email"
                    defaultValue={this.state.input_email}
                    onChange={event => {
                        const { value } = event.target;
                        this.setState({ input_email: value });
                    }}

                    helperText=""
                />
                <TextField

                    id="password input"
                    label="Password"
                    defaultValue=""
                    helperText=""
                    defaultValue={this.state.input_password}
                    onChange={event => {
                        const { value } = event.target;
                        this.setState({ input_password: value });
                    }} 
                    type='password'

                />
                <View style={{ marginVertical: 10 }}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => { this.LogIn(this.state.input_email, this.state.input_password) }}
                    >
                        <Text style={styles.buttonText}>
                            Log In
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            Sign Up
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default WelcomeScreen;
