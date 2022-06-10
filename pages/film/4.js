import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout';
import Link from 'next/link';
import s from '../../styles/Items.module.css'
import Head from 'next/head';

import Image from 'next/image';
import film4 from '../../public/films/film4.jpg'

export default function Film() {

    return (
        <MainLayout>

            <Head>
                <title>
                    Найманець
                </title>
            </Head>

            <div>
                <div className={s.itemTop}>
                    <h1 className={s.title}>Найманець <span className={s.spanFilmTitle}>(16+)</span></h1>
                    <Link href={'/films'}>
                        <a className={s.backButton}>Назад</a>
                    </Link>
                </div>

                <hr />

                <div className={s.productContainer}>

                    <div className={s.imageWrapperFilm}>
                        <Image
                            src={film4}
                            width={320}
                            height={472}
                        />
                    </div>

                    <div className={s.textProduct}>

                        <div className={s.wrapPost}>
                            <h2>Найманець</h2>
                            <p>Бойовик «Найманець» з Крісом Пайном у головній ролі був анонсований на початку 2019 року. До зйомок приступили у жовтні. Попри те, що події фільму розгортаються у Польщі, знімальна група працювала у Румунії. Цей етап роботи розпочався у листопаді 2019 року та тривав 8 тижнів.</p>
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
                                трилер, екшн
                                <br />
                                <span className={s.spanFilmInfo}>У головних ролях: </span>
                                Кріс Пайн, Бен Фостер, Ґілліан Джейкобс, Кіфер Сазерленд, Дж.Д. Пардо
                                <br />
                                <span className={s.spanFilmInfo}>Режисер: </span>
                                Тарік Салег
                                <br />
                                <span className={s.spanFilmInfo}>Сценарій: </span>
                                Дж.П. Девіс
                                <br />
                                <span className={s.spanFilmInfo}>Прокат: </span>
                                З 19 травня 2022 до 15 червня 2022
                                <br />
                                <span className={s.spanFilmInfo}>Знижки: </span>
                                З 19 травня 2022
                                <br />
                                <span className={s.spanFilmInfo}>Тривалість: </span>
                                103 хв.
                                <br />
                                <span className={s.spanFilmInfo}>Вікові обмеження: </span>
                                16+
                            </p>
                            <div className={s.generalInfo}>
                                <p>Джеймс Рід (Кріс Пайн) за своє життя навчився вправно воювати. Це єдине, що він вміє. Коли чоловіка примусово звільняють із морської піхоти, йому не лишається іншого вибору, як долучитися до воєнізованого спецзагону. Пліч-о-пліч із ним ті, з ким свого часу служив у війську. Саме цим він мусить займатися аби прогодувати свою родину. Для виконання першої місії Ріда разом з такими ж як і він бійцями відправляють до Польщі. У розпал подій Джеймс розуміє, що залишився один. Більше того, на нього відкрито справжнє полювання. Рід мусить вижити серед чужої для нього Східної Європи. Головна його мета – повернутися додому та зрозуміти істині мотиви своїх колишніх побратимів.</p>
                            </div>
                        </div>

                        <div className={s.buyWrapper}>
                            <div className={s.buttonBuyTicket}><Link href={`/buy/4`}><button>Придбати квиток</button></Link></div>
                            <div className={s.buttonBuyTicket2}><Link href={`/buy/4`}><button>Забронювати</button></Link></div>
                        </div>


                        <div className={s.comments}>

                            <h2>Коментарі:</h2>
                            <p className={s.idGen}><span className={s.idComment}>1. Степан</span></p>
                            <p className={s.descComment}>Фільм супер. правдоподібно, хороша гра акторів.</p>
                            <p className={s.idGen}><span className={s.idComment}>2. Назар</span></p>
                            <p className={s.descComment}>Нічого цікавого, не вистачає сюжету, інтриги, завязки, розвязки та всього, що має тримати нас біля екранів, особливо за таку ціну квитків у кіно!</p>
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