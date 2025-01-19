import React, { useState } from "react"
import box from "../img/box1.png"
import close from "../img/close1.png"

function Final() {
    
    const [Close, setClose] = useState(true);

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
            <div className="flex justify-center items-center justify-items-center pt-20 max-sm:pt-10 gap-10 max-sm:grid max-sm:justify-center max-sm:justify-items-center" >
                <div className="grid justify-center justify-items-center " >
                    <div><img src={box} alt="box" className=" h-[215px] w-[226px] max-sm:w-[143px] max-sm:h-[151px] " /></div>
                    <h2 className=" text-[#191D63] font-semibold text-[33px] " >Results</h2>
                </div>
                <div>
                    <p className=" text-[#191D63] font-semibold text-[33px] max-sm:text-[22px] font-sans text-center " >You are blah blah blah and you do blah blah, you wish you could blah blah.<br/><br/>Do blah blah and everything will be amazing and<br/>beautiful and perfect and pay me $12031231 for doing<br/>this service for you, and I’ll give you 3 more<br/>predictions.</p>
                </div>
            </div>
            
            <div className="w-full sm:h-[100px] sm:bg-[#F4F3F6] fixed bottom-0 sm:flex sm:justify-center items-center sm:gap-10 max-sm:p-5 ">
                
                <button className='w-[335px] h-[60px] font-semibold text-sm sm:text-base font-sans leading-normal rounded-lg bg-[#31CD63] text-[#F4F3F6] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 '>
                    OKAY
                </button>
            </div>
        </div>
    );
}

export default Final;