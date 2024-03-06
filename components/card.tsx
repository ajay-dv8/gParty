import Image from "next/image"
import { JsxElement } from "typescript";
import { cn } from "@/lib/utils"

type CardType = {
  title?: string;
  description?: string;
  category?: string;
  icon?: JsxElement | any;
  className?: string | undefined;
}

const Card = ({icon, title, description, category, className}: CardType) => {
  return (
    <div className={cn("w-[16rem] h-36 px-3 py-2 border rounded-xl flex flex-col justify-between shadow hover:shadow-lg md:px-6 md:py-4 duration-200", className)}>
      <div className="flex flex-row items-center justify-between">
        <span className="text-gray-600">{category}</span>
        <span>
          <Image 
            src={icon} 
            alt=""
            className="opacity-50 p-1"
          />
        </span>
      </div>
 
      <h2 className="text-lg font-semibold py-2">{title}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-0 pb-0">
        {description}
      </p>    
    </div>
  )
}

export default Card