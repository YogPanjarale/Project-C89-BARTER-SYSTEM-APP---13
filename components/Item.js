import React, { Component } from 'react';
import { 
    View,
    Text
 } from 'react-native';
import { Icon } from 'react-native-elements';


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={{
                backgroundColor:'#ffffffdd',
                borderRadius:20,
                margin:10,
                padding:15,
            }}>
                <Text
                style={{fontWeight:'bold'}}
                >{this.props.item.item_name}
                </Text>
                <Text
                style={{}}
                >{this.props.item.description}
                </Text>
                <Text
                style={{fontWeight:400,marginTop:10}}
                >By : <Text
                style={{fontWeight:200}}
                >{this.props.item.user_id}
                </Text>
                </Text>
               
                <Icon
                name={'cached'}
                reverse
                raised
                color={'#FFAA00'}
                size={15}
                onPress={()=>{console.log("Icon Pressed");this.props.onPress()}}
                />
            </View>
        );
    }
}

export default Item;