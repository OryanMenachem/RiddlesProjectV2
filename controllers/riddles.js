import read from "../DAL/read.js";
import write from "../DAL/write.js";

const path = "C:/Users/om316/OneDrive/Desktop/JavaScript/Projects/RiddlesProjectV2/DB/riddles.txt"

export async function getData(req, res) {

      try {

            const data = await read(path)
                 
            res.send(JSON.stringify(data, null, 2))

            } catch(err) {res.send(err)}
}

export async function delById(req, res) {

      try { 
      
      const msg = {msg : "The riddle was successfully deleted"}

      const id = parseInt(req.params.id);

      if ( isNaN(id) || id < 0 ) { res.send(JSON.stringify({ error: "Invalid id" }, null, 2)) }

      let data = await read(path)

      data = data.filter((obj) => obj.id != id)  //Removing the object with the given ID from the DB

      await write(path, data)


      res.send(JSON.stringify(msg, null, 2))

      } catch(err) {JSON.stringify(err, null, 2)}
}