const config = {
  // Environments
  'localhost': {
      authUrl: 'https://obscure-scrubland-3081.herokuapp.com/authenticate',
      clientId: '8df2128b00fcc1dc1445'
  },

  'labelr.surge.sh': {
      authUrl: '',
      clientId: ''
  }
}[location.hostname];

export default config;