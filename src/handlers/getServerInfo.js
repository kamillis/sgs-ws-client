import queryGameServer from '../utils/queryGameServer';

export default async function getServerInfo(socket) {
  const serverId = socket.id;
  try {
    const state = await queryGameServer();
    socket.emit('server_info', { serverId, data: state });
  } catch (err) {
    socket.emit('server_info_error', { serverId, err });
  }
}
