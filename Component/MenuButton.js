import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';


export default class MenuButton extends React.Component {
  render() {
    return (
        <Ionicons 
            name="md-menu"
            
            size={styles.menuIcon}
            onPress={() => {}}
        />
    );
  }
}

const styles = StyleSheet.create({
    menuIcon:{
        zIndex: 9,
        position: 'absolute',
        top: 40,
        left: 20,
    }
})
