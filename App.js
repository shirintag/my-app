import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// import LoginView from './component/LoginView';
import Map from './component/Map';

export default function App() {
    return (
        <View style={styles.container}>
            <Map />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    }
});
