import React from 'react'
import Head from 'next/head';
import MainLayout from '../../components/MainLayout/MainLayout';

import s from '../../components/MainLayout/MainLayout.module.css';

export default function Soon() {

    return <MainLayout>
        <Head>
            <title>
                Скоро у кіно
            </title>
        </Head>

        <div className={s.soonPageWrap}>

            <div className={s.filmSoon}>
                <img src="https://www.film.ru/sites/default/files/movies/posters/49527318-2157891.jpg" alt="soon" />
                <p>Елвіс</p>
            </div>

            <div className={s.filmSoon}>
                <img src="https://br.web.img3.acsta.net/pictures/21/09/27/12/58/2011312.jpg" alt="soon1" />
                <p>Чорний телефон</p>
            </div>

            <div className={s.filmSoon}>
                <img src="https://upload.wikimedia.org/wikipedia/ru/9/92/%D0%A2%D0%BE%D1%80_%D0%9B%D1%8E%D0%B1%D0%BE%D0%B2%D1%8C_%D0%B8_%D0%B3%D1%80%D0%BE%D0%BC_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg" alt="soon2" />
                <p>Тор: Любов і грім</p>
            </div>

            <div className={s.filmSoon}>
                <img src="https://www.film.ru/sites/default/files/movies/posters/49637923-1743567.jpg" alt="soon3" />
                <p>Загублене місто</p>
            </div>

            <div className={s.filmSoon}>
                <img src="https://planetakino.ua/res/get-poster/00000000000000000000000000002094/posipaku-vend2.jpg" alt="soon4" />
                <p>Посіпаки: Становлення лиходія</p>
            </div>

            <div className={s.filmSoon}>
                <img src="https://shadowfilms.ru/uploads/posts/2022-04/1648985211_poster.jpg" alt="soon5" />
                <p>Сонік 2</p>
            </div>

            <div className={s.filmSoon}>
                <img src="https://dam.smashmexico.com.mx/wp-content/uploads/2021/11/dc-league-of-super-pets-pelicula-animada-poster.jpg" alt="soon6" />
                <p>DC Ліга Суперулюбленців</p>
            </div>

        </div>


    </MainLayout >
}
