import {createServer} from 'node:http'




const PORT = 5000;

const router =  {

    GET : {},

    POST: {},

    UPDATE: {},

    DELETE: {}
}

const server = createServer((req, res) => { 

    // router[req.method][req.url](req,res)

})


server.listen(PORT, () => {

    console.log(`Server listening on port: ${PORT}...`);
    
})
    



// curl http://localhost:5000

// curl -X POST http://localhost:5000 -H "Content-Type: application/json" -d '{"" : "", "": ""}'