import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class DashboardScreen extends Component {
    render() {

        const { params } = this.props.navigation.state;
        const first = params ? params.first : null;
        const last = params ? params.last : null;
        const dob = params ? params.dob : null;
        const email = params ? params.email : null;
        const address = params ? params.address : null;


        return (
            <View style={styles.container}>
                <Text>First: {JSON.stringify(first)}</Text>
                <Text>Last: {JSON.stringify(last)}</Text>
                <Text>DOB: {JSON.stringify(dob)}</Text>
                <Text>Email: {JSON.stringify(email)}</Text>
                <Text>Address: {JSON.stringify(address)}</Text>
            </View>
        )
    }
}
export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});