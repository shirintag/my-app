import React from 'react';
import { createAppContainer, SafeAreaView, ScrollView, Dimentions } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createStackNavigator, StackNavigator } from 'react-navigation-stack';
import Header from './components/Header';
import LoginScreen from './components/Login';
import MapScreen from './components/Map';
import GuideScreen from './components/GuideScreen';
import FaqScreen from './components/FaqScreen';

const customeDrawerComponent = props => {
    return (
        <SafeAreaView>
            <ScrollView> 
                <DrawerItems {...props}/>
            </ScrollView>
        </SafeAreaView>
    );
}

const DrawerNavigator = createDrawerNavigator({
    Login,
    Map,
    GuideScreen,
    FaqScreen
}, {
    contentComponent: customeDrawerComponent
});

//const RootStack = createStackNavigator({  });
const AppContainer = createAppContainer(DrawerNavigator);
export default AppContainer;