import query from 'game-server-query';
import config from '../config';

export default function queryGameServer() {
  return new Promise((resolve, reject) => {
    query({
      type: config.GAME_TYPE,
      host: config.GAME_HOST,
    }, (state) => {
      if (state.error) {
        reject(state.error);
      } else {
        resolve(state);
      }
    });
  });
}
