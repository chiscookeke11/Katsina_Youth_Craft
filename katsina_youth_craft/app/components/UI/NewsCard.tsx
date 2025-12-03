import { NewsDataType } from "@/app/types/types";
import Image from "next/image";



interface NewsCardProps {
    data: NewsDataType
}

export default function NewsCard({ data }: NewsCardProps) {
    return (
        <div className="w-full  h-full flex flex-col items-center rounded-md overflow-hidden min-h-[300px]  " >

            <div className=" w-full bg-gray-400  h-[50%] basis-1/2  " >
                <Image src={data.image} alt="image" height={1000} width={1000} className="w-full h-full object-cover object-center " />
            </div>

            {/* The news text  */}
            <div className=" w-full bg-white h-[50%] basis-1/2 mt-5 space-y-2 " >


                <h4 className=" text-gray-600 font-semibold text-xl md:text-2xl " >Sterling One Foundation, UN Convene ASIS 4.0 to Accelerate Africa’s Social Impact Agenda</h4>
                <p className=" text-sm text-gray-500 " >August 28, 2025 at 7:33 AM</p>
            </div>


        </div>
    )
}