import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

class UserInformationScreen extends Component {
    constructor() {
        super();
        this.state = {
            first: '',
            last: '',
            dob: '',
            email: '',
            address: '',
            userTypeIndex: 0
        }
    }

    handleUserTypeChange = index => {
        this.setState({
            ...this.state,
            userTypeIndex: index
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style = {styles.header1}>
                    Please tell us more about you
                </Text>
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "First"
                    placeholderTextColor = "#808080"
                    onChangeText={(text) => this.setState({first: text})}
                    autoCapitalize = "words" />
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Last"
                    placeholderTextColor = "#808080"
                    onChangeText={(text) => this.setState({last: text})}
                    autoCapitalize = "words" />
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Date of Birth"
                    placeholderTextColor = "#808080"
                    onChangeText={(text) => this.setState({dob: text})}
                    autoCapitalize = "characters" />
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Email"
                    placeholderTextColor = "#808080"
                    onChangeText={(text) => this.setState({email: text})}
                    autoCapitalize = "none" />
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Address"
                    placeholderTextColor = "#808080"
                    onChangeText={(text) => this.setState({address: text})}
                    autoCapitalize = "words" />
                <Text style = {styles.header2}>
                    How do you get to church?
                </Text>
                <Text style = {styles.header3}>
                    Select all that apply
                </Text>
                <SegmentedControlTab
                    values = {["I ride", "I drive"]}
                    selectedIndex = {this.state.userTypeIndex}
                    onTabPress = {(index) => this.setState({userTypeIndex: index})} />
                




                <Button title=">" onPress={()=>this.props.navigation.navigate('DashboardScreen', {...this.state})} />
            </View>
        )
    }
}
export default UserInformationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 30,
        paddingRight: 30
    },
    header1: {
        fontSize: 20,
        textAlign: 'center'
    },
    header2: {
        fontSize: 25,
        textAlign: 'left',
        marginTop: 5
    },
    header3: {
        fontSize: 10,
        textAlign: 'left',
        marginTop: 5,
        marginBottom: 20
    },
    input: {
        margin: 15,
        height: 40,
        borderBottomColor: '#000000',
        borderBottomWidth: 2
    },
    button: {
        padding: 5,
        height: 40,
        width: 40,
        borderRadius: 80,
        backgroundColor: '#808080',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
        
    }
});