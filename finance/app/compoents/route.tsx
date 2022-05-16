import React,{PropsWithChildren, useEffect, useState} from 'react'
import {IRoute} from '../lib/superbase/superbase.consintants';


const ActiveRoute = ({url,setUrl,name}:PropsWithChildren<IRoute>)=>{
    return(
            url===name ?(
                <a>
                   <span onClick={()=>setUrl(name)} className="font-bold">{name}</span>
                </a>
            ):null
    )
}


function Navigation(){
    const [activeUrl,setActiveUrl] = useState<string>();
    useEffect(()=>{
        if(activeUrl ==='')
    })
}