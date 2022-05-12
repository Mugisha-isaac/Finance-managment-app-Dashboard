import type { FunctionComponent } from "react";
import type { ICardInfo } from "~/lib/superbase/superbase.consintants";

const Card:FunctionComponent<{card:ICardInfo}> = ({card:{name,cvv,endingDigits,exp_date,id}})=>{
      return(
               <div className="">
                 <p className="absolute top-0 right-6 py-6  text-xl font-bold">VISA</p>
                 <div>
                     <p className="absolute top-2 left-0 text-sm px-4">Name Card</p>
                     <p className="absolute top-8 left-0 px-4  text-sm font-bold">{name}</p>
                     <div className="flex flex-row absolute top-[4.3rem] left-0 px-4 gap-2">
                     <p className=" text-xl font-bold">.... .... ....</p>
                     <p className="text-lg font-bold">{endingDigits}</p>
                     </div>

                     <div className="absolute bottom-2 mb-2 left-4 flex flex-row gap-2 ">
                         <div className="text-[0.6rem]">
                             <p className="opacity-25">EXP DATE</p>
                             <p className="text-center font-bold">{exp_date}</p>
                         </div>

                         <div className="text-[0.6rem]">
                             <p className="opacity-25">CVV NUMBER</p>
                             <p className="text-center font-bold">{cvv}</p>
                         </div>
                     </div>
                 </div>

               </div>
      )
}

export default Card;