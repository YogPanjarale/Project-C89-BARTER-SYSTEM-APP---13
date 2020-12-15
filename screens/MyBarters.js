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
import { Header, Icon,ListItem } from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Item from '../components/Item'
import MyHeader from '../components/MyHeader'

class MyBarters extends Component {
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
        this.req = await db.collection('AllBarters').onSnapshot(
            (request) => {
                var list = request.docs.map(document => document.data())
                this.setState({ items: [...this.state.items,list] })
                console.log(list)
            },
            (error) => {
                console.log(error)
            }
        )
    }
    selectItem = async (item) => {
        console.log(`Item ${item.item_name} Excahanged`)
        this.props.navigation.navigate("UserDetailsScreen",{"details":item})
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
                                <ListItem
                                    key={i}
                                    title={item['']}
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

export default MyBarters;