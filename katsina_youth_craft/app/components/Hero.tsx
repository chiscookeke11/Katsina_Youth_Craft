import Image from "next/image";
import ButtonComponent from "./UI/ButtonComponent";



export default function HeroSection() {
    return (
        <section className="w-full bg-gray-400 flex items-center justify-center h-[62vh] relative xl:h-screen font-league-spartan " >


            <Image src={"/HeroSection_images/dummy_image.jpg"} alt="hero-image" height={1000} width={1000} className="w-full h-full absolute object-cover " />



            {/* Text wrapper */}
            <div className="w-full  h-full bg-black/25 text-white  absolute  top-0 left-0 flex flex-col items-start justify-center  z-10  px-[4%] py-14 " >

               <div className="w-[78%] flex flex-col gap-6 items-start " >
                 <h1 className=" text-3xl md:text-6xl font-bold max-w-2xl leading-[130%] mb-2 " >Driving <span className="text-[#dcae3a] " >Social Impact</span> Across Africa</h1>

                <p className=" text-2xl " >We are a vehicle for social impact across critical sectors in the economy driven by the unique challenges facing Africa and the need for progressive change.</p>




                <ButtonComponent className="py-5 px-12 text-lg rounded-sm! mt-5  " >Learn more</ButtonComponent>
               </div>
            </div>
        </section>
    )
}