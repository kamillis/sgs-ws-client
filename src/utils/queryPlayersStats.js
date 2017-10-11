import dbConnection from './dbConnection';

export function queryPlayers() {
  return new Promise((resolve, reject) => {
    dbConnection.query('SELECT * FROM csstats', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

export function queryPlayersWeapons() {
  return new Promise((resolve, reject) => {
    dbConnection.query('SELECT * FROM csstats_weapons', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

export default async function queryPlayersStats() {
  const players = await queryPlayers();
  const playersWeapons = await queryPlayersWeapons();
  return players.map((player) => {
    const weapons = playersWeapons.filter(weapon => weapon.player_id === player.id);
    return Object.assign({ weapons }, player);
  });
}
