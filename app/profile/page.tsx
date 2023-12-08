1
import LeftNav from "@/components/leftNav"
import RightSection from "@/components/rightSection"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { User } from "lucide-react"
import Link from "next/link"
// import { cookies } from 'next/headers'
// import { createClient } from '@/utils/supabase/server'
// import React, { useState, useEffect } from 'react';


const ProfilePage = () => {
  // const cookieStore = cookies()
  // const supabase = createClient(cookieStore)

  // const [username, setUsername] = useState('');

  // useEffect(() => {
  //   async function fetchUsername() {

  //     const {
  //       data: { user },
  //     } = await supabase.auth.getUser()

  //     if (user) {
  //       let { data: profiles, error } = await supabase
  //       .from('profiles')
  //       .select('username')
  //       .eq('id', user?.id)
  //       .single()

  //       if (profiles && profiles.username) {
  //         setUsername(profiles.username);
  //       }
  //     }  
  //   }
  //   fetchUsername();
  // }, [])

  return (
    <div className='w-full flex'>
      <div className="flex flex-[25%]">
        <LeftNav />
      </div>

      <div className="flex flex-[50%] justify-between">
      <Separator
        orientation="vertical"
      />
        {/*Profile Header */}
        <div className="w-full">
          <div className="w-full h-52 bg-gray-300 top-0">

          </div> 

          <div className="profile-img-div absolute top-[8rem] px-4 flex justify-between items-end">
          
            <div>
              <Avatar className="w-40 h-40 border-4 border-gray-800">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>
                  <User size="30"/>
                </AvatarFallback>
              </Avatar>
            </div>

            <Link href='setup_profile' className="absolute w-full">
              <Button className="flex justify-end">
                Edit Profile
              </Button>
            </Link>
          
          </div>

          <div className="w-full bg-gray-800 top-0 pb-3">

            <div className="pt-[6rem] px-4">
              <h2 className="text-2xl font-semibold text-white">username</h2>
              <p className="mt-1 text-gray-400">@username</p>
              <p className="mt-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, odio. Doloremque neque unde possimus deleniti provident fugiat commodi quod repellendus accusantium eius. Aliquam totam ipsam necessitatibus rem, nihil debitis nisi?</p>
              <p className="my-1  text-gray-400">date joined</p>
            </div>

          </div> 
        </div>
        

      <Separator
        orientation="vertical"
        className="my-2"
      />
      </div>

      <div className="flex flex-[25%]">
        <RightSection/>
      </div>
    </div>
  )
}

export default ProfilePage