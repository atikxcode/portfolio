import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import { FloatingNav } from '@/components/ui/FloatingNav'
import Image from 'next/image'
import { FaHome } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full">
        <FloatingNav
          navItems={[{ name: 'Home', link: '/', icon: <FaHome></FaHome> }]}
        ></FloatingNav>
        <Hero></Hero>
        <Grid></Grid>
      </div>
    </main>
  )
}
