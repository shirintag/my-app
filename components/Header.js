import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
            <View style={styles.logoContainer}>
                <TouchableOpacity onPress={() => console.log('pressed')}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/baseline_menu_black_18dp.png')}
                    />
                </TouchableOpacity>
                <Image
                    style={styles.logo}
                    source={require('../assets/myvega-logo.png')} />
            </View>
            <View style={styles.viewContainer}>
                <TouchableOpacity onPress={() => console.log('pressed')}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/baseline_map_black_18dp.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('pressed')}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/baseline_more_vert_black_18dp.png')} />
                </TouchableOpacity>
            </View>            
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logoContainer: {
        width: '50%',
        height: 90,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around' ,
        alignItems: 'center'
    },
    viewContainer: {
        width: '30%',
        height: 90,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 30,
    },
    icon: {
        width: 30,
        height: 30,
        justifyContent: 'space-between',
    }

});

export default Header;