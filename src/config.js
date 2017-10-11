import uuid from 'uuid/v4';

const global = {
  serverId: uuid(),
  GAME_TYPE: process.env.GAME_TYPE || 'cs16',
  GAME_HOST: process.env.GAME_HOST || '192.168.60.75',
};

const config = {
  production: Object.assign({
    SERVER_URL: 'ws://localhost:5000',
    STATS_DATABASE: {
      host: '192.168.60.75',
      user: 'sgsmonitor',
      password: 'monitor1234',
      database: 'sgsmonitor',
    },
  }, global),
  development: Object.assign({
    SERVER_URL: 'ws://localhost:5000',
    STATS_DATABASE: {
      host: '192.168.60.75',
      user: 'sgsmonitor',
      password: 'monitor1234',
      database: 'sgsmonitor',
    },
  }, global),
};

export default config[process.env.NODE_ENV || 'development'];
