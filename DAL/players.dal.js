import supabase from "../DB/supabase.js";
import { Response } from "../utils/generalUtils.js";

async function addPlayer(table, player) {
  
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


async function getPlayerById(table ,id) {
     
     let response = new Response();
     const {data, error} = await supabase.from(table)
    .select()
    .eq('id', id)
    .single();
    
  
    if (error) {
      response.message = error.message;
      response.error = true;
    }
    else {
    response.message = "The player was successfully retrieved";
    response.content = data;
    }

    return response;
}

async function getAllPlayers(table) {
     
     let response = new Response();
     const {data, error} = await supabase.from(table)
    .select()
    
    if (error) {
      response.message = error.message;
      response.error = true;
    }
    else {
    response.message = "The players was successfully retrieved";
    response.content = data;
    }

    return response;
}
    
    
async function best_timeUpdate(table, id, best_time) {
  
    let response = new Response();
    const updatedTime = { "best_time" : best_time };
    const { data, error } = await supabase
      .from(table)
      .update(updatedTime)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      response.message = error.message;
      response.error = true;
    }

    else {
      response.message =  "best_time updated successfully";
      response.content =  data;
    };
    return response;

  } 

const crudOperations = {
      addPlayer : addPlayer,
      getPlayerById : getPlayerById,
      getAllPlayers : getAllPlayers,
      best_timeUpdate : best_timeUpdate
}

export default crudOperations;