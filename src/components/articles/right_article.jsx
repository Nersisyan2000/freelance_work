import React from 'react';
import './right_article.css';
import { right_article_info } from './right_article_data';
import { Right_Article_Item } from '../right-article-item/right_article_item';

export const Right_Article = ({ isMobile }) => {

    return (
        <div className="right_article_main_div">
            <div className='right_article_title_div'>
                <p className='right_article_title'>
                    Вместе c <span className='right_article_title_span'>бесплатной консультацией</span> мы дарим:
                </p>
            </div>
            <div className="info_items_div">
                {right_article_info.map((item) => {
                    return (
                        <Right_Article_Item title={item.title} info={item.info} isMobile={isMobile}/>
                    )
                })}
            </div>
            {!isMobile && <div className='right_article_button_div'>
                <button className='right_article_button'>Получить консультацию</button>
            </div>}
        </div>
    )
}