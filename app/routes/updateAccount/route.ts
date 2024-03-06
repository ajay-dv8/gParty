'use server';
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export async function updateAccount(formData: FormData) {
  // Extract the values from the formData object
  const full_name     = formData.get("full_name") as string;
  const phone         = formData.get("phone") as string;
  const date_of_birth = formData.get("date_of_birth") as string;
  const bio           = formData.get("bio") as string;
  const gender        = formData.get("gender") as string;
  const email         = formData.get("email") as string;
  const country       = formData.get("selectedCountry") as string;
  const username      = formData.get("username") as string;
  const website       = formData.get("website") as string;
  // Create a supabase client instance and Get the authenticated user from the supabase client
  const supabase = createClient();
  const {data: { user }} = await supabase.auth.getUser();
  
  // Check if the user is authenticated
  if (!user) {
    console.error("Could not authenticate user");
    return redirect('/createPost?message=Could not authenticate user');
  }

  // Update the user's profile data in the 'profiles' table
  try {
    const { data, error } = await supabase
    .from('profiles')
    .update([
      { 
        full_name     : full_name, 
        phone         : phone, 
        date_of_birth : date_of_birth, 
        bio           : bio,
        email         : email,
        username      : username,
        website       : website,
        gender        : gender,
        country       : country,
      }
    ])
    .eq('id', user.id)
    .select('*');

    // Check if there was an error during the update process
    if (error) {
      console.error('Error updating data: ', error);
    } else {
      console.log('Data updated successfully: ', data);
    }

  } catch (error) {
    console.error('Error updating data: ', error);
  }

};