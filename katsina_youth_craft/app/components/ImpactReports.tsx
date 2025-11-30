import Image from "next/image";
import ButtonComponent from "./UI/ButtonComponent";



export default function ImpactReports() {
    return (
        <section className=" bg-[#f2f5fc]  w-full grid grid-cols-1 md:grid-cols-2 place-items-center justify-items-center  font-league-spartan  " >


            <div className="  basis-1/2 w-full h-full min-h-[300px] md:min-h-0  py-2 px-2  " >
            <Image src={"/HeroSection_images/hero-bg.jpeg"} alt="image" height={1000} width={1000} className="w-full h-full object-cover object-center "  />

            </div>




            <div className="  basis-1/2 w-full h-full flex flex-col items-start justify-center gap-7 py-14 px-6 bg-blue-950 text-white    " >
                <h4 className=" text-lg md:text-xl font-medium " >REPORTS</h4>

                <div className="space-y-3" >
                    <h2 className=" text-2xl  md:text-3xl font-semibold  " >IMPACT REPORT</h2>
                    <p className=" text-xl md:text-2xl font-medium max-w-3xl " >At Sterling One Foundation, we are dedicated to impacting the African continent. Read more about our activities, social initiatives and programs that drive social impact across Africa.</p>
                </div>


                <ButtonComponent className=" text-base md:text-lg" >See All Reports</ButtonComponent>
            </div>
        </section>
    )
}