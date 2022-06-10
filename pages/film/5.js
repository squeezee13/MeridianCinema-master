import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout';
import Link from 'next/link';
import s from '../../styles/Items.module.css'
import Head from 'next/head';

import Image from 'next/image';
import film5 from '../../public/films/film5.jpg'

export default function Film() {

    return (
        <MainLayout>

            <Head>
                <title>
                    Uncharted: Незвідане
                </title>
            </Head>

            <div>
                <div className={s.itemTop}>
                    <h1 className={s.title}>Uncharted: Незвідане <span className={s.spanFilmTitle}>(12+)</span></h1>
                    <Link href={'/films'}>
                        <a className={s.backButton}>Назад</a>
                    </Link>
                </div>

                <hr />

                <div className={s.productContainer}>

                    <div className={s.imageWrapperFilm}>
                        <Image
                            src={film5}
                            width={320}
                            height={472}
                        />
                    </div>

                    <div className={s.textProduct}>

                        <div className={s.wrapPost}>
                            <h2>Uncharted: Незвідане</h2>
                            <p>Пригодницький бойовик «Uncharted: Незвідане» створено за сюжетом однойменної відеогри. З 2007 по 2017 рік виходили нові частини гри для консолі PlayStation у жанрі action-adventure. Починаючи з 2015 року ведеться робота над майбутньою екранізацією. За цей час проект неодноразово змінював сценаристів та режисерів. Мінялися і потенційні виконавці головної ролі. Зрештою влітку 2017 року стало відомо, що персонажа втілить на екрані Том Голланд. Його партнером на екрані стане Марк Волберг.</p>
                            <p>
                                <span className={s.spanFilmInfo}>Рік: </span>
                                2022
                                <br />
                                <span className={s.spanFilmInfo}>Країна: </span>
                                США
                                <br />
                                <span className={s.spanFilmInfo}>Мова: </span>
                                українська (дубльований)
                                <br />
                                <span className={s.spanFilmInfo}>Жанр: </span>
                                бойовик, пригоди
                                <br />
                                <span className={s.spanFilmInfo}>У головних ролях: </span>
                                Том Голланд, Марк Волберг, Антоніо Бандерас, Таті Ґабріель, Софія Тейлор Алі
                                <br />
                                <span className={s.spanFilmInfo}>Режисер: </span>
                                Рубен Фляйшер
                                <br />
                                <span className={s.spanFilmInfo}>Сценарій: </span>
                                Рейф Джадкінс, Метт Холлоуей
                                <br />
                                <span className={s.spanFilmInfo}>Прокат: </span>
                                З 12 травня 2022 до 15 червня 2022
                                <br />
                                <span className={s.spanFilmInfo}>Знижки: </span>
                                З 12 травня 2022
                                <br />
                                <span className={s.spanFilmInfo}>Тривалість: </span>
                                116 хв.
                                <br />
                                <span className={s.spanFilmInfo}>Вікові обмеження: </span>
                                12+
                            </p>
                            <div className={s.generalInfo}>
                                <p>Безстрашний шукач скарбів та пригод Натан Дрейк (Том Холланд) є нащадком Френсіса Дрейка. Той був піратом. Піратом настільки вправним, що йому не було рівних. Через 400 років після смерті Френсіса до рук молодого Натана потрапляє артефакт, що зможе привести його до таємничого острова, де можна знайти омріяні скарби. Та легкою дорога точно не буде.</p>
                            </div>
                        </div>

                        <div className={s.buyWrapper}>
                            <div className={s.buttonBuyTicket}><Link href={`/buy/5`}><button>Придбати квиток</button></Link></div>
                            <div className={s.buttonBuyTicket2}><Link href={`/buy/5`}><button>Забронювати</button></Link></div>
                        </div>


                        <div className={s.comments}>

                            <h2>Коментарі:</h2>
                            <p className={s.idGen}><span className={s.idComment}>1. Петро</span></p>
                            <p className={s.descComment}>Дитячий фільм, не сподобалось.</p>
                            <p className={s.idGen}><span className={s.idComment}>2. Володимир</span></p>
                            <p className={s.descComment}>Був на своєму дні народженні на премєрі цього фільму, дуже сподобалось!</p>
                        </div>

                        <div className={s.addComments}>

                            <form action="/" method="post" role="form" className={s.emailForm}>
                                <div className={s.row}>
                                    <div className={s.nameInput}>
                                        <input type="text" name="name" className={s.formControl} id="name" placeholder="Ім'я" data-rule="minlen:4"
                                            data-msg="Please enter at least 4 chars" />
                                        <div className={s.validate}></div>
                                    </div>
                                    <div className={s.emailInput}>
                                        <input type="email" className={s.formControl} name="email" id="email" placeholder="Пошта"
                                            data-rule="email" data-msg="Please enter a valid email" />
                                        <div className={s.validate}></div>
                                    </div>

                                    <div className={s.dateInput}>
                                        <input type="text" name="date" className={s.formControl} id="date" placeholder="Дата" data-rule="minlen:4"
                                            data-msg="Please enter at least 4 chars" />
                                        <div className={s.validate}></div>
                                    </div>
                                </div>
                                <div className={s.formControl}>
                                    <textarea className={s.formControl} name="message" rows="5" placeholder="Коментар"></textarea>
                                    <div className={s.validate}></div>
                                </div>
                                <div className={s.textCenter}><button type="submit">Залишити коментар!</button></div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </MainLayout>
    )
}