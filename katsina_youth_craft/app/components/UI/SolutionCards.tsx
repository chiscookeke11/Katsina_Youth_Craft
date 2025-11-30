import { SolutionDataType } from "@/app/types/types";
import Image from "next/image";



interface solutionCardProps {
    data: SolutionDataType
}

export default function SolutionCard({ data }: solutionCardProps) {
    return (
        <div className=" w-full max-w-sm h-[200px] bg-gray-400 relative group rounded-tl-[70px] rounded-br-[70px]  hover:rounded-none transition-all duration-400 ease-in-out overflow-hidden  " >
            <div className=" bg-black/30 absolute top-0 left-0 h-full w-full " />
            <Image src={"/dummy_image.jpg"} alt="hero-image" height={1000} width={1000} className="w-full h-full absolute object-cover translate-y-[10%] scale-[130%] group-hover:translate-0 transition-all duration-400 ease-in-out " />

            <div className=" absolute top-0 left-0 h-full w-full gap-4   text-white py-5 px-4 pt-[30%] group-hover:pt-6 transition-all duration-600 ease-in-out space-y-3 ">
                <h4 className=" group-hover:text-2xl text-3xl font-semibold md:text-3xl transition-all duration-600 ease-in-out " >{data.title} </h4>
                <p className="text-base md:text-xl scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 " > {data.content} </p>

            </div>
        </div>
    )
}