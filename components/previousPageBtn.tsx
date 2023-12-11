"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

// interface Props {
//   title: string;
// }

const PrevPageBtn = () => {
  const router = useRouter();
  return (
    <div className="flex py-1 px-3">
      <Button onClick={() => router.back()}>
        Back
      </Button>
      {/* <div className="grow text-center">
        <h2 className="text-slate-50">{title}</h2>
      </div> */}
    </div>
  );
};

export default PrevPageBtn