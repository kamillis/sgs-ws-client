import queryPlayersStats from '../utils/queryPlayersStats';

export default async function getPlayersStats(socket) {
  try {
    const stats = await queryPlayersStats();
    socket.emit('players_stats', stats);
  } catch (err) {
    socket.emit('players_stats_error', err);
  }
}
