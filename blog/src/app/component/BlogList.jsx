import React from 'react';
import Link from "next/link";

const BlogList = () => {
    return (
        <div className="w-screen px-16 ">
            <div className="mb-16">
                <div className="max-w-lg text-center mx-auto mb-8">
                    <h1 className="font-heading tracking-tight text-3xl sm:text-3xl font-bold  mb-2">Whats New</h1>
                    <p className="font-thin text-gray-500">Our team has led and delivered large-scale software and design projects in multiple startups.</p>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                        <Link className="group bg-white flex flex-col h-full md:max-w-sm rounded-xl  hover:border-yellowGreen-500 ring ring-transparent hover:ring-yellowGreen-500" href="#">
                            <div className="flex-shrink-0 h-68 rounded-t-lg overflow-hidden">
                                <img className="block w-full" src="https://cdn.pixabay.com/photo/2017/03/04/12/15/programming-2115930_1280.jpg" alt=""/>
                            </div>
                            <div className="h-full py-10 md:pt-6 md:pb-8 px-5 shadow-xl border-gray-200 border-l border-b border-r rounded-b-xl">
                                <div className="flex mb-4 items-center"><span className="text-sm text-gray-500">20 Jul 2023</span><span className="mx-3">
                                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={2} cy={2} r={2} fill="#D2DAD5" />
                                </svg>
                            </span>
                                    <span className="text-sm text-gray-500">4 min read</span>
                                </div>
                                <h2 className="font-heading tracking-tight text-xl text-gray-900 font-semibold mb-4">
                                    Save Time, Stay Organized: Uncover the Magic
                                </h2>
                                <div className="flex items-center">
                                    <span className="text-sm text-gray-500">By</span>
                                    <img className="block w-5 h-5 mx-2 rounded-full" src="aurora-assets/blog/avatar-medium.png" alt=""/>
                                    <span className="text-sm font-medium">Max Ranver</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                        <Link className="group bg-white flex flex-col h-full md:max-w-sm rounded-xl  hover:border-yellowGreen-500 ring ring-transparent hover:ring-yellowGreen-500" href="#">
                            <div className="flex-shrink-0 h-68 rounded-t-lg overflow-hidden">
                                <img className="block w-full" src="https://cdn.pixabay.com/photo/2017/03/04/12/15/programming-2115930_1280.jpg" alt=""/>
                            </div>
                            <div className="h-full py-10 md:pt-6 md:pb-8 px-5 shadow-xl border-gray-200 border-l border-b border-r rounded-b-xl">
                                <div className="flex mb-4 items-center"><span className="text-sm text-gray-500">20 Jul 2023</span><span className="mx-3">
                                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={2} cy={2} r={2} fill="#D2DAD5" />
                                </svg>
                            </span>
                                    <span className="text-sm text-gray-500">4 min read</span>
                                </div>
                                <h2 className="font-heading tracking-tight text-xl text-gray-900 font-semibold mb-4">
                                    Save Time, Stay Organized: Uncover the Magic
                                </h2>
                                <div className="flex items-center">
                                    <span className="text-sm text-gray-500">By</span>
                                    <img className="block w-5 h-5 mx-2 rounded-full" src="aurora-assets/blog/avatar-medium.png" alt=""/>
                                    <span className="text-sm font-medium">Max Ranver</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                        <Link className="group bg-white flex flex-col h-full md:max-w-sm rounded-xl  hover:border-yellowGreen-500 ring ring-transparent hover:ring-yellowGreen-500" href="#">
                            <div className="flex-shrink-0 h-68 rounded-t-lg overflow-hidden">
                                <img className="block w-full" src="https://cdn.pixabay.com/photo/2017/03/04/12/15/programming-2115930_1280.jpg" alt=""/>
                            </div>
                            <div className="h-full py-10 md:pt-6 md:pb-8 px-5 shadow-xl border-gray-200 border-l border-b border-r rounded-b-xl">
                                <div className="flex mb-4 items-center"><span className="text-sm text-gray-500">20 Jul 2023</span><span className="mx-3">
                                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={2} cy={2} r={2} fill="#D2DAD5" />
                                </svg>
                            </span>
                                    <span className="text-sm text-gray-500">4 min read</span>
                                </div>
                                <h2 className="font-heading tracking-tight text-xl text-gray-900 font-semibold mb-4">
                                    Save Time, Stay Organized: Uncover the Magic
                                </h2>
                                <div className="flex items-center">
                                    <span className="text-sm text-gray-500">By</span>
                                    <img className="block w-5 h-5 mx-2 rounded-full" src="aurora-assets/blog/avatar-medium.png" alt=""/>
                                    <span className="text-sm font-medium">Max Ranver</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                        <Link className="group bg-white flex flex-col h-full md:max-w-sm rounded-xl  hover:border-yellowGreen-500 ring ring-transparent hover:ring-yellowGreen-500" href="#">
                            <div className="flex-shrink-0 h-68 rounded-t-lg overflow-hidden">
                                <img className="block w-full" src="https://cdn.pixabay.com/photo/2017/03/04/12/15/programming-2115930_1280.jpg" alt=""/>
                            </div>
                            <div className="h-full py-10 md:pt-6 md:pb-8 px-5 shadow-xl border-gray-200 border-l border-b border-r rounded-b-xl">
                                <div className="flex mb-4 items-center"><span className="text-sm text-gray-500">20 Jul 2023</span><span className="mx-3">
                                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={2} cy={2} r={2} fill="#D2DAD5" />
                                </svg>
                            </span>
                                    <span className="text-sm text-gray-500">4 min read</span>
                                </div>
                                <h2 className="font-heading tracking-tight text-xl text-gray-900 font-semibold mb-4">
                                    Save Time, Stay Organized: Uncover the Magic
                                </h2>
                                <div className="flex items-center">
                                    <span className="text-sm text-gray-500">By</span>
                                    <img className="block w-5 h-5 mx-2 rounded-full" src="aurora-assets/blog/avatar-medium.png" alt=""/>
                                    <span className="text-sm font-medium">Max Ranver</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                        <Link className="group bg-white flex flex-col h-full md:max-w-sm rounded-xl  hover:border-yellowGreen-500 ring ring-transparent hover:ring-yellowGreen-500" href="#">
                            <div className="flex-shrink-0 h-68 rounded-t-lg overflow-hidden">
                                <img className="block w-full" src="https://cdn.pixabay.com/photo/2017/03/04/12/15/programming-2115930_1280.jpg" alt=""/>
                            </div>
                            <div className="h-full py-10 md:pt-6 md:pb-8 px-5 shadow-xl border-gray-200 border-l border-b border-r rounded-b-xl">
                                <div className="flex mb-4 items-center"><span className="text-sm text-gray-500">20 Jul 2023</span><span className="mx-3">
                                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={2} cy={2} r={2} fill="#D2DAD5" />
                                </svg>
                            </span>
                                    <span className="text-sm text-gray-500">4 min read</span>
                                </div>
                                <h2 className="font-heading tracking-tight text-xl text-gray-900 font-semibold mb-4">
                                    Save Time, Stay Organized: Uncover the Magic
                                </h2>
                                <div className="flex items-center">
                                    <span className="text-sm text-gray-500">By</span>
                                    <img className="block w-5 h-5 mx-2 rounded-full" src="aurora-assets/blog/avatar-medium.png" alt=""/>
                                    <span className="text-sm font-medium">Max Ranver</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                        <Link className="group bg-white flex flex-col h-full md:max-w-sm rounded-xl  hover:border-yellowGreen-500 ring ring-transparent hover:ring-yellowGreen-500" href="#">
                            <div className="flex-shrink-0 h-68 rounded-t-lg overflow-hidden">
                                <img className="block w-full" src="https://cdn.pixabay.com/photo/2017/03/04/12/15/programming-2115930_1280.jpg" alt=""/>
                            </div>
                            <div className="h-full py-10 md:pt-6 md:pb-8 px-5 shadow-xl border-gray-200 border-l border-b border-r rounded-b-xl">
                                <div className="flex mb-4 items-center"><span className="text-sm text-gray-500">20 Jul 2023</span><span className="mx-3">
                                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={2} cy={2} r={2} fill="#D2DAD5" />
                                </svg>
                            </span>
                                    <span className="text-sm text-gray-500">4 min read</span>
                                </div>
                                <h2 className="font-heading tracking-tight text-xl text-gray-900 font-semibold mb-4">
                                    Save Time, Stay Organized: Uncover the Magic
                                </h2>
                                <div className="flex items-center">
                                    <span className="text-sm text-gray-500">By</span>
                                    <img className="block w-5 h-5 mx-2 rounded-full" src="aurora-assets/blog/avatar-medium.png" alt=""/>
                                    <span className="text-sm font-medium">Max Ranver</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                        <Link className="group bg-white flex flex-col h-full md:max-w-sm rounded-xl  hover:border-yellowGreen-500 ring ring-transparent hover:ring-yellowGreen-500" href="#">
                            <div className="flex-shrink-0 h-68 rounded-t-lg overflow-hidden">
                                <img className="block w-full" src="https://cdn.pixabay.com/photo/2017/03/04/12/15/programming-2115930_1280.jpg" alt=""/>
                            </div>
                            <div className="h-full py-10 md:pt-6 md:pb-8 px-5 shadow-xl border-gray-200 border-l border-b border-r rounded-b-xl">
                                <div className="flex mb-4 items-center"><span className="text-sm text-gray-500">20 Jul 2023</span><span className="mx-3">
                                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={2} cy={2} r={2} fill="#D2DAD5" />
                                </svg>
                            </span>
                                    <span className="text-sm text-gray-500">4 min read</span>
                                </div>
                                <h2 className="font-heading tracking-tight text-xl text-gray-900 font-semibold mb-4">
                                    Save Time, Stay Organized: Uncover the Magic
                                </h2>
                                <div className="flex items-center">
                                    <span className="text-sm text-gray-500">By</span>
                                    <img className="block w-5 h-5 mx-2 rounded-full" src="aurora-assets/blog/avatar-medium.png" alt=""/>
                                    <span className="text-sm font-medium">Max Ranver</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                        <Link className="group bg-white flex flex-col h-full md:max-w-sm rounded-xl  hover:border-yellowGreen-500 ring ring-transparent hover:ring-yellowGreen-500" href="#">
                            <div className="flex-shrink-0 h-68 rounded-t-lg overflow-hidden">
                                <img className="block w-full" src="https://cdn.pixabay.com/photo/2017/03/04/12/15/programming-2115930_1280.jpg" alt=""/>
                            </div>
                            <div className="h-full py-10 md:pt-6 md:pb-8 px-5 shadow-xl border-gray-200 border-l border-b border-r rounded-b-xl">
                                <div className="flex mb-4 items-center"><span className="text-sm text-gray-500">20 Jul 2023</span><span className="mx-3">
                                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={2} cy={2} r={2} fill="#D2DAD5" />
                                </svg>
                            </span>
                                    <span className="text-sm text-gray-500">4 min read</span>
                                </div>
                                <h2 className="font-heading tracking-tight text-xl text-gray-900 font-semibold mb-4">
                                    Save Time, Stay Organized: Uncover the Magic
                                </h2>
                                <div className="flex items-center">
                                    <span className="text-sm text-gray-500">By</span>
                                    <img className="block w-5 h-5 mx-2 rounded-full" src="aurora-assets/blog/avatar-medium.png" alt=""/>
                                    <span className="text-sm font-medium">Max Ranver</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogList;