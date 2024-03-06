import Link from 'next/link'
import Card from '../card'
import wallet30 from '@/public/icons/wallet30.png'
import upcomingEvent from '@/public/icons/upcomingEvent.png'
import party from '@/public/icons/party.png'

const DashCards = () => {
  return (
    <div className="w-full flex flex-wrap gap-3 md:gap-6">      
      <Link href="/createParty">
        <Card 
          title="Create party"
          category="Party"
          description="Host a new party to invite a person or people you want to transfer money to"
          icon={party}
          className="w-full md:w-[35rem]"
        />
      </Link>

      <Link href="">
        <Card 
          title={`Amount : $ 100.00`}
          category="Wallet"
          description="Quick notification of upcoming events"
          icon={wallet30}
          className="w-60"
        />
      </Link>

      <Link href="">
        <Card 
          title="Upcoming events"
          category="Event"
          description="Quick notification of upcoming events"
          icon={upcomingEvent}
        />
      </Link>

      <Link href="">
        <Card 
          title="Party history"
          category="Party"
          description="List of previous parties"
          icon={party}
        />
      </Link>
    </div>
  )
}

export default DashCards