import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { Header, Left, Right, Icon } from 'native-base';

class Accueil extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header style={styles.header}>
          <Left style={{paddingRight: 250}}>
            
            <Icon name="menu" onPress= {() => this.props.navigation.openDrawer()}/>
            
          </Left>
        </Header>
        <View style={{height: 150, backgroundColor: '#a5d022', alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('../Images/evolve.png')} style={{height: 120, width: 120,
      borderRadius: 60}}/>
    </View>
        <SafeAreaView style={styles.container_image}>
          <Text style={styles.message}>Votre code à scanner</Text>
                    <Image
                    style={styles.image}
                    source={require('../Images/codeBarre.png')}
                    />
                </SafeAreaView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
      flex:1
  },
  textinput: {
      marginLeft: 75,
      marginRight: 75,
      height: 40,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5,
      margin: 4,
      
  },
  view_container: {
      flex: 1
  },
  button:{
      marginLeft: 75,
      marginRight: 75,
      backgroundColor: '#a5d022'
  },
  container_image:{
      flex:1,
      marginLeft: 75,
      marginRight: 75,
      marginTop: 75
  },
  image:{
      width: 240, 
      height: 240,
  },
  message:{
      fontWeight: 'bold',
      marginTop: 16,
      marginBottom: 5,
      textAlign: 'center',
  },
  linkSignup:{
      color:'#a5d022',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 5,
      marginBottom: 5,
  },
  container:{
      flex: 1,
      backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#a5d022'
  }, 
  button2: {
      
  }
})
export default createAppContainer(Accueil);