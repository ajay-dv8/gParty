'use client';
import { fetchAccount } from "@/app/routes/fetchAccount/route";
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import user from '@/public/icons/user.png'
import Image from "next/image"
import { useEffect, useState } from "react";

export default function Component() {
  const [accountData, setAccountData] = useState<any | undefined>({});
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAccount();
        setAccountData(data);
      } catch (error) {
        console.error('Error fetching account data:', error);
        // Handle errors as needed, e.g., display an error message
      }
    };
    console.log('Profile accData', accountData)
    fetchData();
  }, []);
  
  return (
    <div className="flex flex-col h-screen w-full">   
      <div className="flex-1 flex min-h-0 w-full">
        <div className="flex-1 flex flex-col min-h-0 w-full">
          <div className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6 w-full">

            <div className="grid gap-4 md:grid-cols-2 justify-between">

              <div className="flex items-center gap-4">
                <Image
                  alt="Avatar"
                  className="rounded-full w-24"
                  src={user}
                />
                <div className="space-y-1">
                  <h1 className="text-2xl font-semibold">{accountData?.full_name}</h1>
                  <h1 className="text-sm">@{accountData?.username}</h1>
                  <p className="text-gray-500 text-sm dark:text-gray-400">
                    Software Engineer | Music Lover | Travel Enthusiast
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button className="rounded-full border border-gray-200 w-10 h-10 dark:border-gray-800" size="icon">
                  <TwitterIcon className="w-4 h-4" />
                  <span className="sr-only">Follow on Twitter</span>
                </Button>
                <Button className="rounded-full border border-gray-200 w-10 h-10 dark:border-gray-800" size="icon">
                  <FacebookIcon className="w-4 h-4" />
                  <span className="sr-only">Follow on Facebook</span>
                </Button>
                <Button className="rounded-full border border-gray-200 w-10 h-10 dark:border-gray-800" size="icon">
                  <InstagramIcon className="w-4 h-4" />
                  <span className="sr-only">Follow on Instagram</span>
                </Button>
              </div>

            </div>

            <div className="grid gap-4 md:grid-cols-2 w-full relative">
              <Card className="p-0">
                <CardHeader>
                  <CardTitle>Bio</CardTitle>
                </CardHeader>
                
                <CardContent className="text-sm">
                  <p>
                    {accountData?.bio}
                  </p>
                </CardContent>
              </Card>

              <Card className="">
                <CardHeader>
                  <CardTitle>My Photos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2">
                    <img
                      alt="Photo 1"
                      className="aspect-square rounded-md object-cover"
                      height="150"
                      src="/placeholder.svg"
                      width="150"
                    />
                    <img
                      alt="Photo 2"
                      className="aspect-square rounded-md object-cover"
                      height="150"
                      src="/placeholder.svg"
                      width="150"
                    />
                    <img
                      alt="Photo 3"
                      className="aspect-square rounded-md object-cover"
                      height="150"
                      src="/placeholder.svg"
                      width="150"
                    />
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
