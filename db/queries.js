const pool = require('./pool');

async function getAllUsernames(query = '') {
    const searchPattern = `%${query}%`;
    const { rows } = await pool.query(`SELECT * FROM usernames WHERE username::TEXT ILIKE $1`, [searchPattern])
    return rows;
}

async function deleteUsernames() {
    await pool.query(`DELETE FROM usernames`)
}


async function insertUsername(username) {
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

module.exports = {
    getAllUsernames,
    insertUsername,
    deleteUsernames
}