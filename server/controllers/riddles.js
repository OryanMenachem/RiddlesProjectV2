import read from '../../DAL/read.js';
import write from '../../DAL/write.js';
import { updateRiddle } from '../../client/updateAndCreate.js';

const path = "C:/Users/om316/OneDrive/Desktop/JavaScript/Projects/RiddlesProjectV2/DB/riddles.txt"

export async function getAllRiddles(req, res) {

      try {

            const data = await read(path)
                 
            res.send(JSON.stringify(data, null, 2))

            } catch(err) {res.send(err)}
}


export async function addRiddle(req, res) {
      
      try {

      const data = await read(path)

      data.push(req.body)

      await write(path, data)

      res.send({ msg : "success" })

      } catch(err) {res.send(JSON.stringify(err, null, 2))}
}


export async function update(req, res) {

      const id = parseInt(req.params.id);

      const data = await read(path)

      const oldRiddle =  data.filter((obj, i) => obj.id == id)[0]
      
      if (!oldRiddle) {res.send({msg: "No ridlle with such ID was found"})}

      const index = data.findIndex(obj => obj.id === 2);

      
      const newRiddle = updateRiddle(oldRiddle)

      data[index] = newRiddle;

      await write(path, data)

      res.send({ msg : "The riddle was successfully updated." })

}



export async function delRiddleById(req, res) {

      try { 
      
      const id = parseInt(req.params.id);

      const data = await read(path)

      const updatedData = data.filter((obj) => obj.id != id)  //Creates a new array without the riddle with the given ID

      if (updatedData.length == data.length) { res.send({msg : "No riddle with such ID was found"})}

      await write(path, updatedData)

      res.send({msg : "The riddle was successfully deleted"})

      } catch(err) {res.send(JSON.stringify(err, null, 2))}
}