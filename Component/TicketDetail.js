// Components/TicketDetail.js

import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity } from 'react-native'
import { getTicketDetailFromApi } from '../Api/api'
import { Button } from 'native-base'


class TicketDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ticket: undefined,
      isLoading: false
    }
  }

  componentDidMount() {
    // getTicketDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
    //   this.setState({
    //     ticket: data,
    //     isLoading: false
    //   })
    //   console.log('ticket:', this.state.ticket)
    // })
console.log('id:',this.props.navigation.state.params.idTicket);
    fetch('https://bridge.buddyweb.fr/api/evolve/factures/' + this.props.navigation.state.params.idTicket)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then((result) => { 
        console.log(result);
        this.setState({ ticket: result });
        console.log(this.ticket) 
      }).catch((error) => console.error(error));
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  _displayTicket() {
    if (this.state.ticket != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Image
                    style={styles.image}
                    source={require("../Images/enseignes/leclerc.jpg")}
                />
          <View style={styles.content_container}>
            <View style={styles.description_container}>
                <Text style={styles.street}> {this.state.ticket.street}</Text>
                <Text style={styles.prix_ht}> Magasin: {this.state.ticket.magasin_name} €</Text>
                <Text style={styles.prix_ttc}> Prix TTC: {this.state.ticket.prixttc} €</Text>
                <Text style={styles.date_debut}>Achat effectué le {this.state.ticket.release_date}</Text>
            </View>
            <View style={styles.container_button}>
              <Text style={styles.text_button}>Télécharger en PDF</Text>
              <View style={styles.button}>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.touchableOpacity}>Télécharger</Text>
              </TouchableOpacity >
              
              </View>
              
            </View>
          </View>
        </ScrollView>
      )
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
        {this._displayTicket()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  },
  content_container: {
    flex: 1,
    margin: 5,
  },
  description_container: {
    flex: 4
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1,
    flexDirection: 'row'
  },
  date_debut: {
    textAlign: 'right',
    fontSize: 14,
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14,
    flex: 1
  },
  prix_ht: {
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 1
  },
  prix_ttc: {
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 1,
    fontWeight: 'bold',
  },
  magasin_name: {
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 1
  },
  town: {
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 1
  },
  street: {
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 1,
    fontWeight: '100',
  },
  image: {
    width: 220,
    height: 80,
    margin: 5,
    backgroundColor: 'gray'
  },
  container_button:{
    flex: 3,
    flexDirection: 'row',
    paddingTop: 10,
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
})

export default TicketDetail