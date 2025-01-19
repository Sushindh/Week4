import React, { useState } from "react"
import Progress from "../components/progress.jsx"
import close from "../img/close1.png"
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import {Link} from "react-router-dom"

function Web2() {
    const [count, setCount] = useState(2);
    
    const [Close, setClose] = useState(true);
    const [color, setColor] = useColor("#561ecb");

    const newCount = () => {
        setCount((prev) => prev + 1)
    }    

    const newClose = () => {
        setClose(false)
    }

    if (!Close) {
        return null;
    }

    return (
        <div className="bg-[#EDE8E3] min-h-screen flex flex-col overflow-hidden ">
            <div className="flex justify-between items-start px-4 sm:px-5 pt-6 sm:pt-10">
                <h1 className="font-sans text-xl sm:text-2xl font-semibold text-center flex-1">Fortune Quiz</h1>
                <button onClick={newClose} className="mt-1 sm:mt-0"><img src={close} className="h-8 w-8 sm:h-12 sm:w-12" alt="close" /></button>
            </div>
            <div className="px-4 sm:px-0 mt-8 sm:mt-20 max-sm:pt-10 grid justify-center justify-items-center gap-10  ">
                <p className="text-[#191D63] font-semibold text-xl max-sm:text-[22px] sm:text-[28px] sm:text-center ">What's your favorite color?</p>
                <div className="w-[500px] max-sm:w-[300px]  " ><ColorPicker color={color} onChange={setColor} height={100} hideHSV dark /></div>
                {/* <div><p>The Selected Color is {color.} </p></div> */}
            </div>
            <p className="text-center text-2xl font-sans font-semibold pt-5 max-sm:text-lg  " >Selected Color is <span style={{color:color.hex}} >{color.hex}</span></p>

            
            
            <div className="w-full sm:h-[100px] sm:bg-[#F4F3F6] fixed bottom-0 sm:flex sm:justify-center items-center sm:gap-10 max-sm:p-5 max-sm:grid max-sm:justify-items-center ">
                <Progress Count={count} />
                <Link to="/Web3" >
                    <button className='w-[335px] h-[60px] font-semibold text-sm sm:text-base font-sans leading-normal rounded-lg bg-[#31CD63] text-[#F4F3F6] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 ' onClick={newCount}>
                        CONTINUE
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Web2;