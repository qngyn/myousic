import { pool } from '../config/database.js'

const createGroup = async (req, res) => {
    try {
        const { group_name, number_of_users, age_restricted, group_type, last_active, admin } = req.body

        const results = await pool.query(
            `
                INSERT INTO groups (group_name, number_of_users, age_restricted, group_type, last_active, admin)
                VALUES ($1, $2, $3, $4, $5, $6)
                RETURNING *
            `,
            [group_name, number_of_users, age_restricted, group_type, last_active, admin]
        )
        res.status(201).json(results.rows[0])
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

const getGroups = async (req, res) => {
    try {
        const groups = await pool.query("SELECT * FROM groups ORDER BY id ASC")
        res.status(200).json(groups.rows)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

const getGroup = async (req, res) => { 
    try {
        const id = parseInt(req.params.id)
        const results = await pool.query('SELECT * FROM groups WHERE id = $1', [id])
        res.status(200).json(results.rows[0])
    } catch (err) {
        res.status(409).json( { error: err.message } )
    }
}

const updateTrip = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const { group_name, number_of_users, age_restricted, group_type, last_active } = req.body
        const results = await pool.query(
            `UPDATE groups
            SET group_name = $1, number_of_users = $2, age_restricted = $3, group_type = $4, last_active = $5
            WHERE id = $6`,
            [group_name, number_of_users, age_restricted, group_type, last_active]
        )
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

const deleteGroup = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const results = await pool.query('DELETE FROM groups WHERE id = $1', [id])
        res.status(200).json(results.rows[0])
      }
      catch (error) {
        res.status(409).json( { error: error.message } )
      }

}

export default {
    createGroup, 
    getGroups,
    getGroup,
    updateTrip,
    deleteGroup
}
