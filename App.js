import React, { useState } from 'react';
import { StyleSheet, View, Image, DrawerActions } from 'react-native';
import { Header, Left, Right, Icon, Button, Body } from 'native-base';
import { navigation } from 'react-navigation';

import Map from './components/Map';
// import Header from './components/Header';
import LoginPage from './components/Login';
// import MenuView from './components/Menu';
import PrimaryNav from './AppContainer'

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header transparent>
                    <Left>
                        <Button
                            transparent
                            onPress={() => navigation.navigate('DrawerOpen')}>
                            <Icon name='menu' style={{ color: '#E52538', fontSize: 25 }}></Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Image
                            source={require('./assets/myvega-logo.png')}
                            style={{ width: 110, height: 35, marginRight: 150 }} />
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='map' style={{ color: '#E52538', fontSize: 25 }} />
                        </Button>
                    </Right>
                </Header>
                <PrimaryNav>
                </PrimaryNav>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    logo: {
        width: 200, height: 35, resizeMode: "contain"
    },
});
