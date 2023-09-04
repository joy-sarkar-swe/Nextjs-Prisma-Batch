import React from 'react';
import Link from "next/link";

const Featured = () => {
    return (
        <div className="w-screen px-16 ">
            <div className="mb-16">
                <div className="max-w-lg text-center mx-auto mb-8">
                    <h1 className="font-heading tracking-tight text-3xl sm:text-3xl font-bold  mb-2">Featured</h1>
                    <p className="font-thin text-gray-500">Our team has led and delivered large-scale software and design projects in multiple startups.</p>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-16">
                        <a className="group flex flex-col h-full rounded-xl bg-white hover:border-yellowGreen-500 ring ring-transparent hover:ring-yellowGreen-500 overflow-hidden shadow-lg hover:shadow-none border-gray-200 border-l border-b border-r rounded-b-xl" href="#">
                            <div className="flex-shrink-0 h-72 rounded-t-lg overflow-hidden">
                                <img className="block w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2017/07/31/11/09/computer-2557299_1280.jpg" alt=""/>
                            </div>
                            <div className="h-full pt-6 pb-8 px-6">
                                <div className="flex mb-4 items-center">
                                    <span className="text-sm text-gray-500">20 Jul 2023</span>
                                    <span className="mx-3">
                                        <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx={2} cy={2} r={2} fill="#D2DAD5" />
                                        </svg>
                                    </span>
                                    <span className="text-sm text-gray-500">4 min read</span>
                                </div>
                                <h2 className="font-heading tracking-tight text-2xl text-gray-900 font-semibold mb-4">Save Time, Stay Organized: Uncover the Magic</h2>
                                <div className="flex items-center">
                                    <img className="block w-8 h-8 rounded-full object-contain" src="aurora-assets/blog/avatar-medium.png" alt=""/>
                                    <div className="ml-3">
                                        <span className="block text-sm font-medium">Max Ranver</span>
                                        <span className="block text-sm font-medium text-gray-500">Content Writer, Aurora</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="w-full lg:w-1/2 px-4 mb-16">
                        <a className="group flex flex-col h-full rounded-xl bg-white hover:border-yellowGreen-500 ring ring-transparent hover:ring-yellowGreen-500 overflow-hidden shadow-lg hover:shadow-none border-gray-200 border-l border-b border-r rounded-b-xl" href="#">
                            <div className="flex-shrink-0 h-72 rounded-t-lg overflow-hidden">
                                <img className="block w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2017/07/31/11/09/computer-2557299_1280.jpg" alt=""/>
                            </div>
                            <div className="h-full pt-6 pb-8 px-6">
                                <div className="flex mb-4 items-center">
                                    <span className="text-sm text-gray-500">20 Jul 2023</span>
                                    <span className="mx-3">
                                        <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx={2} cy={2} r={2} fill="#D2DAD5" />
                                        </svg>
                                    </span>
                                    <span className="text-sm text-gray-500">4 min read</span>
                                </div>
                                <h2 className="font-heading tracking-tight text-2xl text-gray-900 font-semibold mb-4">Save Time, Stay Organized: Uncover the Magic</h2>
                                <div className="flex items-center">
                                    <img className="block w-8 h-8 rounded-full object-contain" src="aurora-assets/blog/avatar-medium.png" alt=""/>
                                    <div className="ml-3">
                                        <span className="block text-sm font-medium">Max Ranver</span>
                                        <span className="block text-sm font-medium text-gray-500">Content Writer, Aurora</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;