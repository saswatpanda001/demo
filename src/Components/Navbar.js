
import { toHaveFocus } from "@testing-library/jest-dom/matchers";
import React, { useState } from "react";

import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'



const Navbar = () => {

    const [toggle,setToggle] = useState(true)


    const changeToggle = () => {
        
        setToggle(!toggle);
        console.log(toggle)

    }



    return(
        <div>
        <div className="w-screen bg-black flex flex-row flex-1 justify-between">
            <h1 className="w-full font-bold text-4xl text-white p-5 ">React Navbar</h1>
               
            
            <ul className="flex flex-row p-3 space-x-10 text-white invisible lg:visible ">
                <li className="p-5">Home</li>
                <li className="p-5">Profile</li>
                <li className="p-5">Orders</li>
                <li className="p-5">Cart</li>
                <li className="p-5">Settings</li>
                <li className="p-5">Logout</li>
            </ul>
            
            <div className="p-5 pr-5 visible lg:invisible bg-black ease-in-out duration-3000" onClick={changeToggle}>
                    {toggle ? <AiOutlineMenu size={30} className="text-white"/> : <AiOutlineClose size={30} className="text-white"/>}
            </div>
            


        </div>


            <div>
               
                <div className={toggle ? "fixed bg-black w-full pl-5" : "fixed bg-black w-full pl-5" } >
                    
                    <ul className={toggle ? "hidden" : "text-white ease-in-out duration-900"}>
                        <li className="p-5 border-b border-white ">Home</li>
                        <li className="p-5 border-b border-white">Profile</li>
                        <li className="p-5 border-b border-white">Orders</li>
                        <li className="p-5 border-b border-white">Cart</li>
                        <li className="p-5 border-b border-white">Settings</li>
                        <li className="p-5 border-b border-white">Logout</li>
                    </ul>



                </div> 

            </div>

        </div>
      




    );
}

export default Navbar;
