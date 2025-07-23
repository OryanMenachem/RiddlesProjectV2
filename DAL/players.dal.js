import supabase from "../DB/supabase.js";
import { Response } from "../utils/generalUtils.js";

export async function addPlayerToDB(table, player) {
  
  let response = new Response();

  const { data, error } = await supabase
    .from(table)
    .insert({"username": player})
    .select()
    .single(); 

  if (error) {  
    response.message = error.message;
    response.error = true;
  }
  else {
    response.message = "The player was successfully added";
    response.content = data;
  }
  return response;
}


// export async function readByUsername(table ,username) {

//      const {data, error} = await supabase.from(table)
//     .select()
//     .eq('username',username)
//     .single();

//     if (error) {throw new Error(error.message)}

//     return data
// }
    
