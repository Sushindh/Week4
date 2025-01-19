import React, { useState, useEffect } from "react"

function progress(props){


    const page=4;
    const percentage = (props.Count/page) * 100;
    let barlength;
    if(percentage<=25){
        barlength = "25%"
    }else if(percentage <= 50){
        barlength = "50%"
    }else if(percentage <= 75){
        barlength = "75%"
    }else{
        barlength = "100%"
    }

    return(
        <div className=" flex justify-center items-center gap-5 max-sm:fixed max-sm:top-20  " >
            <div className=" h-[16px] max-sm:h-[12px] w-[200px] max-sm:w-[250px] bg-[#EDE8E3] max-sm:bg-white rounded-2xl " >
                <div className='h-[16px] max-sm:h-[12px] rounded-2xl bg-[#31CD63] ' style={{width : barlength }}  > 
                    
                </div>
            </div>
            <p className=" text-[#757575] text-base max-sm:text-sm font-semibold font-sans " >{props.Count}/4</p>
        </div>
    );
}

export default progress;