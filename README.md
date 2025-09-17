# Room Booking Application

This is a MERN stack application for booking rooms. It consists of a backend built with Node.js and Express, and a frontend built with React.

## Project Structure

```
room-booking-app
├── backend
│   ├── src
│   │   ├── controllers       # Contains logic for handling requests
│   │   ├── models            # Contains Mongoose models for room bookings
│   │   ├── routes            # Contains API routes for the application
│   │   └── app.js            # Entry point for the backend application
│   ├── package.json          # Backend dependencies and scripts
│   └── README.md             # Documentation for the backend
├── frontend
│   ├── public                # Static assets for the frontend
│   ├── src
│   │   ├── components        # Reusable React components
│   │   ├── pages             # Page components for different views
│   │   ├── App.js            # Main component of the React application
│   │   └── index.js          # Entry point for the React application
│   ├── package.json          # Frontend dependencies and scripts
│   └── README.md             # Documentation for the frontend
└── README.md                 # Overview of the entire project
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd room-booking-app
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

### API Endpoints

Refer to the backend `README.md` for a list of available API endpoints and their usage.

### Frontend Usage

Refer to the frontend `README.md` for instructions on how to use the frontend application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.