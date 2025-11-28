import Image from "next/image";
import ButtonComponent from "./ButtonComponent";
import { FocusCardType } from "@/app/types/types";



interface FocusAreasCardProps {
data: FocusCardType
}


export default function FocusAreasCard({ data }: FocusAreasCardProps) {
    return (
        <div className=" w-full max-w-sm md:max-w-none h-[500px]  md:h-[410px] lg:h-[550px] bg-gray-500 overflow-hidden relative rounded-xl group " >
            <Image src={"/HeroSection_images/dummy_image.jpg"} alt="hero-image" height={1000} width={1000} className="w-full h-full absolute object-cover translate-y-[10%] scale-[130%] group-hover:translate-0 transition-all duration-400 ease-in-out " />


            <div className="w-full h-full absolute top-0 left-0 bg-green-600/75 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-in-out " />


            <div className="h-fit absolute w-full left-0 bottom-0 py-5 px-3 flex flex-col items-start gap-4 " >
                <h3 className="text-white font-semibold text-xl md:text-2xl  " > {data.title} </h3>

                <div className="  text-white/80 leading-0 overflow-hidden group-hover:leading-[150%] transition-all duration-400 ease-in-out text-base md:text-lg opacity-0 group-hover:opacity-100 " >
                    <p > {data.content} </p>

                </div>


                <ButtonComponent className="bg-white text-black! translate-y-[30%]  opacity-0 group-hover:opacity-100 group-hover:translate-0 transition-all duration-400 ease-in-out "  >Learn more</ButtonComponent>
            </div>

            <div>

            </div>
        </div>
    )
}