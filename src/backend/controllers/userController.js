import * as userRepository from "../repositories/userRepository.js";

export async function getAllUsers(req, res) {
  try {
    const users = await userRepository.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
