import { User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"


export default function ProfileAvatar () {

  return (
    <div>
      <Avatar className="w-40 h-40 border-4 border-gray-800">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>
          <User size="30"/>
        </AvatarFallback>
      </Avatar>
    </div>
  )
};



export function ProfileInfo() {
  return(
    <div>
      
    </div>
  )
}