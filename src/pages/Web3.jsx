import React, { useState } from "react"
import Progress from "../components/progress.jsx"
import close from "../img/close1.png"
import {Link} from "react-router-dom"

function Web3() {
    const [count, setCount] = useState(3);
    const [Close, setClose] = useState(true);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [showMonthSelect, setShowMonthSelect] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

    const newCount = () => {
        setCount((prev) => prev + 1)
    }    

    const newClose = () => {
        setClose(false)
    }

    if (!Close) {
        return null;
    }

    const getDaysInMonth = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        
        const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
        
        const days = [];
        
        for (let i = adjustedFirstDay - 1; i >= 0; i--) {
            days.push({
                day: new Date(year, month, -i).getDate(),
                isCurrentMonth: false
            });
        }

        for (let i = 1; i <= daysInMonth; i++) {
            days.push({
                day: i,
                isCurrentMonth: true
            });
        }
        
        const remainingDays = 42 - days.length; 
        for (let i = 1; i <= remainingDays; i++) {
            days.push({
                day: i,
                isCurrentMonth: false
            });
        }
        
        return days;
    };

    const navigateMonth = (direction) => {
        const newDate = new Date(currentDate);
        newDate.setMonth(currentDate.getMonth() + direction);
        setCurrentDate(newDate);
    };

    const selectMonth = (monthIndex) => {
        const newDate = new Date(currentDate);
        newDate.setMonth(monthIndex);
        setCurrentDate(newDate);
        setShowMonthSelect(false);
    };

    const handleDateSelect = (day, isCurrentMonth) => {
        if (isCurrentMonth) {
            const newDate = new Date(currentDate);
            newDate.setDate(day);
            setSelectedDate(newDate);
        }
    };

    return (
        <div className="bg-[#EDE8E3] min-h-screen flex flex-col overflow-hidden">
            <div className="flex justify-between items-start px-4 sm:px-5 pt-6 sm:pt-10">
                <h1 className="font-sans text-xl sm:text-2xl font-semibold text-center flex-1">Fortune Quiz</h1>
                <button onClick={newClose} className="mt-1 sm:mt-0">
                    <img src={close} className="h-8 w-8 sm:h-12 sm:w-12" alt="close" />
                </button>
            </div>
            
            <div className=" sm:px-0 mt-8 sm:mt-20 max-sm:pt-10 flex justify-center justify-items-center gap-10">
                <p className="text-[#191D63] font-semibold text-xl max-sm:text-[22px] sm:text-[28px] sm:text-center">
                    When's your birthday?
                </p>
                <p className=" text-xl font-lec font-semibold text-[#191D63] " >Date chosen is {selectedDate ? `${selectedDate.getDate()} ${months[selectedDate.getMonth()]} ${selectedDate.getFullYear()}` : "None"}</p>
            </div>

            <div className="flex justify-center items-center text-center mt-3">
                <div className="w-[400px] bg-[#EDE8E3] p-6 rounded-3xl shadow-2xl shadow-black ">
                    <div className="flex justify-between items-center mb-6">
                        <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-gray-50" onClick={() => navigateMonth(-1)}>
                            <span className="text-2xl text-gray-600">&larr;</span>
                        </button>
                        <div className="flex gap-2 items-center">
                            <div className="relative">
                                <button className="px-4 py-1 bg-[#FFFFFF] text-green-600 text-lg font-medium font-sans rounded-lg hover:bg-green-200 scroll-smooth " style={{ maxHeight: '200px', overflowY: 'auto' }} onClick={() => setShowMonthSelect(!showMonthSelect)}>
                                     {months[currentDate.getMonth()]}
                                </button>

                                {showMonthSelect && (
                                    <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 z-10">
                                        {months.map((month, index) => (
                                            <button key={month} className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${index === currentDate.getMonth() ? 'text-green-600 text-lg font-medium font-sans ' : 'text-black text-lg font-medium font-sans ' }`} onClick={() => selectMonth(index)}>
                                                {month}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="bg-[#FFFFFF] px-3 py-1 rounded-lg font-semibold">
                                {currentDate.getFullYear()}
                            </div>
                        </div>

                        <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-gray-50" onClick={() => navigateMonth(1)}>
                            <span className="text-2xl text-gray-600">&rarr;</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                        {weekDays.map(day => (
                            <div key={day} className="h-10 flex items-center justify-center font-semibold text-gray-700">
                                {day}
                            </div>
                        ))}

                        {getDaysInMonth().map((dateObj, index) => (
                            <button key={index} onClick={() => handleDateSelect(dateObj.day, dateObj.isCurrentMonth)} className={`h-10 flex items-center justify-center rounded-lg transition-colors ${dateObj.isCurrentMonth ? selectedDate && selectedDate.getDate() === dateObj.day && selectedDate.getMonth() === currentDate.getMonth() ? 'bg-green-500 text-white text-lg font-medium font-sans ' : 'hover:bg-gray-200 bg-[#F4F3F6] text-gray-900 text-lg font-medium font-sans' : 'text-gray-400 text-lg font-medium font-sans' }`} >
                                {dateObj.day}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="w-full sm:h-[100px] sm:bg-[#F4F3F6] fixed bottom-0 sm:flex sm:justify-center items-center sm:gap-10 max-sm:p-5 max-sm:grid max-sm:justify-items-center">
                <Progress Count={count} />
                <Link to="/Web4" >
                    <button className={`w-[335px] h-[60px] font-semibold text-sm sm:text-base font-sans leading-normal rounded-lg ${selectedDate ? 'bg-[#31CD63] text-[#F4F3F6] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105' : 'bg-[#747475] text-[#EDE8E2]'}`} onClick={newCount} disabled={!selectedDate} >
                        CONTINUE
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Web3;