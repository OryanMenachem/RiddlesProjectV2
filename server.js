import {createServer} from 'node:http'
import {get, post, put, del} from './API/handlingRequests.js';



const PORT = 5000;

const router =  {

    GET : {'/riddles': get},

    POST: {'/riddles/addRiddle': post},

    PUT: {'/': put},

    DELETE: {'/': del}
}


const server = createServer((req, res) => { 

    router[req.method][req.url](req,res)

})


server.listen(PORT, () => {

    console.log(`Server listening on port: ${PORT}...`);
    
})
    



// curl http://localhost:5000/riddles

// curl -X POST http://localhost:5000 -H "Content-Type: application/json" -d '{"" : "", "": ""}'