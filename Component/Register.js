import React from 'react';
import { StyleSheet , Button, TextInput, Image, View, SafeAreaView  } from 'react-native';

class Register extends React.Component {

    render() {  
        // console.log(this.props)      
        return (            
            <SafeAreaView  style={styles.main_container}>
                <SafeAreaView style={styles.container_image}>
                    <Image
                    style={styles.image}
                    source={require('../assets/icon.png')}
                    />
                </SafeAreaView>
                
                <View style={styles.view_container}>
                    <TextInput style={styles.textinput} placeholder='Email' />
                    <TextInput style={styles.textinput} placeholder='Mot de Passe' />
                    <TextInput style={styles.textinput} placeholder='Nom' />
                    <TextInput style={styles.textinput} placeholder='Prenom' />
                    <TextInput style={styles.textinput} placeholder='Téléphone' />
                    

                    <View style={styles.button}>
                        <Button style={styles.button} title='Inscription' onPress={() => {}}/>
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
        
    },
    view_container: {
        flex: 1
    },
    button:{
        marginLeft: 75,
        marginRight: 75,
        margin: 5,
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
    }
  })

  export default Register