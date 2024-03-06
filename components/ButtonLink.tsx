import Image from "next/image"
import Link from "next/link"
import arrowForward from '@/public/icons/arrowForward.png'

type settingsType = {
  icon? : string | any;
  title? : string;
  href? : string | any;
  description? : string;
}

const ButtonLink = ({icon, title, description, href} : settingsType) => {
  return (
    <>
      <Link href={href} className="w-full flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <div>
            <Image 
              alt="" 
              src={icon}
              className="opacity-70 w-7"
            />
          </div>

          <div>
            <p className="font-semibold">{title}</p>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>

        <div>
          <Image alt='' src={arrowForward} width={20} className="opacity-70"/>
        </div>
      </Link>
    </>
  )
}

export default ButtonLink