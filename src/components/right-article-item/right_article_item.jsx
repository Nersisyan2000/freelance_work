import React from "react";
import './right_article_item.css'

export const Right_Article_Item = ({ title, info, isMobile }) => {
    return (
        <div className="right_article_item_main_div">
            {isMobile ? <div className="line_and_title">
                <div className="title_line" />
                <p className="title">
                    {title}
                </p>
            </div> : <p className="title">
                {title}
            </p>}


            {!isMobile && <p className="info">
                {info}
            </p>}
        </div>
    )
}