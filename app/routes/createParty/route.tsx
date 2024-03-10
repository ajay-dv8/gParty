'use server';
import { createClient } from "@/utils/supabase/server"
import { error } from "console";
import { redirect } from "next/navigation"

export async function createParty(formData: FormData) {
  // Extract the values from the formData object
  const caption = formData.get('caption') as string;
  const guest_count = formData.get('guest_count') as string;
  const party_budget = formData.get('party_budget') as string;
  const disbursement = formData.get('disbursement') as string;
  const amount_per_guest = formData.get('amount_per_guest') as string;

  // Create a supabase client instance and Get the authenticated user from the supabase client
  const supabase = createClient();
  const {data: { user }} = await supabase.auth.getUser();
  
  // Check if the user is authenticated
  if (!user) {
    console.error("Could not authenticate user", error);
    return redirect('/createParty?message=Could not authenticate user');
  }

  // Update the user's profile data in the 'profiles' table 
  try {
    const { data, error } = await supabase
    .from('create_party')
    .insert([
      { 
        caption          : caption, 
        guest_count      : guest_count, 
        party_budget     : party_budget, 
        disbursement     : disbursement,
        amount_per_guest : amount_per_guest,
      }
    ])
    .select('*');

    // Check if there was an error during the update process
    if (error) {
      console.error('Error inserting data: ', error);
    } else {
      // console.log('Data inserted successfully: ', data);
      // Redirect to the generate invitation page with a success message
      // return redirect(`/generateInvite?id=${data[0].id}&message=Successfully created your party!`);
      return redirect(`/generateInvite?id=${data[0].id}&message=Successfully created your party!`);
    }

  } catch (error) {
    console.error('Error inserting data: ', error);
  }

};