"use client"
function getData() {
    return [
        {"id":1,"name":"Featured"},
        {"id":3,"name":"Tutorials"},
        {"id":4,"name":"Tips"},
        {"id":6,"name":"Insights"},
        {"id":9,"name":"Other"}
    ]
}

import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation'
const AppNavBar =  () => {
    let list =  getData();
    let current=usePathname();
    return (
        <div className="w-screen  px-0  mx-auto sticky top-0  z-50 bg-white pt-4 ">
            <div className="text-center border-b">
                <h1 className="font-heading text-teal-800 tracking-tight text-3xl sm:text-3xl lg:text-3xl font-bold mb-8">
                    Captain Binary
                </h1>
                    <div className="flex -mx-4  w-full lg:w-auto flex-wrap items-bottom justify-center">
                        <div className="px-0.5">
                            <Link
                                className={current==="/"? "inline-block  sm:px-8 pb-8 leading-none font-semibold text-gray-900 sm:border-b-4 border-yellowGreen-500" : "inline-block  sm:px-8 pb-8 leading-none font-semibold text-gray-900 sm:border-b-2 border-transparent hover:border-yellowGreen-500"}
                                href="/">All</Link>
                        </div>
                        {
                            list.map((item,i)=>{
                                return(
                                    <div className="px-0.5">
                                        <Link href={"/"+item['name']} className={current==="/"+item['name']? "inline-block  sm:px-8 pb-8 leading-none font-semibold text-gray-900 sm:border-b-4 border-yellowGreen-500" : "inline-block  sm:px-8 pb-8 leading-none font-semibold text-gray-900 sm:border-b-2 border-transparent hover:border-yellowGreen-500"}>
                                            {item['name']}
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
        </div>

    );
};
export default AppNavBar;