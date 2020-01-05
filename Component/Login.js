import React, { Component } from 'react';
import { StyleSheet , Button, TextInput, Image, View, Text, SafeAreaView  } from 'react-native';

import { Header, Left, Right, Icon } from 'native-base';

class Login extends Component {

    _displayRegister() {
        this.props.navigation.navigate("Register")
    }

    _displayAccueil() {
        this.props.navigation.navigate("Accueil")
    }

    render() {  
        // console.log(this.props)      
        return (           
            <SafeAreaView  style={styles.main_container}>
                <Header style={styles.header}>
                    {/* <Left style={{paddingRight: 250, paddingTop: 20}}>
                        
                        <Icon name="menu" onPress= {() => this.props.navigation.openDrawer()}/>
                        
                    </Left> */}
                </Header>   
                <SafeAreaView style={styles.container_image}>
                    <Image
                    style={styles.image}
                    source={require('../assets/icon.png')}
                    />
                </SafeAreaView>
                
                <View style={styles.view_container}>
                    <TextInput style={styles.textinput} placeholder='Email' />
                    <TextInput style={styles.textinput} placeholder='Mot de Passe' />
                    <View style={styles.button}>
                        <Button color="#3b964f" title='Connecter' onPress={() => {this._displayAccueil()}}/>
                    </View>
                    
                    <View>

                        <Text style={styles.messageSignup }>Inscrivez-vous !</Text>
                        <Text style={styles.linkSignup } onPress={() => {this._displayRegister()}}>Cliquez ici !</Text>
                    </View>
                    
                </View>
            </SafeAreaView > 
        )
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
        borderBottomWidth: 1,
        color: "#000",
        
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
        width: 250, 
        height: 250,
    },
    messageSignup:{
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

  export default Login;