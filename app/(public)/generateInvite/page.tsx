import Confetti from "@/components/confetti"
import Header from "@/components/header"
import InvitationCard from "@/components/invitationCard"
import PartyDetails from "@/components/partyDetails"

const page = () => {

  return (
    <>
    <Confetti />
    <Header/>

    <div className="flex flex-col p-4 md:px-40 w-full sticky top-12 border-b backdrop-filter backdrop-blur-sm bg-opacity-10">
      <div className=" flex justify-between">
        <div className="">
          <h2 className="text-lg font-bold">
            Party Invitation
          </h2>
          <p className="text-sm text-gray-400">Generate and share your party invitation</p>
        </div>

        <div className="">
          $ 100.00
        </div>
      </div>
    </div>

    <main className="flex w-full">

      <div className="flex-[30%]">
        <PartyDetails/>
      </div>

      <div className="w-full flex-[70%] flex justify-center items-center">
        <InvitationCard
          title="Party Title"
          description="Party details" 
          imageUrl="/party.jpg"
          linkUrl="/rsvp"
        />
      </div>
      
    </main>
    </>
  )
}

export default page