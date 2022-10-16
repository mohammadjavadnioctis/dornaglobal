import { FC, memo } from "react"
import { isDev } from "~/utils/helpers"
import smilyFace from "~/assets/icons/SmileyXEyes.png"
import UiImage from "~/lib/Image"
const NoResults : FC = memo(

    ()=>{
       
       return (
           <div className="">
               <p className="text-base">No records found</p>
               <div className="w-full min-h-[200px] py-2 bg-white border border-[#DADBE8]
                                rounded-2xl flex flex-col justify-around items-center"
               >
                   {/* the not-found image */}
               <UiImage 
                   src={smilyFace} 
                   alt='not-found-image'
                   className="w-10 h-10"
                   />
                   <h3>Oops!..</h3>
                   <p className="text-xs opacity-80">No reuslts found with this criteria</p>
               </div>
           </div>
       )
   }
)


if(isDev){
    NoResults.displayName = 'NoResults'
}


export default NoResults