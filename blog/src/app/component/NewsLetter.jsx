import React from 'react';

const NewsLetter = () => {
    return (
        <div className="w-screen mx-auto">
            <section className="relative py-12 md:py-24">
                <img
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -ml-10"
                    src="aurora-assets/newsletter/newsletter-light-top.png"
                    alt=""
                />
                <div className="relative container px-4 mx-auto">
                    <div className="max-w-6xl mx-auto">
                        <div className="py-10 px-4 xs:px-10 text-center bg-white rounded-xl">
                            <div className="max-w-md mx-auto">
                                <h3 className="font-heading tracking-tight text-4xl font-bold mb-4">
                                    Join Newsletter
                                </h3>
                                <p className="text-lg text-gray-500 mb-10">
                                    Get the latest updates delivered into your inbox.
                                </p>
                                <div className="xs:flex mb-5 items-center">
                                    <input
                                        className="py-3 px-4 h-12 w-full mb-3 xs:mb-0 xs:mr-3 text-gray-500 placeholder-gray-500 border border-gray-200 focus:border-yellowGreen-500 outline-none ring ring-transparent focus:ring-yellowGreen-500 rounded-lg"
                                        type="email"
                                        placeholder="Your email"
                                    />
                                    <button
                                        className="xs:flex-shrink-0 group relative flex xs:inline-flex w-full xs:w-auto items-center justify-center px-5 h-12 font-bold text-white bg-gradient-to-br from-cyanGreen-800 to-cyan-800 rounded-lg transition-all duration-300 focus:outline-none"
                                        type="submit"
                                    >
                                        <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-green-300 animate-pulse group-hover:ring-0 transition duration-300" />
                                        <span>Subscribe</span>
                                    </button>
                                </div>
                                <span className="block text-gray-400 text-sm">
            No spam. You can unsubscribe anytime.
          </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default NewsLetter;