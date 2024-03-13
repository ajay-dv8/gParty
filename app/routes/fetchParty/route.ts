'use server';
// fetch Party Info from db
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation";

export async function fetchParty() {
  const supabase = createClient();
  const {data: {user}}  = await supabase.auth.getUser();

    if (!user) {
      console.error("Could not authenticate user")
      return redirect('/dashboard?message=user not authenticated')
    };

    try {
      const { data, error } = await supabase
        .from('create_party')
        .select('*')
        .eq('user_id', user?.id)
        //console.log('fetch Party Data', data)  

        if (error) {
          throw error
        } 
        return data[0]; // Return the first data object
 
    } catch (error) {
      console.error('Error fetching data: ', error);
      return {};
    }
};