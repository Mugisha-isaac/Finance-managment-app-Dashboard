import React,{PropsWithChildren, useEffect, useState} from 'react'
import {IRoute} from '../lib/superbase/superbase.consintants';


const ActiveRoute = ({url,setUrl,name,route}:PropsWithChildren<IRoute>)=>{

const handleOnclickEvents = ()=>{
    setUrl(name);
}

    return (
        url === name ? (
            <a href={route} className="bg-red-500">
                <span onClick={()=>handleOnclickEvents}>{url}</span>
            </a>
        ):
        <a>{url}</a>
    )
}


export default ActiveRoute; 