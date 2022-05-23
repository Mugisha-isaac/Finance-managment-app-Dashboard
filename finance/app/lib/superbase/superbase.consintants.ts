import { IconType } from "react-icons"


export interface ICardInfo{
    id:number,
    name:string,
    endingDigits: number,
    exp_date:string,
    cvv: number
}   

export interface IChartInfo{
    id:number,
    value:number,
}

export interface IRoute{
    url?:string,
    setUrl?:Function,
    name?:string,
    route?:string
}
    

















































































































