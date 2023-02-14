import React from "react";
import './SocialMedia.css'
import blogArray from "../../assets/Blog_array/blogArray";

const SocialMedia = () => {

    return(
        <div id="socialMedia__conatiner" className="container">
            {
                blogArray.map((item, index) => {
                    return (
                        <div className="text-start" key={index}>
                            <div><img src={item.img_url} alt={item.title} /></div>
                            <h5 className="text-light mt-3">{ item.title }</h5>
                            <p className="text-secondary">{ item.descprition }</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SocialMedia;