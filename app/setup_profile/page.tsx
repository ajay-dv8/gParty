import { headers, cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

import { Label } from "@/components/ui/label"

const SetupProfile = async () => {

  const handleSubmitProfile = async (formData: FormData) => {
    'use server'

    const first_name = formData.get('first_name') as string
    const last_name = formData.get('last_name') as string
    const username = formData.get('username') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore) 

    const user  = await supabase.auth.getUser();

    if (!user) {
      console.error("Could not authenticate user")
      return redirect('/setup_profile?message=Could not authenticate user')
    }

    const { data, error } = await supabase
    .from('profiles')
    .update([
      { 
        full_name : first_name + " " + last_name,
        username : username,
      },
    ])
    .eq('id', user.data.user?.id)
    .select("*")
    console.log("data is", data, "user is", user)
        

    if (error) {
      console.error(error)
      return redirect('/setup_profile?message=Could not user add user profile details')
    }

    return redirect('/profile?message=Check email to continue sign in process')
  }

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form
        action={handleSubmitProfile}
        className="flex flex-col justify-center text-foreground p-2"
      >
      <div className='flex flex-row gap-x-4'>

        <div className='flex flex-col'>
          <Label className="text-md" htmlFor="email">
            First name
          </Label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="first_name"
            placeholder="First name"
            required
          />
        </div>

        <div className='flex flex-col'>
          <label className="text-md" htmlFor="email">
            Last name
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="last_name"
            placeholder="Last name"
            required
          />
        </div>

      </div>

        <label className="text-md" htmlFor="email">
          Username
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="username"
          placeholder="Username"
          required
        />

        <button 
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2">
          Sign Up
        </button>

      </form>
    </div>
  )
}

export default SetupProfile