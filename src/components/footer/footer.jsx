import React from 'react';
import './footer.css';
import telegram from "../../assets/telegram.svg"
import viber from "../../assets/viber.svg"
import whatsapp from "../../assets/whatsapp.svg"

export const Footer = () => {
    return (
        <>
            <div className='footer_main_div'>
                <div className='footer_container'>
                    <p className='footer_container_title'>
                        О компании
                    </p>
                    <p className="footer_list_item">
                        Партнёрская программа
                    </p>
                    <p className="footer_list_item">
                        Вакансии
                    </p>
                </div>

                <div className='footer_container'>
                    <p className='footer_container_title'>
                        Меню
                    </p>
                    <div className='footer_menu_div'>
                        <div className='footer_menu_first_div'>
                            <p className="footer_list_item">Расчёт стоимости</p>
                            <p className="footer_list_item">Услуги</p>
                            <p className="footer_list_item">Виджеты</p>
                            <p className="footer_list_item">Интеграции</p>
                            <p className="footer_list_item">Наши клиенты</p>
                        </div>
                        <div>
                            <p className="footer_list_item">Кейсы</p>
                            <p className="footer_list_item">Благодарственные письма</p>
                            <p className="footer_list_item">Сертификаты</p>
                            <p className="footer_list_item">Блог на Youtube</p>
                            <p className="footer_list_item">Вопрос / Ответ</p>
                        </div>
                    </div>

                </div>
                <div className='footer_container footer_contact_container'>
                    <p className='footer_container_title'>
                        Контакты
                    </p>
                    <div className='footer_contact_container'>
                        <p className="footer_list_item">+7 555 555-55-55</p>
                        <div className='footer_icons_div footer_list_item'>
                            <img src={telegram} alt="" className="footer_social_icon" />
                            <img src={viber} alt="" className="footer_social_icon" />
                            <img src={whatsapp} alt="" className="footer_social_icon" />
                        </div>
                        <p className="footer_list_item">Москва, Путевой проезд 3c1, к 902</p>
                    </div>
                </div>

            </div>
            <div className="footer_bottom_data">
                <p className='footer_bottom_data_item'>©WELBEX 2022. Все права защищены.</p>
                <p className='footer_bottom_data_item'>Политика конфиденциальности</p>
            </div></>
    )
}