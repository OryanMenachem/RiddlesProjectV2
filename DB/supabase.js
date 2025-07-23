import { createClient } from '@supabase/supabase-js'


const supabase = createClient(
    process.env.PUBLIC_SUPABASE_URL,
    process.env.PUBLIC_SUPABASE_ANON_KEY
)


// export async function insertRow(table, user) {
//   const { data, error } = await supabase
//     .from(table)
//     .insert(user)
//     .select()
//     .single(); 

//   if (error) {
//     throw new Error(error.message);
//   }

//   return data;
// }


// export async function readByUsername(table ,username) {

//      const {data, error} = await supabase.from(table)
//     .select()
//     .eq('username',username)
//     .single();

//     if (error) {throw new Error(error.message)}

//     return data
// }
    
