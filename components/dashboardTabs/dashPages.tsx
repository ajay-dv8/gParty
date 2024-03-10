"use client";
import { useEffect, useState } from "react";
import Account from "./account";
import { fetchAccount } from "@/app/routes/fetchAccount/route";
import Profile from "./profile";
import React from "react";
import { TabsContent } from "../ui/tabs";
import DashCards from "./dashCards";
import { Settings } from "lucide-react";


export default function DashPages(){
  const[userAccountData, setUserAccountData] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const data = await fetchAccount();
        setUserAccountData(data);
        console.log("Account View Data: ", data);
      } catch (error) {
        console.error('Error fetching account data:', error);
        // Handle errors as needed, e.g., display an error message
      }
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <TabsContent value="dashboard">
        <DashCards />
      </TabsContent>

      <TabsContent value="profile">
        <Profile userAccountData={userAccountData}/>
      </TabsContent>

      <TabsContent value="account" >
      <Account userAccountData={userAccountData} />
      </TabsContent>

      <TabsContent value="settings">
        <Settings/>
      </TabsContent>

      <TabsContent value="notification">
        <DashCards />
      </TabsContent>
    </React.Fragment>
  );
}


