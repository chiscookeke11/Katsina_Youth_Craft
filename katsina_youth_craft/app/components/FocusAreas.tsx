



export default function FocusAreas() {
    return (
        <section className="w-full bg-white py-22 px-[4%] flex items-center flex-col gap-10 font-league-spartan  " >

            <h1 className="text-2xl md:text-5xl font-semibold  " >Our <span className="text-red-500" >Focus Areas</span></h1>

        <div className=" w-full max-w-2xl text-center flex items-center justify-center flex-col gap-8  " >
            <p className=" text-lg md:text-xl font-medium leading-[140%] text-gray-900   " >Our Focus Areas are directly aligned with the United Nations’ Sustainable Development Goals, through targeted interventions in education, health, and climate action, with gender equality and women empowerment woven into all programming areas as a cross-cutting priority.</p>
            <p className=" text-lg md:text-xl font-normal leading-[140%] text-gray-700   ">We partner with strategic players in the following thematic areas and sectors to create a community where everyone has the opportunity to maximize their potential and add value to society.</p>
        </div>






<div className="w-full max-w-7xl bg-amber-800 mt-5 py-1  grid grid-cols-1 md:grid-cols-3 place-items-center justify-items-center " >
<FocusAreas/>
<FocusAreas/>
<FocusAreas/>

</div>

        </section>
    )
}