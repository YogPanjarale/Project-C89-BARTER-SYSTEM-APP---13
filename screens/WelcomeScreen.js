import React, { Component } from 'react';
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Image
} from 'react-native';
import styles from "../Styles";
class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
                  <Image source={require('../assets/splashhome.png')}/>
            </View>
        );
    }
}

export default WelcomeScreen;
