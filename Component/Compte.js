import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Header, Left, Right, Icon } from 'native-base';
import { Toggle } from './Toggle'

class Compte extends React.Component {
  state = { 
    alertsIsOn: true,
    newsletterIsOn: false,
    trackingIsOn: true,
  }

  alertsToggleHandle(state) {
    this.setState({ alertsIsOn: state })
  }

  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })

  render() {
    return (
      <SafeAreaView style={styles.container}>
            <Header style={styles.header}>
              <Left style={{paddingRight: 250}}>
                  
                  <Icon name="menu" onPress= {() => this.props.navigation.openDrawer()}/>
                  
              </Left>
            </Header>
            <SafeAreaView>
              <Text style={styles.text}>Compte</Text>
              <View style={styles.view_container}>
                    <TextInput style={styles.textinput} placeholder='Email' />
                    <TextInput style={styles.textinput} placeholder='Mot de Passe' />
                    <TextInput style={styles.textinput} placeholder='Nom' />
                    <TextInput style={styles.textinput} placeholder='Prenom' />
                    <TextInput style={styles.textinput} placeholder='Téléphone' />
                    
                    <View style={styles.view_checkbox}>
                      <View style={styles.text_checkbox}>
                        <Text>Activer l'alerte SMS</Text>
                      </View>
                      <Toggle
                        isOn={this.state.alertsIsOn}
                        onToggle={state => this.alertsToggleHandle(state)}
                      />
                    </View>
                      
                    <View style={styles.container_button}>
                      <View style={styles.button}>
                        <TouchableOpacity style={{backgroundColor:'red'}} onPress={() => {}}>
                          <Text style={styles.touchableOpacity}>Mettre à jour du profil</Text>
                        </TouchableOpacity>
                      </View>
                  </View>

              </View>
            </SafeAreaView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#a5d022'
  },
  text : {
      fontWeight: 'bold',
      marginTop: 16,
      marginBottom: 5,
      textAlign: 'center'
  },
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
    flex: 3
},
// button:{
//   flex:1,
//   marginLeft: 75,
//   marginRight: 75,
//   margin: 5,
// },
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
view_checkbox:{
  
  flexDirection: 'row',
  paddingTop: 10,
},
text_checkbox:{
  flex: 2,
  fontWeight: 'bold',
  // marginTop: 16,
  // marginBottom: 5,
  marginLeft: 75,
  textAlign: 'center',
  backgroundColor:'blue',
  color: 'red'
},
checkbox:{
  flex: 1,
  marginBottom: 25,
},
container_button:{
  flex: 3,
  flexDirection: 'row',
  paddingTop: 30,
},
button:{
  flex:1,
  backgroundColor: '#a5d022'
},
text_button:{
  flex:2,
},
touchableOpacity:{
  padding: 10,
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 2,
  borderColor: '#ddd',
  borderBottomWidth: 0,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 2,
  textAlign:'center'
}
});

export default createAppContainer(Compte);