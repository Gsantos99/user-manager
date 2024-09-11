import pool from "../config/db.js";

export const getAllUsers = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

export const createUser = async (name, email, phone, date_of_birth) => {
  const result = await pool.query(
    "INSERT INTO users (name, email, phone, date_of_birth) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, email, phone, date_of_birth]
  );
  return result.rows[0];
};

export const getUserById = async (id) => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0];
};

export const updateUser = async (id, name, email, phone, date_of_birth) => {
  await pool.query("UPDATE users SET name = $1, email = $2, phone = $3, date_of_birth = $4 WHERE id = $5", [
    name,
    email,
    phone,
    date_of_birth,
    id,
  ]);
};

export const deleteUser = async (id) => {
  await pool.query("DELETE FROM users WHERE id = $1", [id]);
};
