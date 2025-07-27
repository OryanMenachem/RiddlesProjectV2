# RiddlesProjectV2

A full-stack JavaScript project for playing, creating, and managing riddles. The app features a console-based game client and a RESTful API server, with persistent storage using MongoDB (for riddles) and Supabase (for players).

## Features

- **Play Riddles:** Users can play riddle games by difficulty (easy/medium/hard), track their best times, and view stats.
- **User Accounts:** Sign up, log in, or play as a guest. Player data is stored in Supabase.
- **Riddle Management:** Create, read, update, and delete riddles. Riddles are stored in MongoDB.
- **Leaderboard:** View the top 10 players with the best average times.
- **Console Menus:** Intuitive, color-coded menus for navigation and actions.

## Project Structure

```
RiddlesProjectV2/
├── client/           # Console game client
│   ├── app.js
│   └── httpRequests.js
├── core/             # Game logic, menus, models
│   ├── adminMenu.js
│   ├── gameFlow.js
│   ├── gameMenu.js
│   ├── generalMessage.js
│   ├── mainManager.js
│   ├── playerManager.js
│   ├── services.js
│   └── models/
│       ├── Player.js
│       └── Riddle.js
├── DAL/              # Data access for players (Supabase) and riddles (MongoDB)
│   ├── players.dal.js
│   └── riddles.dal.js
├── DB/               # Database connection and ID tracking
│   ├── id.txt
│   ├── mongo.js
│   └── supabase.js
├── server/           # REST API server
│   ├── server.js
│   ├── controllers/
│   │   ├── players.controller.js
│   │   └── ridlles.controller.js
│   └── routers/
│       ├── players.route.js
│       └── riddles.route.js
├── utils/            # Utility functions
│   ├── generalUtils.js
│   └── idGenerator.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB database (connection string in `.env` as `MONGO_URI`)
- Supabase project (public URL and anon key in `.env` as `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY`)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/OryanMenachem/RiddlesProjectV2.git
   cd RiddlesProjectV2
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up your `.env` file with the required environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   PUBLIC_SUPABASE_URL=your_supabase_url
   PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### Running the Project
- **Start the server:**
  ```sh
  npm run server
  ```
- **Start the client (in a separate terminal):**
  ```sh
  npm run app
  ```

## Usage
- On launch, you'll see a welcome message and instructions.
- Choose to play as a guest, sign up, or log in.
- Navigate menus to play riddles, manage riddles, or view the leaderboard.
- All actions are performed via the console interface.

## API Overview
The server exposes RESTful endpoints for player and riddle management. Example routes:
- `POST /players/addPlayer` — Add a new player
- `GET /players/login/:name/:password` — Log in
- `POST /players/submitTime` — Submit best time
- `GET /players/topTen` — Get leaderboard
- `GET /riddles/all` — Get all riddles
- `GET /riddles/:difficulty` — Get riddles by difficulty
- `POST /riddles/add` — Add a riddle
- `PUT /riddles/:id` — Update a riddle
- `DELETE /riddles/:id` — Delete a riddle

## Technologies Used
- Node.js, Express
- MongoDB (riddles)
- Supabase (players)
- readline-sync, chalk, dotenv

## Notes
- All data is stored persistently in MongoDB and Supabase.
- The project is modular and easy to extend.
- For development, ensure both the server and client are running in separate terminals.

---

Enjoy playing and managing riddles!
