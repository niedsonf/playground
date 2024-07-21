import { HoverCard3D } from "@/components/3d-hover-card";
import { Board } from "@/components/board/board";
import { MouseCircularFollower } from "@/components/mouse-circular-follower";

export default function Home() {
  return (
    <main className='h-screen grid place-items-center bg-gray-300'>
      {/* <MouseCircularFollower /> */}
      {/* <HoverCard3D /> */}
      <Board cells={64} />
    </main>
  )
}
