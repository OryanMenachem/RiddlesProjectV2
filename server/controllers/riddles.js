// import read from '../../DAL/read.js';
// import write from '../../DAL/write.js';
// import { paths } from '../../utils/utils.js';





// /**
//  * Adds a new riddle to the file from the request body.
//  * @async
//  * @param {object} req - Express request object containing the new riddle in req.body.
//  * @param {object} res - Express response object used to send success message or error.
//  * @returns {void} Sends success message if the riddle is added, or error if failed.
//  */
// export async function addRiddle(req, res) {
      
//       try {

//       const data = await read(paths.riddles)

//       data.push(req.body)

//       await write(paths.riddles, data)

//       res.send({ msg : "success" })

//       } catch(err) {res.send({error : err.message})}
// }

// /**
//  * Updates an existing riddle using the ID and new data from the request body.
//  * @async
//  * @param {object} req - Express request object containing updated riddle data in req.body.
//  * @param {object} res - Express response object used to send confirmation or error.
//  * @returns {void} Sends confirmation message if update is successful, or error message.
//  */
// export async function update(req, res) {

//       try {
    

//       const updatedRiddle = req.body;
      
//       const data = await read(paths.riddles)

//       const index = data.findIndex(obj => obj.id === updatedRiddle.id);
     
//       data[index] = updatedRiddle;    //Object.assign(data[index], updatedRiddle);     

//       await write(paths.riddles, data)

//       res.send({ msg : "The riddle was successfully updated." })

//       } catch(err) {res.send({error : err.message})}


// }


// // /**
// //  * Deletes a riddle by its ID, which is received from the request URL.
// //  * @async
// //  * @param {object} req - Express request object containing riddle ID in req.params.id.
// //  * @param {object} res - Express response object used to send result message.
// //  * @returns {void} Sends message confirming deletion or saying riddle not found.
// //  */
// // export async function delRiddleById(req, res) {

// //       try { 
      
// //       const id = parseInt(req.params.id);

// //       const data = await read(paths.riddles)

// //       const updatedData = data.filter((obj) => obj.id != id)  //Creates a new array without the riddle with the given ID

// //       if (updatedData.length == data.length) { res.send({msg : "No riddle with such ID was found"})}

// //       await write(riddlesPath, updatedData)

// //       res.send({msg : "The riddle was successfully deleted"})

// //       } catch(err) {res.send({error : err.message})}
// // }