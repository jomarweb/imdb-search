# imdb-search

## Setup and Run

### Prerequisites
- Node.js (v14 or higher)
- npm

### Backend

1. **Navigate to the backend directory:**
   ```sh
   cd backend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set the OMDB API key environment variable:**

   **For macOS/Linux:**
  
   ```sh
   export OMDB_API_KEY=YOUR_API_KEY
   ```

   **For Windows:**
     ```sh
   set OMDB_API_KEY=YOUR_API_KEY
   ```

4. **Run the backend server:**
   ```sh
   npm start
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

### Features

- Supports dark mode theme.

## Limitations
- You can only search by title.
- The data is limited compared to the IMDb website.
