
import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { createParty } from "@/app/routes/createParty/route"
import { useRouter } from "next/navigation"

const CreatePartyForm = () => {

  const [caption, setCaption] = useState('');
  const [guest_count, setGuest_count] = useState('');
  const [party_budget, setParty_budget] = useState('');
  const [disbursement, setDisbursement] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: { preventDefault: () => void } | any) => {
    event.preventDefault();
     try {
      setIsLoading(true);
      const formData = new FormData(event.target);
      // Call your createParty function here
      await createParty(formData);
      router.push('/generateInvite');
     } catch (error) {
       console.error("Failed to submit the form");
     }

    setIsLoading(false);
  }
  
  return (
    <>
    <form
      onSubmit={handleSubmit}
       className="w-full flex flex-col gap-y-8"
    >
      <div className="flex flex-col gap-2">
        <Label>Title / Caption</Label>
        <Input 
          type="text" 
          name="caption"
          placeholder="Write a short title or caption for the party" 
        />
      </div>

      <div className="flex justify-between items-center gap-12">
        <div className="flex flex-col gap-2 w-full">
          <Label>Number of guests</Label>
          <Input 
            type="text" 
            name="guest_count"
            placeholder="Number of guests" 
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Label>Party budget</Label>
          <Input 
            type="text" 
            name="party_budget"
            placeholder="Party budget" 
          />
        </div>
      </div>

      <div className="flex justify-between items-center gap-12">
        <div className="flex w-full flex-col gap-4">
          <Label htmlFor="disbursement">Disbursement</Label>
          <RadioGroup defaultValue="share_equal" name="disbursement"  className="flex flex-row">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Share Equal" id="r1" />
            <Label htmlFor="r1">Share equally</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Custom Amount" id="r2" />
            <Label htmlFor="r2">Custom amount</Label>
          </div>
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Label>Amount per guest</Label>
          <Input 
            type="text" 
            name="amount_per_guest"
            placeholder="Party guest will receive" 
          />
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-4">
        <Button
          type="submit"
          disabled={isLoading}   
          className=" w-[70%] bg-blue-500 text-white"
        >
          {isLoading ? 'Generating invitation...' : 'Generate invitation'}
        </Button>  
      </div>   
      
    </form>
    
    </>
  )
}

export default CreatePartyForm
function showSuccessMessage(arg0: string) {
  throw new Error("Function not implemented.")
}

