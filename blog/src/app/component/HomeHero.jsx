import React from 'react';

const HomeHero = () => {
    return (
       <div className="w-screen px-16 mt-4">
           <div className="relative rounded-xl shadow-xl bg-white mb-12 border border-gray-200 overflow-hidden">
               <div className="flex flex-wrap">
                   <div className="w-full md:w-7/12">
                       <div className="py-12 px-6 lg:py-24 lg:pl-20 lg:pr-24">
                           <div className="flex mb-4 items-center">
                               <span className="text-sm text-gray-500">20 Jul 2023</span>
                               <span className="mx-3">
                                   <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <circle cx={2} cy={2} r={2} fill="#D2DAD5" />
                                   </svg>
                               </span>
                               <span className="text-sm text-gray-500">4 min read</span>
                           </div>
                           <div className="max-w-md lg:max-w-xl">
                               <h2 className="font-heading tracking-tight text-3xl md:text-4xl text-gray-900 font-semibold mb-6">
                                   Effortless Asset Organization: Simplify with Bookmarking
                               </h2>
                               <p className="text-lg text-gray-500 mb-4">
                                   We've all experienced the chaos of multiple spreadsheets, tracking
                                   and insight tools...
                               </p>
                               <div className="flex items-center mb-8">
                                   <span className="text-sm text-gray-500">By</span>
                                   <img className="block w-5 h-5 mx-2 rounded-full" src="aurora-assets/blog/avatar-medium.png" alt=""/>
                                   <span className="text-sm font-medium">Max Ranver</span>
                               </div>
                               <a className="group relative flex xs:inline-flex h-10 px-4 items-center justify-center text-sm font-semibold text-gray-700 hover:text-yellowGreen-600 border border-gray-200 hover:border-yellowGreen-600 shadow-sm hover:shadow-none rounded-lg transition duration-100" href="#">
                                   <span className="mr-2">Read more</span>
                                   <span className="transform group-hover:translate-x-1">
                                       <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.00016 8H12.3335M12.3335 8L8.3335 4M12.3335 8L8.3335 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                               </a>
                           </div>
                       </div>
                   </div>
                   <div className="w-full md:w-5/12">
                       <div className="flex h-full w-full items-center justify-end">
                           <img className="block rounded-bl-lg rounded-tl-lg w-full" src="https://cdn.pixabay.com/photo/2010/12/05/rocket-969_1280.jpg" alt=""/>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    );
};
export default HomeHero;