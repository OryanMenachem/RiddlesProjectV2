import 'dotenv/config';
import express from 'express';

import { mongoConnection } from '../DB/mongo.js';
import playersRouter from './routers/players.route.js';
import riddlesRouter from './routers/riddles.route.js';


const server = express();

server.use(express.json());

server.use('/players', playersRouter)
server.use('/riddles', riddlesRouter)

 

function startListening() {

    try {server.listen(
        process.env.PORT, 
        () => console.log(`Server listening on port ${process.env.PORT}...`)) 
    }

    catch(err) {console.log(`Listening error \n${err.message}`)}
}

startListening();
mongoConnection.open();    




