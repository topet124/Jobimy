Jobimy

This project is a full-stack web application built using React for the front-end and MongoDB for the back-end. It includes dynamic routing, dashboard functionality, user authentication, and data management.

Table of Contents

Features
Tech Stack
Prerequisites
Installation
Environment Variables Setup
Starting the Application
Front-end Overview
Back-end Overview
Directory Structure
Contributing
License
Features

React Router: Used for route navigation and passing information between components.
Dynamic Table.js: Powers the dashboard, allowing for dynamic data display and manipulation.
Express Validator: Handles authentication and validation in the back-end.
MongoDB & Mongoose: Provides data persistence and schema-based data modeling.
Full-stack implementation for a seamless user experience.
Tech Stack
Front-end:

React
React Router
Dynamic Table.js (for the dashboard)
Back-end:

Node.js
Express.js
MongoDB
Mongoose
Express Validator
Prerequisites
Ensure you have the following installed:

Node.js (v14 or above)
MongoDB
npm (comes with Node.js)
A running instance of MongoDB (locally or via a cloud service like MongoDB Atlas)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-repo-url.git
cd your-project-directory
Install dependencies for both the front-end and back-end:

Front-end:

bash
Copy code
cd client
npm install
Back-end:

bash
Copy code
cd server
npm install
Environment Variables Setup
To start the application, you will need to set up a .env file in the server directory with the following variables:

makefile

PORT=5106
MONGO_URI=<your-mongo-db-connection-string>
JWT_SECRET=<your-jwt-secret>

MONGO_URI: Your MongoDB connection string, either for local MongoDB or for a cloud MongoDB service like Atlas.
JWT_SECRET: A secret key for handling JSON Web Tokens (JWT) for user authentication.
Example .env file:

env
Copy code
PORT=5106
NODE_ENV=development
PORT=5106
MONGO_URL=mongodb+srv://topet124:london123,@jobimy.sr4i5.mongodb.net/?retryWrites=true&w=majority&appName=Jobimy
JWT_KEY=secret

Starting the Application
Back-end
Ensure MongoDB is running locally or accessible via your MONGO_URI variable.

clone repo
cd jobimy
npm install
npm run dev
This will start the on localhost:5173.

Front-end
Start the React application:

Front-end Overview
React Router is used to handle navigation and passing data between components dynamically.

Components can use the React Router useNavigate and useParams hooks to navigate between routes and pass necessary data.
Example routes:
/dashboard: Displays the main dashboard page.
/profile/:id: Displays a specific user's profile.
Dynamic Table.js is utilized to create a responsive and functional dashboard.

The dashboard allows users to sort, filter, and paginate data.
The data in the table is fetched from the back-end using RESTful API endpoints.
Back-end Overview
Express Validator is used to validate user input during authentication and other forms.

Example validations include checking for required fields, validating email formats, and ensuring password complexity.
MongoDB & Mongoose: MongoDB is used for the database, while Mongoose provides an easy way to model the data.

Mongoose schemas define the structure of data stored in MongoDB.
Example:
User Schema: Defines the structure for storing user information such as name, email, and password.
Directory Structure
bash
Copy code
├── client # Front-end React code
│ ├── public
│ └── src
│ ├── components # Reusable React components
│ ├── pages # Different pages like Dashboard, Profile
│ ├── App.js # Main App component with routing
│ └── index.js # Entry point for React
├── server # Back-end Node.js code
│ ├── config # Configuration files (e.g., MongoDB connection)
│ ├── controllers # Controller functions for each route
│ ├── middleware # Express middlewares (e.g., authentication)
│ ├── models # Mongoose models (e.g., User, auth)
│ ├── routes # API routes (e.g., /auth,)
│ └── server.js # Entry point for the back-end server
└── .env # Environment variables (not included in the repo)
Contributing
If you would like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature-name).
Open a pull request.
License

Contact
For any questions or feedback, please reach out to suletemitope@gmail.com

Jobimy
