import React from 'react';
import AppNavBar from "@/app/component/AppNavBar";
import BlogList from "@/app/component/BlogList";


const Page = () => {
    return (
        <div>
           <AppNavBar/>
            <BlogList/>
        </div>
    );
};

export default Page;