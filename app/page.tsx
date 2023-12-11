
import DeployButton from '../components/DeployButton'
import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { redirect } from 'next/navigation'
//import { useEffect } from 'react'
//import { signIn } from '@/components/singnInServerComponent'
import Link from 'next/link'


export default async function Index() {
   const cookieStore = cookies()
   const supabase = createClient(cookieStore)

   const {data: {user}} = await supabase.auth.getUser()

   if (user) {
    return redirect('/home')
   }

   const signIn = async (formData: FormData) => {
     'use server'

     const email = formData.get('email') as string
     const password = formData.get('password') as string
     const cookieStore = cookies()
     const supabase = createClient(cookieStore)

     const { error } = await supabase.auth.signInWithPassword({
       email,
       password,
     })

     if (error) {
       return redirect('/login?message=Could not authenticate user')
     }

     return redirect('/home')
   }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <DeployButton />
           <AuthButton />
        </div>
      </nav>

      <main className="w-full flex flex-row">
        <div className='flex flex-[60%]'>
          Image div
        </div>

        <div className='flex flex-[40%] justify-center items-center'>
        <div className='bg-gray-300 rounded-3xl flex flex-col p-8 shadow-xl'>
          <div className="flex flex-col">
            <div className='flex flex-col py-2'>
              <span className='text-2xl font-bold'>Sign in</span>
              <span className='text-lg'>
                Sign in with socials or sign in with your email
              </span>
            </div>

            <div className="flex justify-between py-4">
              <Button>Sign in with google</Button>
              <Button>Sign in with facebook</Button>
            </div>
          </div>
          <Separator
            className='mb-6 mt-2'
          />

          <form 
            action={signIn}
            className="flex flex-col gap-y-4"
          >
            <div>
              <Input
                type='email'
                name='email'
                placeholder='Email'
              />
            </div>

            <div>
              <Input
                type='password'
                name='password'
                placeholder='Password'
              />
            </div>

            <Button className='mt-2'>
              Sign in
            </Button>

            <div className='flex justify-center'>
              dont have an account <Link href='/signup'> Sign up</Link>
            </div>
            
          </form>
        </div>
        </div>
      </main>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{' '}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  )
}
