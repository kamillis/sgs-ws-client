import mysql from 'mysql';
import config from '../config';

export default mysql.createConnection(config.STATS_DATABASE);
