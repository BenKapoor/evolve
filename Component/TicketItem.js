// Components/TicketItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

class TicketItem extends React.Component {
  render() {
    // const ticket = this.props.ticket
    const { ticket, displayDetailForTicket } = this.props;
    console.log('ticketItem:',ticket)
    return (
        <TouchableOpacity style={styles.main_container}
          onPress={() => displayDetailForTicket(ticket.id)}>
            <Image
                    style={styles.image}
                    source={require("../Images/enseignes/leclerc.jpg")}
                />
          <View style={styles.content_container}>
            <View style={styles.description_container}>
                {/* <Text style={styles.street}> {ticket.street}, {ticket.town}</Text>
                <Text style={styles.prix_ht}> Magasin: {ticket.magasin_name} €</Text> */}
                <Text style={styles.prix_ttc}> Prix TTC: {ticket.prixttc} €</Text>
                <Text style={styles.date_debut}>Achat effectué le {ticket.release_date}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 220,
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
  image: {
    width: 220,
    height: 80,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5,
  },
  header_container: {
    flex: 4,
    flexDirection: 'row',
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
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
})

export default TicketItem