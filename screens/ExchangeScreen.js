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
import { Header, Icon } from 'react-native-elements';

class ExchangeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_itemName: '',
            input_description: ''
        };
    }
    addItem = (itemName, description) => {
        var user_id = firebase.auth().currentUser.email
        db.collection('Items').add({
            "user_id": user_id,
            "item_name": itemName,
            "description": description
        }).then((resopnse)=>{
            return alert('Item ready to exchanged','',[{
                text:'Ok', onPress:()=>{
                    this.props.navigation.navigate('HomeScreen')
                }
            }])
        })
        this.setState({
            input_itemName:'',
            input_description:''
        })
        
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    centerComponent={{ text: "Items Add", style: { color: '#fff', fontSize: 20, fontWeight: "bold", } }}
                    backgroundColor='#FFAA00'
                    leftComponent={(
                        <Icon name="list"
                            color={'#fff'}
                            onPress={() => {
                                this.props.navigation.openDrawer();
                            }}
                            
                            size={30}
                        />)}
                // style={{alignSelf:'flex-start'}}
                />
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
                    onPress={()=>{this.addItem(this.state.input_itemName,this.state.input_description)}}
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