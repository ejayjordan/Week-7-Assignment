'use client'
import { useRouter } from "next/navigation";

export default function() {
  const router = useRouter();
  
  return(
    <><text>
      <ul>
  <li><button onClick={() => router.push('/')}>
      Home
    </button></li>
    <li><button onClick={() => router.push('/entrees')}>
        Entrees
      </button></li>

      <li>Wings, Potato Skins, Crab Cakes, Bruschetta</li>
    </ul></text></>
)
}