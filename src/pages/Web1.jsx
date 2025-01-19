import React, { useState } from "react"
import Progress from "../components/progress.jsx"
import close from "../img/close1.png"
import optA from "../img/optA.png"
import optB from "../img/optB.png"
import choose from "../img/choose.png"
import {Link} from "react-router-dom"

function Web1() {
    const [count, setCount] = useState(1);
    const [option, setOption] = useState(null);
    const [Close, setClose] = useState(true);

    const newCount = () => {
        setCount((prev) => prev + 1)
    }

    const newOption = (opt) => {
        setOption(opt)
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
            <div className="px-4 sm:px-0 mt-8 sm:mt-20 max-sm:pt-10 ">
                <p className="text-[#191D63] font-semibold text-xl max-sm:text-[22px] sm:text-[28px] sm:text-center">Do you prefer warm or cool weather?</p>
            </div>
            <div className="flex flex-col items-center gap-4 sm:gap-8 mt-8 sm:mt-20 px-4 max-sm:pt-20 ">
                <button onClick={() => newOption("Warm")} className="w-full sm:w-auto">
                    <div className={`w-full sm:w-[510px] h-16 sm:h-[81px] flex items-center rounded-lg ${option === "Warm" ? "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 bg-[#45C486] text-[#E9F0EF]" : "bg-[#F4F3F6] text-black"}`}>
                        <div className="pl-3 sm:pl-5"><img src={option === "Warm" ? choose : optA} alt="option A" className="h-8 w-8 sm:h-12 sm:w-12" /></div>
                        <div className="pl-4 sm:pl-10"><p className="font-semibold text-lg sm:text-xl font-sans">Warm</p></div>
                    </div>
                </button>

                <button onClick={() => newOption("Cool")} className="w-full sm:w-auto">
                    <div className={`w-full sm:w-[510px] h-16 sm:h-[81px] flex items-center rounded-lg 
                        ${option === "Cool" ? "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 bg-[#45C486] text-[#E9F0EF]" : "bg-[#F4F3F6]"}`}>
                        <div className="pl-3 sm:pl-5"><img src={option === "Cool" ? choose : optB} alt="option B" className="h-8 w-8 sm:h-12 sm:w-12" /></div>
                        <div className="pl-4 sm:pl-10"><p className="text-black font-semibold text-lg sm:text-xl font-sans">Cool</p></div>
                    </div>
                </button>
            </div>
            <div className="w-full sm:h-[100px] sm:bg-[#F4F3F6] fixed bottom-0 sm:flex sm:justify-center items-center sm:gap-10 max-sm:p-5 ">
                <Progress Count={count} />
                <Link to="/Web2" >
                    <button className={`w-[335px] h-[60px] font-semibold text-sm sm:text-base font-sans leading-normal rounded-lg ${option === 'Warm' || option === 'Cool' ? "bg-[#31CD63] text-[#F4F3F6] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105" : "bg-[#747475] text-[#EDE8E2] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105"}`} onClick={newCount}>
                        CONTINUE
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Web1;