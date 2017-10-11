import Koa from 'koa';
import io from 'socket.io-client';
import getServerInfo from './handlers/getServerInfo';
import config from './config';

const server = new Koa();

const socket = io(`${config.SERVER_URL}?type=game`, {
  transports: ['websocket'],
  path: '/ws',
});

socket.on('connect', () => console.log('Socket is connected'));
socket.on('connect_error', err => console.log(err));
socket.on('disconnect', () => console.log('Socket is disconnected'));

socket.on('get_server_info', async () => getServerInfo(socket));

setInterval(async () => getServerInfo(socket), 5000);

export default server;

