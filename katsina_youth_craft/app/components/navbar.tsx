"use client"

import { navLinksData } from "@/public/data/navlinks";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)



    return (
        <nav className=" w-full py-4 md:py-5 px-7 flex items-center justify-between gap-10 fixed z-50 bg-white top-0 left-0 font-league-spartan " >
            <Link href={"/"} >
                <Image src={"/logo/kyc_logo-removebg-preview.png"} alt="logo" width={500} height={500} className="w-[50px] h-full md:w-[65px]  " />
            </Link>

            <ul className="w-fit hidden md:flex items-center gap-10" >
                {navLinksData.map((link, index) => (
                    <li key={index} ><Link href={"#"} > {link.label} </Link></li>
                ))}
            </ul>


            <button className=" flex md:hidden items-center justify-center text-black " onClick={() => setShowMenu(true)} >
                <Menu size={30} />
            </button>



            <ul className={`fixed w-full bg-white  px-10 flex flex-col items-start gap-6 left-0 top-0 list-none text-black overflow-hidden transition-all duration-300 ease-in-out h-fit py-14  ${showMenu ? "translate-y-0" : " -translate-y-full "}  `} >

                <button onClick={() => setShowMenu(false)} className="ml-auto" ><X size={32} /></button>


                {navLinksData.map((link, index) => (
                    <li key={index} ><Link href={"#"} > {link.label} </Link></li>
                ))}


            </ul>
        </nav>
    )
}