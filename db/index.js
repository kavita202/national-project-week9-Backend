import pg from "pg";
import * as config from '../config.js'

const pool = new pg.Pool({
  //Heroku credentials are now environment variables
  connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false},
  });

export default function query(text, params) {
    return pool.query(text, params)
}