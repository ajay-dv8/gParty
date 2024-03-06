import CreateParty from "@/components/createParty"
import Header from "@/components/header"

const page = () => {
  return (
    <div className="w-full">
      <Header/>
      
      <div className="flex justify-between items-center px-4 md:px-40 my-6">
        <div className="">
          <h2 className="text-lg font-bold">
            Create party
          </h2>
          <p className="text-sm text-gray-400">Host a new party, have fun with the world</p>
        </div>

        <div className="">
          $ 100.00
        </div> 
      </div>

      <span className="flex justify-center w-full">
      <div className="flex justify-center px-4 md:px-40 border-b w-[90%] md:w-[80%] h-1 border-gray-300">
        <CreateParty/>
      </div>
      </span>


    </div>
  )
}

export default page