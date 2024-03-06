'use client';
import { useEffect, useState } from "react";
import CreatePartyForm from "./createPartyForm";
import { fetchAccount } from "@/app/routes/fetchAccount/route";

const CreateParty = () => {

  const [accountData, setAccountData] = useState<any | undefined>({});
  const [isLoading, setIsLoading] = useState(false)

  // Effect to fetch account data when the component mounts or the dependencies change.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAccount();
        setAccountData(data);// Updating the 'accountData' state variable with the fetched data.
      } catch (error) {
        console.error('Error fetching account data:', error);
      }
    };
    console.log('accountData', accountData)
    fetchData();
  }, []);// Empty dependency array, indicating that this effect should run only once, when the component mounts.
  
  return (
    <>
    <div className="flex w-full pt-12 justify-between">
      <div className="w-full flex flex-col flex-[30%] items-start justify-start gap-y-4 bg-green-500">

        <p className="text-3xl font-thin">
          Your Details
        </p>

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
          <p>Wallet</p>
          <p>Amount : $ 100.00</p>
        </div>

      </div>

      <div className="flex flex-[70%]">
        <CreatePartyForm />
      </div>
    </div>
    </>
  )
}

export default CreateParty