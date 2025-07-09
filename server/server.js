import express from 'express';
import playersRouter from './routes/players.js'
import riddlesRouter from './routes/riddles.js'






const PORT = 5000;


const server = express();

server.use('/players', playersRouter)
server.use('/riddles', riddlesRouter)


server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})
    



// curl http://localhost:5000/riddles

// curl -X POST http://localhost:5000 -H "Content-Type: application/json" -d '{"" : "", "": ""}'