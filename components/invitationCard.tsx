import Image from "next/image"
import party from '@/public/icons/party.png'
import user from '@/public/icons/user.png'

type InvitationProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
  linkUrl?: string;
  icon?: string | any;
}

const InvitationCard = ({title, description, imageUrl, linkUrl, icon}: InvitationProps) => {
  return (
  <>
    <div className="flex justify-center items-center h-full w-full py-20 ">
      <div className="w-[30rem] rounded-2xl border p-4">

        <div className="flex justify-between border-b">
          <span className="text-xl font-bold mb-4">gParty Invite</span>

          <span>
            <Image 
              src={party}
              alt=""
              className="opacity-50 p-1"
            />
          </span>
        </div>

        <div className="w-full flex justify-between items-center">
          <span className="flex items-center gap-x-3 font-semibold my-2">
            <Image src={user} alt=""/>
            <p>Username</p>
          </span>

          <span className="">
            <p>Party ID : ch39hfj-938fjkj</p>
          </span>
        </div>

        <div className="flex flex-col gap-y-3">
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam recusandae praesentium pariatur eligendi iusto assumenda itaque.
          </p>

          <p className="">
           Party link : https://partyLink.com
          </p>
        </div>
    
      </div>
    </div>
  </>
  )
}

export default InvitationCard


function HostDetails(){
  return(
    <>
    <div className="">
      
    </div>
    </>
  )
}