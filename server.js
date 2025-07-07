import {createServer} from 'node:http'
import get from './API/GET.js';
import post from './API/POST.js'



const PORT = 5000;

const router =  {

    GET : {'/riddles': get},

    POST: {'/riddles/addRiddle': post},

    PUT: {},

    DELETE: {}
}


const server = createServer((req, res) => { 

    router[req.method][req.url](req,res)

})


server.listen(PORT, () => {

    console.log(`Server listening on port: ${PORT}...`);
    
})
    



// curl http://localhost:5000/riddles

// curl -X POST http://localhost:5000 -H "Content-Type: application/json" -d '{"" : "", "": ""}'