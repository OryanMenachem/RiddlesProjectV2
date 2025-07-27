import supabase from '../DB/supabase.js';
import { Response } from '../utils/generalUtils.js';


const PLAYERS_TABLE = "players";

export async function addPlayer(name, hashedPassword, role = 'player') {
  
  let response = new Response();

  const { data, error } = await supabase
    .from(PLAYERS_TABLE)
    .insert({
      'name': name,
      'hashed_password' : hashedPassword,
      'role' : role
    })
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


export async function getPlayerByName(name) {
     
     let response = new Response();
     const {data, error} = await supabase
    .from(PLAYERS_TABLE)
    .select()
    .eq('name', name)
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

export async function getTopTen() {
     
     let response = new Response();

     const {data, error} = await supabase
     .from(PLAYERS_TABLE)
     .select()
     .order('best_time', { ascending: true })
     .limit(10); 
    
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
    
    
export async function updateBestTime(id, best_time) {
  
    let response = new Response();

    const updatedTime = { 'best_time' : best_time };
    const { data, error } = await supabase
      .from(PLAYERS_TABLE)
      .update(updatedTime)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      response.message = error.message;
      response.error = true;
    }

    else {
      response.message =  "Best time updated successfully";
      response.content =  data;
    };
    return response;

  } 

