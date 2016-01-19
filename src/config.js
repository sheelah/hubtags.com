const config = {
  // Environments
  'localhost': {
      authUrl: 'https://obscure-scrubland-3081.herokuapp.com/authenticate',
      clientId: '8df2128b00fcc1dc1445'
  },

  'labelr.surge.sh': {
      authUrl: 'https://secure-crag-7197.herokuapp.com/authenticate',
      clientId: 'a5361c10ef0106e96efc'
  }
}[location.hostname];

export default config;