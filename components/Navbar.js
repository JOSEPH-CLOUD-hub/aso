import Link from 'next/link'

const Navbar = () => {
  return (
  <div className="bg-blue-950">
    <div className="flex justify-between items-center mx-auto my-0  max-w-5xl">
       <div>
        Aso
       </div>
       <div className="flex justify-between items-center gap-16">
         <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About Us</Link>
        <Link href={"/portfolio"}>Portfolio</Link>
        <Link href={"/contact"}>Contact Us</Link>
       </div>
    </div>
  
  </div>
  )
    
} 



export default Navbar