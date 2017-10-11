import queryGameServer from '../utils/queryGameServer';

export default async function getServerInfo(socket) {
  try {
    const state = await queryGameServer();
    socket.emit('server_info', state);
  } catch (err) {
    socket.emit('server_info_error', err);
  }
}
