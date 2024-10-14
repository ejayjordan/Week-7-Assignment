'use client'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from "next/navigation";

export function Webpages() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
 
  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    router.push("localhost:3000/appetizers")
    // You can now use the current URL
    // ...
  }, [pathname, searchParams])
 
  return null
}
