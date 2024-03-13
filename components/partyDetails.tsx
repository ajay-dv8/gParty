'use client';
import { fetchAccount } from "@/app/routes/fetchAccount/route";
import { fetchParty } from "@/app/routes/fetchParty/route";
import { useEffect, useState } from "react";

const PartyDetails = () => {
  const [accountData, setAccountData] = useState<any | undefined>({});
  const [partyData, setPartyData] = useState<any | undefined>({});
  //const [isLoading, setIsLoading] = useState(false)

  // Effect to fetch account data when the component mounts.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAccount();
        setAccountData(data);// Updating the 'accountData' state variable with the fetched data.
      } catch (error) {
        console.error('Error fetching account data:', error);
      }
    };

    // Fetch party details 
    const fetchPartyData = async () => {
      try {
        const data = await fetchParty();
        setPartyData(data);
      } catch (error) {
        console.error('Error fetching party data:', error);
      }
    };
    console.log('partyData', partyData)
    console.log('accountData', accountData)
    fetchPartyData();
    fetchData();
  }, []);// Empty dependency array, indicating that this effect should run only once, when the component mounts.
  

  useEffect(() => {
    
  }, []);

  return (
    <div>
      <div className="">
        <h1>Party Details</h1>
        <p>This is where you can view and manage details for a specific political party.</p>
      </div>

      <div className="w-full flex flex-col flex-[30%] items-start justify-start gap-y-4">

        <div className="opacity-50">
          <p>Username</p>
          <p>{accountData?.username}</p>
        </div>

        <div className="opacity-50">
          <p>Name</p>
          <p>{accountData?.full_name}</p>
        </div>

        <div className="opacity-50">
          <p>Phone</p>
          <p>{accountData?.phone}</p>
        </div>

        <div className="opacity-50">
          <p>Party ID</p>
          <p>{partyData?.party_id}</p>
        </div>

        <div className="opacity-50">
          <p>Wallet</p>
          <p>Amount : $ 100.00</p>
        </div>

      </div>
    </div>
  )
}

export default PartyDetails