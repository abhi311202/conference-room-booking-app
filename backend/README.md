# Room Booking Application - Backend

## Overview
This is the backend part of the Room Booking Application built using Node.js, Express, and MongoDB. The backend handles all the server-side logic, including API endpoints for managing room bookings.

## Project Structure
- **src/**: Contains the source code for the backend application.
  - **controllers/**: Logic for handling requests related to room bookings.
  - **models/**: Mongoose models defining the schema for room booking data.
  - **routes/**: API endpoints for handling requests.
  - **app.js**: Entry point for the backend application.

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd room-booking-app/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root of the backend directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   ```

4. **Run the application**
   ```bash
   npm start
   ```

## API Usage
The backend exposes several API endpoints for managing room bookings. Below are some of the key endpoints:

- **GET /api/bookings**: Retrieve all room bookings.
- **POST /api/bookings**: Create a new room booking.
- **GET /api/bookings/:id**: Retrieve a specific room booking by ID.
- **PUT /api/bookings/:id**: Update a room booking by ID.
- **DELETE /api/bookings/:id**: Delete a room booking by ID.

## License
This project is licensed under the MIT License.