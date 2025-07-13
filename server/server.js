import express from 'express';
import playersRouter from './routes/players.js'
import riddlesRouter from './routes/riddles.js'




const PORT = 5000;


const server = express();

server.use(express.json());

server.use('/players', playersRouter)
server.use('/riddles', riddlesRouter)

 

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})
    




