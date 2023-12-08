import CreatePost from "@/components/createPost"
import LeftNav from "@/components/leftNav"
import RightSection from "@/components/rightSection"

const Home = () => {
  return (
    <div className="w-full flex">
      <div className="flex flex-[25%]">
        <LeftNav/>
      </div>
      <div className="flex flex-[50%] w-full">
        <CreatePost/>
      </div>
      <div className="flex flex-[25%]">
        <RightSection/>
      </div>
    </div>
  )
}

export default Home