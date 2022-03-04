import mysql from 'mysql2';

import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection(function(err,conn){
    console.log('la DB is conected uhija')
// Connection is automatically released when query resolves
});


export default pool;