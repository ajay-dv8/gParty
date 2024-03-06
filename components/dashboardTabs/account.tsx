'use client';
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { useEffect, useState } from 'react'
import { fetchAccount } from '@/app/routes/fetchAccount/route';
import { updateAccount } from '@/app/routes/updateAccount/route';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { error } from 'console';
import Image from 'next/image';

const Account = () => {

  const [full_name, setFull_name ] = useState('');
  const [phone, setPhone] = useState('');
  const [date_of_birth, setDate_of_birth] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [bio, setBio] = useState('');
  const [gender, setGender] = useState('');
  
  const [country, setCountry] = useState({
    loading: false,
    countries: [],
    errorMessage: ''
  });
  const [selectedCountry, setSelectedCountry] = useState();

  const [accountData, setAccountData] = useState<any | undefined>({});
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    // fetch country details 
    const fetchCountry = async () => {
      try {
        setCountry({
          ...country,
          loading: true,
        });
  
        // fetch country data
        const countryUrl = `https://restcountries.com/v3.1/all`
        const response = await fetch(countryUrl);
        const data = await response.json();
  
        setCountry({
          ...country,
          countries: data,
          loading: false,
        });
      } catch (error) {
        setCountry({
          ...country,
          loading: false,
          errorMessage: 'sorry something went wrong'
        })
      }
    }
    fetchCountry();
  }, []);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAccount();
        setAccountData(data);
      } catch (error) {
        console.error('Error fetching account data:', error);
      }
    };
    console.log('accountData', accountData)
    fetchData();
  }, []);

  const { loading, errorMessage, countries } = country;
  // console.log("loading", loading);
  // console.log("countries", countries);
  // console.log("errorMessage", errorMessage);

  // find selectedCountry data
  const searchSelectedCountry:any = countries.find((obj: string | any) => {
    if (obj.name.common === selectedCountry) {
      return true;
    }
    return false;
  });
  console.log('searchSelectedCountry', searchSelectedCountry);
  
  return (
    <div className="container grid gap-4 px-4 mx-auto md:gap-8 lg:max-w-4xl xl:gap-10 xl:px-4">

      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Account</h1>
        <p className="text-gray-500 text-sm dark:text-gray-400 pb-4">
          Update your account settings. Set your preferred language and timezones. <br/>
          You can edit you profile details by typing in the textarea or editing the text in the text area 
        </p>

        {/* this is a horizontal separator */}
        <div className="flex justify-center w-full">
        <div className="flex justify-center px-4 md:px-40 border-b w-full h-1 border-gray-300"></div>
        </div>
      </div>

      <form 
        action={updateAccount}
        className="space-y-4"
      >
        
        <div className="space-y-2">
          <Label htmlFor="fullName">Full name</Label>
          <Input 
            name="full_name" 
            placeholder="Enter your full name" 
            onChange={e => setFull_name(e.target.value)}
            defaultValue={accountData?.full_name}
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input 
              name="username" 
              placeholder="Enter your username" 
              type="text" 
              defaultValue={accountData?.username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              name="email" 
              placeholder="Enter your email" 
              type="email" 
              defaultValue={accountData?.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Select
            name='selectedCountry'
            defaultValue={selectedCountry}
            //onChange={(e) = setSelectedCountry(e.target.value)}
          >
          <SelectTrigger className="w-full">
            <SelectValue className='text-black bg-white' placeholder={accountData ? accountData?.country : 'Select country'}/>
          </SelectTrigger>
          <SelectContent className='bg-white text-black'>
            {countries.map((item: string | any, index)  => {
              return (
                <SelectItem key={index} value={item.name.common}>
                  {item.name.common}
                </SelectItem>
              )
            })}
          </SelectContent>
          </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor='phone'>Phone</Label>
            <div className="flex">
              <Image alt='' src={searchSelectedCountry ? searchSelectedCountry.flags.png : ''} />
            <Input
              name="phone"
              defaultValue={accountData?.phone}
              type='tel'
              placeholder="Enter your country" 
              onChange={e => setPhone(e.target.value)}
            />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">        
          <div className="space-y-2">
            <Label htmlFor="date_of_birth">Date of birth</Label>
            <Input 
              type='date'
              name='date_of_birth' 
              placeholder="Select your date of birth"  
              onChange={e => setDate_of_birth(e.target.value)}
              defaultValue={accountData?.date_of_birth}
            />
          </div>
          
          <div className="space-y-2 w-full">
            <Label htmlFor="gender">Gender</Label>
            <Select 
              name='gender'
              defaultValue={accountData?.gender}
            >
              <SelectTrigger className="w-full ">
                <SelectValue placeholder={accountData ? accountData?.gender : 'Select gender' } className='text-black'/>
              </SelectTrigger>
              <SelectContent className="bg-white text-black">
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Others">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea 
            name="bio"
            placeholder="Enter your bio" 
            onChange={e => setBio(e.target.value)}
            defaultValue={accountData?.bio}
            className="min-h-[100px] max-h-[120px]" 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="website">Website</Label>
          <Input 
            name="website" 
            type="text" 
            placeholder="https://www.example.com" 
            defaultValue={accountData?.website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div className="flex justify-center w-full">
          <Button 
            type='submit'
            //onClick={() => setIsLoading(true)}
            disabled={isLoading}
            className='w-[50%]'
          >
            {isLoading ? 'Updating account...' : 'Update account'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Account