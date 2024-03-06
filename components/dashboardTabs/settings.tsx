import ButtonLink from "../ButtonLink"
import user from '@/public/icons/user.png'

const Setting = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <ButtonLink
        title="Your Account"
        description="See information about your account, check statement and other account activities"
        icon={user}
        href="/accountSetting"
      />
    </div>
  )
}

export default Setting