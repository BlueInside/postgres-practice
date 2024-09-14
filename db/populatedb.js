#! /usr/bin/env node

require('dotenv').config();

const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 )
);

INSERT INTO usernames (username)
VALUES
('kaczka dziwaczka'),
('David Henderson'),
('Outcast 2000');
`;

async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: process.env.DATABASE_URL
    })

    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

main();