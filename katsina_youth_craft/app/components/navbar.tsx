import Link from "next/link";



export default function Navbar() {
    return (
        <nav className=" w-full py-7 px-7 flex items-center justify-between gap-10 fixed z-50 bg-white top-0 left-0 " >
            <a href="#">Logo</a>

            <ul className="w-fit flex items-center gap-10" >
                <li><Link href={"#"} >Who we are</Link></li>
                <li><Link href={"#"} >Who we are</Link></li>
                <li><Link href={"#"} >Who we are</Link></li>
                <li><Link href={"#"} >Who we are</Link></li>
            </ul>
        </nav>
    )
}