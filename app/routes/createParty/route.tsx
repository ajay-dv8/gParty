// createParty.js
"use server";
import { createClient } from "@/utils/supabase/server"

export async function createParty(formData: FormData) {
  const caption = formData.get('caption') as string;
  const guest_count = formData.get('guest_count') as string;
  const party_budget = formData.get('party_budget') as string;
  const disbursement = formData.get('disbursement') as string;
  const amount_per_guest = formData.get('amount_per_guest') as string;

  const supabase = createClient();
  const {data: { user }} = await supabase.auth.getUser();

  if (!user) {
    throw new Error('Could not authenticate user');
  }

  try {
    const { data, error } = await supabase
    .from('create_party')
    .insert([
      { 
        caption : caption,  
        guest_count : guest_count,  
        party_budget : party_budget, 
        disbursement : disbursement,
        amount_per_guest : amount_per_guest,
      }
    ]).select('*');

    if (error) {
      throw new Error('Error inserting data: ' + error);
    }

    return data;
  } catch (error) {
    throw new Error('Error inserting data: ' + error);
  }
}
