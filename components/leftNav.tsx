import { Bell, Home, LogOut, User, Wallet,  } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

  import { createClient } from '@/utils/supabase/server'
  import { cookies } from 'next/headers'
  import { redirect } from 'next/navigation'


const LeftNav = () => {

  const signOut = async () => {
    'use server'
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.signOut()
    return redirect('/login')
  }

  return (
    <div className='min-h-screen flex flex-col px-[10%] py-4 pb-8'>
      <div className="flex flex-col gap-y-8 justify-center">

        <div className="flex flex-col gap-y-8 mb-6">
          <span className="logo">
            <span className="text-3xl font-semibold p-2 rounded">gP</span>
          </span>

          <span className="create Party">
            <Button 
              className="w-full rounded-full text-xl font-semibold p-4 justify-center items-center"
            >
              Create Party
            </Button>
          </span>
        </div>

        {/* <Separator /> */}
        <div className='flex flex-col gap-y-6'>

          <Link href='/home' className="flex flex-row gap-x-4 py-2 px-4 justify-start w-fit
            hover:bg-gray-300 rounded-full"
          >
            <Home size="30" /> 
            <p className='text-2xl font-semibold'> Home </p>
          </Link>

          <Link href='/profile' className="flex flex-row gap-x-4 py-2 px-4 justify-start w-fit 
            hover:bg-gray-300 rounded-full ">
            <User size="30"/>
            <p className='text-2xl font-semibold'> Profile </p>
          </Link>

          <span className="flex flex-row gap-x-4 py-2 px-4 justify-start w-fit 
            hover:bg-gray-300 rounded-full ">
            <Bell size="30"/>
            <p className='text-2xl font-semibold'> Notification </p>
          </span>

          <span className="flex flex-row gap-x-4 py-2 px-4 justify-start w-fit 
            hover:bg-gray-300 rounded-full ">
            <Wallet size="30"/>
            <p className='text-2xl font-semibold'> Wallet </p>
          </span>

        </div>

        <div className="inset-x-0 bottom-4 absolute flex flex-row items-center pl-10">
            <div className="profileImg h-16 w-16 rounded-full bg-gray-300 flex justify-center items-center">
                img
            </div>
        <form action={signOut}>   
          <Button
            variant='ghost'
            className="flex flex-row gap-x-4 py-2 px-4 justify-start w-fit 
            hover:bg-gray-300 rounded-full  ">
            <LogOut size="30"/>
            <p className='text-2xl font-semibold'> Log out </p>
          </Button>  
        </form> 
        </div>

      </div>

    </div>
  )
}

export default LeftNav