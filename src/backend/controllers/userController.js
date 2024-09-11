import * as userRepository from "../repositories/userRepository.js";

export async function getAllUsers(req, res) {
  try {
    const users = await userRepository.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const createUser = async (req, res) => {
  const { name, email, phone, date_of_birth } = req.body;
  try {
    const newUser = await userRepository.createUser(name, email,phone, date_of_birth);
    res.json(newUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userRepository.getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, date_of_birth } = req.body;
  try {
    await userRepository.updateUser(id, name, email, phone, date_of_birth);
    res.send("User was updated!");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await userRepository.deleteUser(id);
    res.send("User was deleted!");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
