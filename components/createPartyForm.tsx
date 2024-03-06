
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { useToast } from "./ui/use-toast"
import { createParty } from "@/app/routes/createParty/route"

const CreatePartyForm = () => {

  const [caption, setCaption] = useState('');
  const [guest_count, setGuest_count] = useState('');
  const [party_budget, setParty_budget] = useState('');
  const [disbursement, setDisbursement] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast()

  const toastSuccess = ():string | any => {
    toast({
      title: "Success",
      description: "Your party has been created.",
    })
  };

  const toastError = () => {
    toast({
      title: "Failed",
      description: "Failed creating party.",
    })
  };

  //  const createParty = async (event: React.FormEvent<HTMLFormElement> | any) => {
  //    event.preventDefault();
  //    setIsLoading(true);
 
  //    const supabase = createClient(
  //      process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  //    );

  //    const formData = new FormData(event.target);
  //    const caption = formData.get('caption') as string;
  //    const guest_count = formData.get('guest_count') as string;
  //    const party_budget = formData.get('party_budget') as string;
  //    const disbursement = formData.get('disbursement') as string;
  //    const amount_per_guest = formData.get('amount_per_guest') as string;

  //    try {
  //      const { data, error } = await supabase
  //      .from('create_party')
  //      .insert([
  //        { 
  //          caption          : caption, 
  //          guest_count      : guest_count, 
  //          party_budget     : party_budget, 
  //          disbursement     : disbursement,
  //          amount_per_guest : amount_per_guest,
  //        }
  //      ])
  //      .select('*');
  //      console.log('create party data', data);

  //      // Check if there was an error during the update process
  //      if (error) {
  //        console.error('Error inserting data: ', error);
  //        toastError();
  //      } else {
  //        console.log('Data inserted successfully: ', data);
  //      }

  //    } catch (error) {
  //      console.error('Error inserting data: ', error);
  //    }

  //   setCaption('');
  //   setGuest_count('');
  //   setParty_budget('');
  //   setDisbursement('');

  //   setIsLoading(false);
  //   toastSuccess();
    
  //  }

  return (
    <>
    <form
      action={createParty}
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
            <RadioGroupItem value="share_equal" id="r1" />
            <Label htmlFor="r1">Share equally</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="custom_amount" id="r2" />
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
