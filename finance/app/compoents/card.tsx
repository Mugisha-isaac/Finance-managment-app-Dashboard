import type { FunctionComponent } from "react";
import type { ICardInfo } from "~/lib/superbase/superbase.consintants";

const Card:FunctionComponent<{card:ICardInfo}> = ({card:{name,cvv,endingDigits,exp_date,id}})=>{
      return(
               <div className="">
                  card data
               </div>
      )
}

export default Card;