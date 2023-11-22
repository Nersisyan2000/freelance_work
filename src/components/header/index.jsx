import React from "react"
import part_first from '../../assets/part1.svg';
import part_second from '../../assets/part2.svg';
import telegram from "../../assets/telegram.svg"
import viber from "../../assets/viber.svg"
import whatsapp from "../../assets/whatsapp.svg"

import './index.css';


export const Header = () => {
    const menuItems = ['Услуги', 'Виджеты', 'Интеграции', 'Кейсы', 'Сертификаты'];

    return (
        <div className="header_main_div">
            <div>
                <div className="logo_div">
                    <img src={part_first} alt="part_first" />
                    <img src={part_second} alt="part_second" className="part_second" />
                </div>
                <p className="power_info">
                    крупный интегратор CRM в Росcии и ещё 8 странах
                </p>
            </div>
            <div className="header_section">
                {menuItems.map((item) => {
                    return (
                        <p className="header_section_text">{item}</p>
                    )
                })}
            </div>
            <p className="phone">
                +7 555 555-55-55
            </p>
           <div className="social_icon_section">
            <img src={telegram} alt="" className="social_icon" />
            <img src={viber} alt="" className="social_icon" />
            <img src={whatsapp} alt="" className="social_icon" />
           </div>
        </div>
    )
}