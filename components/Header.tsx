import { createClient } from "@/utils/supabase/server";
import AuthButton from "./AuthButton";
import Link from "next/link";

const Header = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="w-full h-12 flex justify-between items-center bg-blue-300 px-4 md:px-40 backdrop-filter backdrop-blur-sm bg-opacity-10 shadow">
      <Link href="/dashboard">LOGO</Link>
      <div className="flex gap-8">
        <AuthButton />
      </div>
    </div>
  )
}

export default Header