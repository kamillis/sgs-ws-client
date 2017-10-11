import queryPlayersStats from '../utils/queryPlayersStats';

export default async function getPlayersStats(socket) {
  const serverId = socket.id;
  try {
    const stats = await queryPlayersStats();
    socket.emit('players_stats', { serverId, data: stats });
  } catch (err) {
    socket.emit('players_stats_error', { serverId, err });
  }
}
