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
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Item from '../components/Item'
import MyHeader from '../components/MyHeader'

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    componentDidMount = () => {
        this.getItems()
    }
    getItems = async () => {
        this.req = await db.collection('Items').onSnapshot(
            (reqest) => {
                var list = reqest.docs.map(document => document.data())
                this.setState({ items: list })
                console.log(list)
            },
            (error) => {
                console.log(error)
            }
        )
    }
    selectItem = async (item) => {
        console.log(`Item ${item.item_name} Excahanged`)
        this.props.navigation.navigate("ReciverDetailsScreen",{"details":item})
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MyHeader title='Home Screen' navigation={this.props.navigation}/>
                <View style={styles.view}>
                    <ScrollView>
                        <FlatList
                            data={this.state.items}
                            keyExtractor={(item, index) => String(index)}
                            renderItem={({ item, i }) => (
                                <Item
                                    key={i}
                                    item={item}
                                    onPress={() => { this.selectItem(item) }}
                                />
                            )}
                        />
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default HomeScreen;