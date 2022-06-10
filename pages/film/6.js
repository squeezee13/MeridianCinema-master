import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout';
import Link from 'next/link';
import s from '../../styles/Items.module.css'
import Head from 'next/head';

import Image from 'next/image';
import film6 from '../../public/films/film6.jpg'

export default function Film() {

    return (
        <MainLayout>

            <Head>
                <title>
                    Doctor Strange 2: Multiverse of Madness
                </title>
            </Head>

            <div>
                <div className={s.itemTop}>
                    <h1 className={s.title}>Doctor Strange 2: Multiverse of Madness<span className={s.spanFilmTitle}>(16+)</span></h1>
                    <Link href={'/films'}>
                        <a className={s.backButton}>Назад</a>
                    </Link>
                </div>

                <hr />

                <div className={s.productContainer}>

                    <div className={s.imageWrapperFilm}>
                        <Image
                            src={film6}
                            width={320}
                            height={472}
                        />
                    </div>

                    <div className={s.textProduct}>

                        <div className={s.wrapPost}>
                            <h2>Doctor Strange 2: Multiverse of Madness</h2>
                            <p>Подорож у невідоме в Marvel Studios «Доктор Стрендж у мультивсесвіті божевілля». Коли MCU відкриває Мультивсесвіт, Доктор Стрендж (Бенедикт Камбербетч) повинен заручитися підтримкою старих і нових союзників, перетинаючи дивовижні й небезпечні альтернативні реальності, щоб протистояти дивовижному супротивнику.</p>
                            <p>
                                <span className={s.spanFilmInfo}>Рік: </span>
                                2022
                                <br />
                                <span className={s.spanFilmInfo}>Країна: </span>
                                США
                                <br />
                                <span className={s.spanFilmInfo}>Мова: </span>
                                in English (with Ukrainian subtitles)
                                <br />
                                <span className={s.spanFilmInfo}>Жанр: </span>
                                екшн, фантастика, Marvel, супергерой
                                <br />
                                <span className={s.spanFilmInfo}>У головних ролях: </span>
                                Benedict Cumberbatch, Elizabeth Olsen, Benedict Wong, Rachel McAdams, Chiwetel Ejiofor, Xochitl Gomez
                                <br />
                                <span className={s.spanFilmInfo}>Режисер: </span>
                                Sam Raimi
                                <br />
                                <span className={s.spanFilmInfo}>Сценарій: </span>
                                Michael Waldron
                                <br />
                                <span className={s.spanFilmInfo}>Прокат: </span>
                                З 09 червня 2022 до 29 червня 2022
                                <br />
                                <span className={s.spanFilmInfo}>Знижки: </span>
                                З 12 червня 2022
                                <br />
                                <span className={s.spanFilmInfo}>Тривалість: </span>
                                126 хв.
                                <br />
                                <span className={s.spanFilmInfo}>Вікові обмеження: </span>
                                16+
                            </p>
                            <div className={s.generalInfo}>
                                <p>«Доктор Стрендж у мультивсесвіті божевілля» — американський супергеройський фільм 2022 року, заснований на коміксах Marvel, за участю персонажа Доктора Стренджа. Продюсований Marvel Studios і розповсюджений Walt Disney Studios Motion Pictures, він є продовженням «Доктора Стренджа» (2016) і 28-м фільмом у кінематографічному всесвіті Marvel (MCU). Режисером фільму став Сем Реймі за сценарієм Майкла Уолдрона, а в головних ролях Бенедикт Камбербетч у ролі Стівена Стренджа, а також Елізабет Олсен, Чіветель Еджіофор, Бенедикт Вонг, Сочітл Гомес, Майкл Стулбарг та Рейчел Макадамс. У фільмі Стрендж захищає Америку Чавеса (Гомес), підлітка, здатного подорожувати мультивсесвітом, від Ванди Максимофф (Олсен).</p>
                            </div>
                        </div>

                        <div className={s.buyWrapper}>
                            <div className={s.buttonBuyTicket}><Link href={`/buy/6`}><button>Придбати квиток</button></Link></div>
                            <div className={s.buttonBuyTicket2}><Link href={`/buy/6`}><button>Забронювати</button></Link></div>
                        </div>


                        <div className={s.comments}>

                            <h2>Коментарі:</h2>
                            <p className={s.idGen}><span className={s.idComment}>1. Галина</span></p>
                            <p className={s.descComment}>Просто ШИКАРНО! Марвел не підкачали, фільм на висоті!!!</p>
                            <p className={s.idGen}><span className={s.idComment}>2.Юрій</span></p>
                            <p className={s.descComment}>Дуже крутий фільм, давно нічого подібного не бачила!!! Рекомендую!</p>
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