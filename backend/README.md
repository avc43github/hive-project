
# Hive Backend

This is the backend server for the Hive social media platform. It provides APIs for user authentication, post management, messaging, and cluster (community) features.

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file based on `.env.example` with your configuration
4. Start the development server:
   ```
   npm run dev
   ```

## API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get JWT token
- `GET /api/auth/me` - Get current user profile

### Post Endpoints

- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a new post
- `GET /api/posts/:id` - Get a specific post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post
- `PUT /api/posts/:id/like` - Like or unlike a post
- `POST /api/posts/:id/comments` - Comment on a post

### User Endpoints

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a specific user
- `PUT /api/users/:id` - Update user profile
- `PUT /api/users/:id/follow` - Follow a user
- `PUT /api/users/:id/unfollow` - Unfollow a user
- `GET /api/users/:id/posts` - Get posts from a user

### Cluster Endpoints

- `GET /api/clusters` - Get all clusters
- `POST /api/clusters` - Create a new cluster
- `GET /api/clusters/:id` - Get a specific cluster
- `PUT /api/clusters/:id` - Update a cluster
- `DELETE /api/clusters/:id` - Delete a cluster
- `PUT /api/clusters/:id/join` - Join a cluster
- `PUT /api/clusters/:id/leave` - Leave a cluster
- `GET /api/clusters/:id/posts` - Get posts for a cluster
- `GET /api/clusters/:id/members` - Get members for a cluster

### Message Endpoints

- `GET /api/messages` - Get all messages
- `POST /api/messages` - Send a new message
- `GET /api/messages/conversations` - Get all conversations
- `GET /api/messages/conversations/:id` - Get a specific conversation
- `PUT /api/messages/:id/read` - Mark a message as read

## Socket.IO Events

- `connection` - User connects
- `join_room` - Join a chat room
- `send_message` - Send a message to a room
- `receive_message` - Receive a message in a room
- `typing` - User is typing
- `user_typing` - Notify others that a user is typing
- `disconnect` - User disconnects

## Models

- User
- Post
- Cluster
- Message

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.io for real-time messaging
- JWT for authentication
- bcryptjs for password hashing
