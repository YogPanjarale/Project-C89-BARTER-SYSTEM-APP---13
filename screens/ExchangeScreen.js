import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import styles from '../Styles';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase/app'
import db from '../config'
// import { Header, Icon } from 'react-native-elements';
import MyHeader from '../components/MyHeader'
class ExchangeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_itemName: '',
            input_description: ''
        };
    }
    createUniqueId=()=> {
        return Math.random().toString(36).substring(7);
    }
    addItem = (itemName, description) => {
        var user_id = firebase.auth().currentUser.email
        uniquiId=this.createUniqueId()
        db.collection('Items').add({
            "user_id": user_id,
            "item_name": itemName,
            "description": description,
            "exchangeId":uniquiId
        }).then((resopnse) => {
            return alert('Item ready to exchanged', '', [{
                text: 'Ok', onPress: () => {
                    this.props.navigation.navigate('HomeScreen')
                }
            }])
        })
        this.setState({
            input_itemName: '',
            input_description: ''
        })

    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MyHeader title="Exchanges Item Screen" navigation={this.props.navigation}/>
                <View style={[styles.container]}>
                    <TextField
                        id=" Item Name"
                        label="Item Name"
                        defaultValue={this.state.input_itemName}
                        onChange={event => {
                            const { value } = event.target;
                            this.setState({ input_itemName: value });
                        }}
                        style={{ width: '80%' }}

                    />
                    <TextField
                        id="Description"
                        label="Description"
                        defaultValue={this.state.input_description}
                        onChange={event => {
                            const { value } = event.target;
                            this.setState({ input_description: value });
                        }}
                        multiline
                        style={{ width: '80%' }}
                    />
                    <TouchableOpacity style={[styles.button, {
                        alignSelf: 'stretch', width: null, paddingHorizontal: 20, margin: 30, marginTop: 30
                    }]}
                        onPress={() => { this.addItem(this.state.input_itemName, this.state.input_description) }}
                    >
                        <Text style={[styles.buttonText, { fontSize: 20 }]}>
                            Add Item
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default ExchangeScreen;