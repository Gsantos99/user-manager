# User Management

This is a simple user management backend application that performs CRUD (Create, Read, Update, Delete) operations on user data. The project is built using **Node.js**, **Express**, and **PostgreSQL**. It follows a clean architecture with a separation of concerns between **Routes**, **Controllers**, and **Repositories**.

## Features

- **Create a user**: Add a new user to the database.
- **Get all users**: Retrieve a list of all users.
- **Get user by ID**: Fetch user details by their unique ID.
- **Update a user**: Update the information of a specific user.
- **Delete a user**: Remove a user from the database.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Environment Management**: dotenv
- **Database Connection Pooling**: pg (node-postgres)
- **Live Reload**: nodemon

## Project Structure
The project is organized as follows:

````
backend/
├── config/             # Database configuration
│   └── db.js
├── controllers/        # Logic to handle requests
│   └── userController.js
├── repositories/       # Database queries
│   └── userRepository.js
├── routes/             # Application routes
│   ├── router.js       # Main router file
│   └── userRoutes.js   # User-specific routes
├── .env                # Environment variables
├── index.js            # Application entry point
├── package.json        # Dependencies and scripts
└── .gitignore          # Ignored files and folders
``````


