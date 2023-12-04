"use client"

import LeftNav from "@/components/leftNav"
import RightSection from "@/components/rightSection"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { User } from "lucide-react"
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

          <div className="profile-img-div absolute top-[8rem] px-4 ">
            <Avatar className="w-40 h-40 border-4 border-gray-800">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>
                <User size="30"/>
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="w-full h-64 bg-gray-800 top-0">

            <div className="pt-[6rem] px-4">
              <h2 className="text-2xl font-semibold text-white">username</h2>
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