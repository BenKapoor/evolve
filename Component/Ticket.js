import React from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, SafeAreaView } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { Header, Left, Right, Icon } from 'native-base';
import TicketItem from './TicketItem'
import { getTicketFromApi } from '../Api/api'

class Ticket extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tickets: [],
      magasin: null,
    }
  }

  componentDidMount() {
    fetch('https://bridge.buddyweb.fr/api/evolve/factures')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then((result) => { 
        console.log(result);
        this.setState({ tickets: result });
        console.log(this.tickets) 
      }).catch((error) => console.error(error));
    
  //   getTicketFromApi().then(data => {
  //     this.setState({ tickets: data })
  //     console.log('tickets:', this.state.tickets)
  // })
  
}

  _displayDetailForTicket= (idTicket) => {
    console.log("Display ticket with id " + idTicket);
    this.props.navigation.navigate("TicketDetail", { idTicket: idTicket })
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
            <Header style={styles.header}>
            <Left style={{paddingRight: 250}}>
                <Icon name="menu" onPress= {() => this.props.navigation.openDrawer()}/>
            </Left>
            </Header>
          <View style={styles.main_container}>           
            {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
            <FlatList
              data={this.state.tickets}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => (
                <TicketItem 
                  ticket={item} 
                  displayDetailForTicket={this._displayDetailForTicket}
                  />
              )}
            />
      </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 5,
        textAlign: 'center'
    },
    header: {
      backgroundColor: '#a5d022'
    },
    main_container: {
      flex: 1,
      marginTop: 20
    },
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    }
});
export default createAppContainer(Ticket);