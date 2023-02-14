import React from "react";
import Footer from "../../components/Footer/Footer";
import GetStarted from "../../components/GetStarted/GetStarted";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Statistics from "../../components/Statistics/Statistics";

const Blog = () => {

    return (
        <div className="mt-5 container">
            <h1 className="display-2 fw-bold text-light">Content Sources</h1>
            <p className="text-light">Connect these sources to your Marico homepage.</p>
            <SocialMedia />
            <Statistics />
            <GetStarted />
            <Footer />
        </div>
    )
}

export default Blog;