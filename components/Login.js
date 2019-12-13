import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const LoginPage = props => {
    const [enteredEmail, setEnteredEmail] = useState('');

    const emailInputHandler = enteredEmail => {
        setEnteredEmail(enteredEmail);
        SignUp = (enteredEmail) => {
            try {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(enteredEmail)
                    .then(user => {
                        console.log(user);
                    });
            } catch (error) {
                console.log(error.toString(error));
            }
        }
    };

    const checkUser = (enteredEmail) => {
        setEnteredEmail(enteredEmail);

    };

    return (
        <View style={styles.screen}>
        <Text style={styles.title}>Email</Text>
        <View style={styles.inputContainer}>
            <TextInput
            placeholder="email"
            style={styles.input}
            onChangeText={emailInputHandler}
            value={enteredEmail}
            />
        </View>
        <Button title="verify" onPress={checkUser} style={styles.button} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    inputContainer: {
        width: "80%",
        alignItems: "center"
    },
    input: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
    button: {
        width: "80%",
        backgroundColor: "red"
    },
    title: {
        
    }
});

export default LoginPage;