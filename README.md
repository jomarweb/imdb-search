# imdb-search

## Setup and Run

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend

1. **Navigate to the backend directory:**
   ```sh
   cd backend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Set the OMDB API key environment variable:**

   **For macOS/Linux:**
   Create a `.env` file in the `backend` directory and add the following line:
   ```
   OMDB_API_KEY=YOUR_API_KEY
   ```
   Alternatively, you can export the variable in your terminal session:
   ```sh
   export OMDB_API_KEY=YOUR_API_KEY
   ```

   **For Windows:**
   Create a `.env` file in the `backend` directory and add the following line:
   ```
   OMDB_API_KEY=YOUR_API_KEY
   ```
   Alternatively, you can set the variable in your command prompt session:
   ```sh
   set OMDB_API_KEY=YOUR_API_KEY
   ```

4. **Run the backend server:**
   ```sh
   npm start
   # or
   yarn start
   ```

5. **The backend server will be running on:**
   ```
   http://localhost:5200
   ```

### Frontend

1. **Navigate to the frontend directory:**
   ```sh
   cd frontend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Build the project:**
   ```sh
   npm run build
   ```

4. **Run the production server:**
   ```sh
   npm start
   ```

5. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```
