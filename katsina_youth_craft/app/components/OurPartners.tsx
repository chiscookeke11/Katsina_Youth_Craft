import Image from "next/image";
import ButtonComponent from "./UI/ButtonComponent";



export default function OurPartnersSection() {
    return (
        <section className=" w-full flex flex-col md:flex-row items-start gap-10 py-24 md:py-44 px-[3%] font-league-spartan  text-black bg-[#f2f5fc] ">

            <div className=" w-full max-w-sm flex items-start flex-col gap-5  " >
                <h2 className=" text-xl  md:text-2xl font-semibold  " >Our <span className="text-red-500" >Partners</span></h2>

                <p className=" text-base md:text-lg font-medium ">We partner with strategic players in the public, private and civil society sectors including Implementing Partners to form strategic alliances in our commitment to promote partnerships for the Sustainable Development Goals in line with our focus sectors and mission.</p>

                <ButtonComponent className=" rounded-[100px]! " >PARTNER WITH US</ButtonComponent>

            </div>



            <div className=" w-full grid grid-cols-2 md:grid-cols-3  gap-6 place-items-center justify-items-center  bg-gray-200 p-3 rounded-sm " >



                <div className="w-full h-[150px] bg-white shadow-xl rounded-md flex items-center justify-center " >
                    <Image src={"/partners-logo/unido_itpo.png"} alt="logo" height={1000} width={1000} className="w-32 h-32 object-center object-cover " />

                </div>

            </div>




        </section>
    )
}