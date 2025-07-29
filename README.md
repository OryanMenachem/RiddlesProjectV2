# Riddles Game

A console-based riddles game with user authentication and score tracking.

## Features

- Play riddles as guest or registered user
- User registration and login
- Score tracking and leaderboard
- Three difficulty levels: easy, medium, hard
- Admin panel for managing riddles

## Project Structure

```
RiddlesProjectV2/
├── package.json
├── README.md
└── src/
    ├── client/
    │   ├── app.js
    │   └── httpRequests.js
    └── server/
        ├── controllers/
        │   ├── players.controller.js
        │   └── ridlles.controller.js
        ├── core/
        │   ├── adminManu.js
        │   ├── gameFlow.js
        │   ├── generalMessage.js
        │   ├── mainManu.js
        │   ├── playerManu.js
        │   └── services.js
        ├── dal/
        │   ├── players.dal.js
        │   └── riddles.dal.js
        ├── db/
        │   ├── id.txt
        │   ├── mongo.js
        │   └── supabase.js
        ├── models/
        │   ├── Player.js
        │   └── Riddle.js
        ├── routers/
        │   ├── players.route.js
        │   └── riddles.route.js
        ├── server.js
        ├── services/
        └── utils/
            ├── generalUtils.js
            └── idGenerator.js
```


2. Start the server:
```bash
npm run server
```

3. Start the game:
```bash
npm run app
```

## How to Play

1. Choose to play as guest, sign up, or login
2. Select difficulty level (easy/medium/hard)
3. Answer riddles and track your time
4. View your score and leaderboard

## Commands

- `npm run server` - Start the server
- `npm run app` - Start the game client
