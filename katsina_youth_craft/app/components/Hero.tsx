import Image from "next/image";
import ButtonComponent from "./UI/ButtonComponent";



export default function HeroSection() {
    return (
        <section className="w-full bg-gray-400 flex items-center justify-center h-screen md:h-[70vh] relative lg:h-screen font-league-spartan  " >


            <Image src={"/HeroSection_images/hero-bg.jpeg"} alt="hero-image" height={1000} width={1000} className="w-full h-full absolute object-cover " />



            {/* Text wrapper */}
            <div className="w-full  h-full bg-black/35 text-white  absolute  top-0 left-0 flex flex-col items-start justify-center  z-10  px-[4%] py-14 pt-32 " >

                <div className="md:w-[78%] flex flex-col gap-6 items-start  " >
                    <h1 className=" text-4xl md:text-5xl lg:text-7xl font-bold max-w-4xl leading-[118%] mb-2 " >Empowering <span className="text-[#dcae3a] " >Youth</span> Through Skills & Opportunity</h1>

                    <p className=" text-xl md:text-2xl lg:text-3xl max-w-5xl hidden md:block " >Building careers with hands-on training, certification, and startup support.D</p>




                    <ButtonComponent className="py-4 px-12 text-xl rounded-sm! mt-5  " >Learn more</ButtonComponent>
                </div>
            </div>
        </section>
    )
}