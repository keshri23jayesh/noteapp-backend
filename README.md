# Note-Taking Application Backend

This is the backend service for the Note-Taking Application. It provides RESTful API endpoints for user authentication and note management.

## Features

- User registration and login with JWT-based authentication
- CRUD operations for notes
- Full-text search for notes by title, body, or tags
- Error handling and validation for API requests

## Technologies

- Node.js
- Express
- MongoDB with Mongoose
- JWT for authentication
- Jest and Supertest for testing

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/note-taking-backend.git
    cd note-taking-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with the following content:
    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/notes
    JWT_SECRET=your_jwt_secret
    ```

4. Start the server:
    ```bash
    npm start
    ```

### API Endpoints

#### User Registration

- **URL:** `/register`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "username": "username",
        "email": "user@example.com",
        "password": "password123"
    }
    ```

#### User Login

- **URL:** `/login`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "username": "username",
        "password": "password123"
    }
    ```


#### Create Note

- **URL:** `/notes`
- **Method:** `POST`
- **Headers:**
    ```json
    {
        "Authorization": "Bearer jwt_token"
    }
    ```
- **Body:**
    ```json
    {
        "title": "Note Title",
        "body": "Note Body",
        "tags": ["tag1", "tag2"]
    }
    ```
- **Response:**
    ```json
    {
        "id": "note_id",
        "title": "Note Title",
        "body": "Note Body",
        "tags": ["tag1", "tag2"],
        "userId": "user_id"
    }
    ```

#### Get All Notes

- **URL:** `/notes`
- **Method:** `GET`
- **Headers:**
    ```json
    {
        "Authorization": "Bearer jwt_token"
    }
    ```
- **Response:**
    ```json
    [
        {
            "id": "note_id",
            "title": "Note Title",
            "body": "Note Body",
            "tags": ["tag1", "tag2"],
            "userId": "user_id"
        },
        ...
    ]
    ```

#### Get Note by ID

- **URL:** `/notes/:id`
- **Method:** `GET`
- **Headers:**
    ```json
    {
        "Authorization": "Bearer jwt_token"
    }
    ```
- **Response:**
    ```json
    {
        "id": "note_id",
        "title": "Note Title",
        "body": "Note Body",
        "tags": ["tag1", "tag2"],
        "userId": "user_id"
    }
    ```

#### Update Note

- **URL:** `/notes/:id`
- **Method:** `PUT`
- **Headers:**
    ```json
    {
        "Authorization": "Bearer jwt_token"
    }
    ```
- **Body:**
    ```json
    {
        "title": "Updated Note Title",
        "body": "Updated Note Body",
        "tags": ["tag1", "tag2"]
    }
    ```
- **Response:**
    ```json
    {
        "id": "note_id",
        "title": "Updated Note Title",
        "body": "Updated Note Body",
        "tags": ["tag1", "tag2"],
        "userId": "user_id"
    }
    ```

#### Delete Note

- **URL:** `/notes/:id`
- **Method:** `DELETE`
- **Headers:**
    ```json
    {
        "Authorization": "Bearer jwt_token"
    }
    ```



## License

This project is licensed under the MIT License.
