
import Account from "@/components/dashboardTabs/account"
import DashCards from "@/components/dashboardTabs/dashCards"
import Profile from "@/components/dashboardTabs/profile"
import Settings from "@/components/dashboardTabs/settings"
import Header from "@/components/header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 z-50">
        <Header/>
      </div>
      
      <div className="flex flex-col p-4 md:px-40 w-full sticky top-12 border-b backdrop-filter backdrop-blur-sm bg-opacity-10">
        <div className=" flex justify-between">
          <div className="">
            <h2 className="text-lg font-bold">
              Dashboard
            </h2>
            <p className="text-sm text-gray-400">Manage your account and projects</p>
          </div>

          <div className="">
            $ 100.00
          </div>
        </div>
      </div>

      <div className="w-full flex px-4 md:px-40 justify-between">

        <Tabs defaultValue="dashboard" className="w-full md:flex justify-between">          
          <TabsList className="flex md:flex-col md:flex-[20%] md:items-start sticky top-20 md:top-60">
            <TabsTrigger className="w-full justify-start py-2 data-[state=active]:bg-gray-300" value="dashboard">Dashboard</TabsTrigger>           
            <TabsTrigger className="w-full justify-start py-2 data-[state=active]:bg-gray-300" value="notification">Notification</TabsTrigger>
            <TabsTrigger className="w-full justify-start py-2 data-[state=active]:bg-gray-300" value="profile">Profile</TabsTrigger>
            <TabsTrigger className="w-full justify-start py-2 data-[state=active]:bg-gray-300" value="account">Account</TabsTrigger>
            <TabsTrigger className="w-full justify-start py-2 data-[state=active]:bg-gray-300" value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <span className="px-8"></span>

          <div className="w full md:flex-[80%] pt-8">
            <TabsContent value="dashboard">
              <DashCards />
            </TabsContent>

            <TabsContent value="profile">
              <Profile/>
            </TabsContent>

            <TabsContent value="account" >
              <Account/>
            </TabsContent>

            <TabsContent value="settings">
              <Settings/>
            </TabsContent>

            <TabsContent value="notification">
            <DashCards />
            </TabsContent>
          </div>
        </Tabs>

      </div>

    </div>
  )
}

export default page