import { focusCardData } from "@/public/data/FocusCardData";
import FocusAreasCard from "./UI/FocusAreasCards";
import SolutionCard from "./UI/SolutionCards";
import { SolutionData } from "@/public/data/SolutionData";




export default function FocusAreas() {
    return (
        <section className="w-full bg-white py-24 px-[4%] flex items-center flex-col gap-10 font-league-spartan  " >

            <h1 className="text-3xl md:text-5xl font-semibold  " >Our <span className="text-red-500" >Focus Areas</span></h1>

            <div className=" w-full max-w-2xl text-center flex items-center justify-center flex-col gap-8  " >
                <p className=" text-xl md:text-2xl font-medium leading-[140%] text-gray-900   " >
                    Our centre focuses on equipping young people with practical, industry-ready skills across a wide range of vocational fields. We provide hands-on training in Carpentry and Woodwork, Welding and Fabrication, Auto Mechanical and Auto Electrical services, as well as Fashion Designing, Tailoring, Painting, and Tie & Dye. We also offer specialized programs in Hairdressing, Beauty Services, and Computer and Gadget Repair.</p>

                <p className=" text-xl md:text-2xl font-normal leading-[140%] text-gray-700   ">Through these diverse skill areas, we ensure that every trainee gains the knowledge, confidence, and experience needed to build a sustainable career and contribute meaningfully to their community.</p>
            </div>






            <div className="w-full max-w-7xl  mt-5 py-1  grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center justify-items-center " >
                {focusCardData.map((data, index) => (
                    <FocusAreasCard
                        key={index}
                        data={data}
                    />
                ))}



            </div>


            {/* Our solutions */}
            <h1 className="text-3xl md:text-5xl font-semibold mt-10 " >Our <span className="text-red-500" >Solutions</span></h1>

            <div className=" w-full max-w-2xl text-center flex items-center justify-center flex-col gap-8  " >
                <p className=" text-xl md:text-2xl font-normal leading-[140%] text-gray-700   ">Partnering with strategic players in the private/public sectors, we are able to drive social impact across our focus areas through the following programs.</p>
            </div>




            <div className="w-full max-w-7xl  mt-5 py-1  grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center justify-items-center " >
                {
                    SolutionData.map((data, index) => (
                        <SolutionCard key={index} data={data} />
                    ))
                }



            </div>

        </section>
    )
}