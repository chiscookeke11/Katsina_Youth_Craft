


export default function OurStory() {
    return (
        <section className=" w-full flex flex-col md:flex-row items-center justify-evenly gap-6 py-24 md:py-44 px-[3%] font-league-spartan bg-white text-black " >


            <div className=" w-full basis-1/2 flex items-start flex-col gap-4  " >
                <h2 className=" text-3xl  md:text-5xl font-semibold  " >Our <span className="text-red-500" >Story</span></h2>

                <p className=" text-xl md:text-2xl font-medium max-w-3xl ">At Sterling One Foundation, we nurture our African dreams through the strength of partnership, turning aspirations into reality. </p>

            </div>


            <div className=" h-[400px] lg:h-[500px] bg-gray-400 w-full basis-1/2 flex items-center justify-center " >
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/JvmjewDDZ0Y?si=QAs2OjD0Tx_jh_Rq" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen  ></iframe>
            </div>

        </section>
    )
}