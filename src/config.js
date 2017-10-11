const global = {
  GAME_TYPE: process.env.GAME_TYPE || 'cs16',
  GAME_HOST: process.env.GAME_HOST || '192.168.60.75',
};

const config = {
  production: Object.assign({
    SERVER_URL: 'ws://localhost:5000',
  }, global),
  development: Object.assign({
    SERVER_URL: 'ws://localhost:5000',
  }, global),
};

export default config[process.env.NODE_ENV || 'development'];
