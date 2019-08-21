import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign In With Google" onPress={()=>{
                    this.props.navigation.navigate('UserInformationScreen');
                }} />
                <Text>LoginScreen</Text>
            </View>
        )
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});