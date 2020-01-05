// Récupération du détail d'un film
export function getTicketDetailFromApi (id) {
    return fetch('https://bridge.buddyweb.fr/api/evolve/factures/'+id)
      .then((response) => response.json())
      .then((data => {
          console.log('data:', data)
      }))
      .catch((error) => console.error(error));
  }

  export function getTicketFromApi () {
    return fetch('https://bridge.buddyweb.fr/api/evolve/factures')
      .then((response) => response.json())
      .then((data => {
          console.log('data:', data)
      }))
      .catch((error) => console.error(error));
  }