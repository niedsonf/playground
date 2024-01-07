import { HoverCard3D } from "@/components/3d-hover-card";
import { MouseCircularFollower } from "@/components/mouse-circular-follower";

export default function Home() {
  return (
    <main className='h-screen grid place-items-center bg-gray-700'>
      <MouseCircularFollower />
      <HoverCard3D />
    </main>
  )
}
