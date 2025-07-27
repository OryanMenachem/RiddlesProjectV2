import supabase from "../DB/supabase.js";
import { Response } from "../utils/generalUtils.js";


const PLAYERS_TABLE = "players";

export async function addPlayer(name, password, role = 'player') {
  
  let response = new Response();

  const { data, error } = await supabase
    .from(PLAYERS_TABLE)
    .insert({
      'name': name,
      'password' : password,
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


export async function getPlayerByCredentials(name, password) {
     
     let response = new Response();
     const {data, error} = await supabase
    .from(PLAYERS_TABLE)
    .select()
    .eq('name', name)
    .eq('password' , password)
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

