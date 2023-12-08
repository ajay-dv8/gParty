import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Ghost, User } from 'lucide-react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

const CreatePost = () => {
  return (
    <div className='w-full pt-6 px-6'>
      <div className='flex flex-row items-center justify-center'>
        <div className='relative top-[-1.2rem]'>  
          <Avatar className="w-16 h-16 border-4">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>
              <User size="16"/>
            </AvatarFallback>
          </Avatar>       
        </div>
        <div className='w-full p-2'>
          <form 
            action=""
            method="post"
            className='w-full'
          >
            <Textarea 
              placeholder="What's on your mind?"
              name='post'
              className='w-full resize-none text-lg border-hidden '
            />

            <div className='flex flex-row justify-between items-end'>
              <div className="flex">attachments</div>
              <div className="flex pt-2">
                <Button
                  variant='outline'
                  className='py-3 rounded-full text-xl font-semibold'>
                  POST  
                </Button>
              </div>  
            </div> 
          </form> 
        </div>
      </div> 
      <Separator 
        orientation='horizontal'
        className='my-4'
      />  
    </div>
  )
}

export default CreatePost