import React from 'react'
import Head from 'next/head';
import MainLayout from '../../components/MainLayout/MainLayout';

import s from '../../components/MainLayout/MainLayout.module.css';

export default function About() {

    return <MainLayout>
        <Head>
            <title>
                Про нас
            </title>
        </Head>

        <div className={s.aboutPageWrap}>
            <h1 className={s.createdBy}>
                Курсова робота КН-203
                <br />
                Автор Василь Лесюк
            </h1>

            <p className={s.authorText}>Проект реалізовано у співпраці з <span className={s.authorTextSpan}> Lviv Polytechnic</span> в рамках курсової роботи на тему <span className={s.authorTextSpan}>«Кінотеатр MeridianCinema»</span>
                <br />
                <br />
                Використання матеріалів сайту і копіювання інформації без письмового дозволу автора заборонено.
            </p>

            <p className={s.aboutUsText}>
                Ви потрапили на сторінку, мабуть, одного з надсучасніших кінотеатрів «MeridianCinema»
            </p>

            <p className={s.aboutUsText1}>
                Його створили естети і перфекціоністи для вибагливих глядачів, які звикли до особливого рівня комфорту під час перегляду фільмів чи очікування сеансів.
            </p>

            <p className={s.aboutUsText2}>
                Кінотеатр спроектовано згідно останніх тенденцій індустрії – просторі зручні зали, в яких можна дивитися фільми чи проводити церемонії, кращі крісла з тих, що пропонують світові виробники, комфортні затишні зони холу, де гості очікують на фільми.
            </p>

            <p className={s.aboutUsText3}>
                «MeridianCinema» – перший кінотеатр у Києві, обладнаний звуковою системою Dolby Atmos – шедевром Dolby, створеним для надреалістичних вражень глядачів, та кріслами D-Box, що рухаються синхронно із зображенням на екрані і гарантують надзвичайний чуттєвий досвід від перегляду.
            </p>

        </div>


    </MainLayout >
}
