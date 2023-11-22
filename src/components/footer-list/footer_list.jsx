import React from 'react';
import './footer_list.css';

export const Footer_List = ({ title, info }) => {
    return (
        <div className="footer_list_main_div">
            <p className="title_footer">
                {title}
            </p>
            {info && info.map((item) => {
                return (
                    <div className='footer_list_info_div'>
                        <p className="info_in_list_component">
                            {item}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}