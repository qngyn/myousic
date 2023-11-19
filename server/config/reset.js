import { pool } from './database.js'
import './dotenv.js'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import fs from 'fs'

// const currentPath = fileURLToPath(import.meta.url)
// const tripsFile = fs.readFileSync(path.join(dirname(currentPath), '../config/data/data.json'))
// const tripsData = JSON.parse(tripsFile)

//create group table
const createGroup = async () => {
    const createGroupTableQuery = `
        CREATE TABLE IF NOT EXISTS groups (
            id serial PRIMARY KEY 
            group_name varchar(100) NOT NULL
            number_of_users interger NOT NULL, 
            age_restricted integer NOT NULL, 
            group_type varchar(100) NOT NULL, 
            last_active DATE FORMAT 'dd.mm.yyyy' NOT NULL, 
            admin varchar(100) NOT NULL
        )
    `
    try {
        const res = await pool.query(createGroupTableQuery)
        console.log('🎉 groups table created successfully')
    } catch (err) {
        console.error('⚠️ error creating groups table', err)
    }
}

//create user table 
const createUser = async () => {
    const createUserTableQuery = `
        CREATE TABLE IF NOT EXISTS user_group (
            id serial PRIMARY KEY, 
            username varchar(100) NOT NULL,
            role varchar(100) NOT NULL,
            password varchar(100) NOT NULL,
            points integer NOT NULL,
            age integer NOT NULL
        );
    `
    try {
        const res = await pool.query(createUserTableQuery)
        console.log('🎉 user table created successfully')
    } catch (err) {
        console.error('⚠️ error creating user table', err)
    }
}

//create playlist table 
const createPlaylist = async () => {
    const createPlaylistTableQuery = `
        CREATE TABLE IF NOT EXISTS playlist (
            id serial PRIMARY KEY, 
            song_name varchar(100) NOT NULL,
            artist varchar(100) NOT NULL,
            genre varchar(100) NOT NULL,
            album varchar(100),
        );
    `
    try {
        const res = await pool.query(createPlaylistTableQuery)
        console.log('🎉 playlist table created successfully')
    } catch (err) {
        console.error('⚠️ error creating playlist table', err)
    }
}

//create group_playlist table
const createGroupPlaylist = async () => {
    const createGroupPlaylistTableQuery = `
        CREATE TABLE IF NOT EXISTS playlist (
            id int NOT NULL, 
            group_id int NOT NULL,
            PRIMARY KEY (group_id, id),
            FOREIGN KEY (group_id) REFERENCES groups(id) ON UPDATE CASCADE,
            FOREIGN KEY (group_id) REFERENCES playlist(id) ON UPDATE CASCADE,
        );
    `
    try {
        const res = await pool.query(createGroupPlaylistTableQuery)
        console.log('🎉 group_playlist table created successfully')
    } catch (err) {
        console.error('⚠️ error creating group_playlist table', err)
    }
}

// const createUserGroup = async () => {
//     const createUserGroupTableQuery = `
//         CREATE TABLE IF NOT EXISTS user_group (
//             group_id int NOT NULL, 
//             user_id int NOT_NULL,
//             PRIMARY KEY (group_id, user_id),
//             FOREIGN KEY (group) REFERENCES trips(id) ON UPDATE CASCADE;,
//             FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE
//         )
//     `
// }

createGroup();
createUser();
createPlaylist();
createGroupPlaylist();