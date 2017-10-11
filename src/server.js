import Koa from 'koa';
import qs from 'qs';
import io from 'socket.io-client';
import getServerInfo from './handlers/getServerInfo';
import getPlayersStats from './handlers/getPlayersStats';
import queryGameServer from './utils/queryGameServer';
import config from './config';

const server = new Koa();

(async () => {
  const {
    name,
    map,
    raw: { game },
    query: { host, port },
  } = await queryGameServer();

  const handshakeData = qs.stringify({
    serverId: config.serverId,
    type: 'game',
    name,
    map,
    game,
    host,
    port,
  });

  const socket = io(`${config.SERVER_URL}?${handshakeData}`, {
    transports: ['websocket'],
    path: '/ws',
  });

  socket.on('connect_error', err => console.log(err));
  socket.on('connect', () => console.log('Socket is connected'));
  socket.on('disconnect', () => console.log('Socket is disconnected'));

  socket.on('get_server_info', async () => getServerInfo(socket));
  socket.on('get_players_stats', async () => getPlayersStats(socket));

  setInterval(async () => {
    await getServerInfo(socket);
    await getPlayersStats(socket);
  }, 5000);
})();

export default server;

