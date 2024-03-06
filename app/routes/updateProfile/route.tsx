'use server';
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export async function updateProfile(formData: FormData) {
  
  const username = formData.get('username') as string;
  const email = formData.get('email') as string;
  const bio = formData.get('bio') as string;
  const website = formData.get('website') as string;
  
  const supabase = createClient();
  const {data: { user }} = await supabase.auth.getUser();    

  try {
    if (!user) {
      console.error("Could not authenticate user");
      return redirect('/createPost?message=Could not authenticate user');
    }
    const { data, error } = await supabase
    .from('profiles')
    .update([
      { 
        username: username, 
        email: email, 
        website: website, 
        bio: bio,
      }
    ])
    .eq('id', user.id)
    .select('full_name, phone, date_of_birth, bio')      
    console.log(data)

    if (error) {
      console.error('Error updating data: ', error);
    } else {
      console.log('Data updated successfully: ', data);
    }

  } catch (error) {
    console.error('Error updating data: ', error);
  }

};
