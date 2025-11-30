import ButtonComponent from "./UI/ButtonComponent";
import NewsCard from "./UI/NewsCard";




export default function NewsRoom() {
    return (
        <section className="w-full flex flex-col  gap-4 items-center bg-white h-fit font-league-spartan px-[3% ] py-20  " >



            <h1 className="text-2xl md:text-5xl font-semibold mt-10 " >Newsroom</h1>


            <p className=" text-lg md:text-xl font-normal leading-[140%] text-gray-700 text-center   ">Join the conversation, get up to date on all our impact work at One Foundation.</p>



            <div className=" w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center justify-items-center px-[3%] mt-10 " >


                <NewsCard />


            </div>


            <ButtonComponent className=" md:py-3 md:px-12 md:text-2xl rounded-xs " >View more</ButtonComponent>


        </section>
    )
}