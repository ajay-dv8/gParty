import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

import { Label } from "@/components/ui/label"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { FileEdit, User } from 'lucide-react'
import PrevPageBtn from '@/components/previousPageBtn'

const SetupProfile = async () => {

  const handleSubmitProfile = async (formData: FormData) => {
    'use server'

    const first_name = formData.get('first_name') as string
    const last_name = formData.get('last_name') as string
    const username = formData.get('username') as string
    const website = formData.get('website') as string
    const bio = formData.get('bio') as string
    
    const cookieStore = cookies()
    const supabase = createClient(cookieStore) 

    const {data: {user}}  = await supabase.auth.getUser();

    if (!user) {
      console.error("Could not authenticate user")
      return redirect('/setup_profile?message=Could not authenticate user')
    }

    //insert user info to profiles table in db
    const { data, error } = await supabase
    .from('profiles')
    .update([
      { 
        full_name : first_name + " " + last_name,
        username : username,
        website : website,
        bio : bio,
      },
    ])
    .eq('id', user.id)
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
      
      <div className="flex justify-between">
        <div className="flex">
          Edit Profile
        </div>
        <div className="flex">
          <PrevPageBtn/>
        </div>
      </div>

      <form
        action={handleSubmitProfile}
        className="flex flex-col justify-center text-foreground p-2"
      >
        <Image 
          src={''} 
          alt={''}
          className="Banner-Img bg-green-500 w-full h-40" 
        />

        <div className="bannerNavater">

          <div className='relative top-[-4.7rem] left-[1.2rem]'>  
            <Avatar className="w-16 h-16 border-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>
                <User size="16"/>
              </AvatarFallback>
            </Avatar>   
            <input type="file" className='hidden bg-[]'/> 
                 
  
          </div>
        </div>
       
      <div className='flex flex-row gap-x-4'>

        <div className='flex flex-col'>
          <Label className="text-md" htmlFor="email">
            First name
          </Label>
          <Input
            className="rounded-md text-lg px-4 py-2 bg-inherit border mb-6"
            name="first_name"
            placeholder="First name"
          />
        </div>

        <div className='flex flex-col'>
          <Label className="text-md" htmlFor="email">
            Last name
          </Label>
          <Input
            className="rounded-md text-lg px-4 py-2 bg-inherit border mb-6"
            name="last_name"
            placeholder="Last name"
          />
        </div>

      </div>

        <Label className="text-md" htmlFor="email">
          Username
        </Label>
        <Input
          className="rounded-md text-lg px-4 py-2 bg-inherit border mb-6"
          name="username"
          placeholder="Username"
        />

        <Label className="text-md" htmlFor="email">
          Bio
        </Label>
        <Textarea
          className="rounded-md px-4 py-2 text-lg bg-inherit border mb-6 resize-none"
          name="bio"
          placeholder="Bio"
        />

        <Label className="text-md" htmlFor="email">
          Website
        </Label>
        <Input
          className="rounded-md text-lg px-4 py-2 bg-inherit border mb-6"
          name="website"
          placeholder="https://website.com"
        />

        <Button 
          className="text-lg">
          Save
        </Button>

      </form>
    </div>
  )
}

export default SetupProfile