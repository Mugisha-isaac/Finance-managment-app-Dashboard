import type { FunctionComponent } from "react";
import type { ICardInfo } from "~/lib/superbase/superbase.consintants";

const Card:FunctionComponent<{card:ICardInfo}> = ({card:{name,cvv,endingDigits,exp_date,id}})=>{
      return(
               <div className="">
                 <p className="absolute top-0 right-6 py-6 text-white text-lg">VISA</p>
               </div>
      )
}

export default Card;