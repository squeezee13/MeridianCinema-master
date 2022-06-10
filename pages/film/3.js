import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout';
import Link from 'next/link';
import s from '../../styles/Items.module.css'
import Head from 'next/head';

import Image from 'next/image';
import film3 from '../../public/films/film3.jpg'

export default function Film() {

    return (
        <MainLayout>

            <Head>
                <title>
                    Морбіус
                </title>
            </Head>

            <div>
                <div className={s.itemTop}>
                    <h1 className={s.title}>Морбіус <span className={s.spanFilmTitle}>(16+)</span></h1>
                    <Link href={'/films'}>
                        <a className={s.backButton}>Назад</a>
                    </Link>
                </div>

                <hr />

                <div className={s.productContainer}>

                    <div className={s.imageWrapperFilm}>
                        <Image
                            src={film3}
                            width={320}
                            height={472}
                        />
                    </div>

                    <div className={s.textProduct}>

                        <div className={s.wrapPost}>
                            <h2>Морбіус</h2>
                            <p>Лауреат Нобелівської премії з хімії доктор Майкл Морбіус (Джаред Лето) страждає від рідкісного захворювання крові. Випробувавши всі відомі методи лікування, він наважується стати учасником експерименту із застосуванням кажанів. Хвороба дійсно відступає, натомість у Морбіуса виросли ікла як в хижака, а шкіра стала блідою як у мерця. Разом з тим він отримав і надприродні здібності.</p>
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
                                фантастика, трилер, пригоди, екшн, супергерой, Marvel
                                <br />
                                <span className={s.spanFilmInfo}>У головних ролях: </span>
                                Джаред Лето, Адріа Архона, Метт Сміт, Джаред Гарріс, Тайріз Ґібсон, Аль Адрігал
                                <br />
                                <span className={s.spanFilmInfo}>Режисер: </span>
                                Даніель Еспіноса
                                <br />
                                <span className={s.spanFilmInfo}>Сценарій: </span>
                                Метт Сазама, Берк Шарплесс, Джил Кейн
                                <br />
                                <span className={s.spanFilmInfo}>Прокат: </span>
                                З 09 червня 2022 до 29 червня 2022
                                <br />
                                <span className={s.spanFilmInfo}>Знижки: </span>
                                З 09 червня 2022
                                <br />
                                <span className={s.spanFilmInfo}>Тривалість: </span>
                                104 хв.
                                <br />
                                <span className={s.spanFilmInfo}>Вікові обмеження: </span>
                                16+
                            </p>
                            <div className={s.generalInfo}>
                                <p>Фантастичний фільм «Морбіус» – це супергеройський трилер про персонажа із всесвіту Marvel Comics. Реалізацією проекту займається студія Sony, тож до сюжет ніяк не перетинатиметься із Кіновсесвітом Marvel. Персонаж вперше з’явився на сторінках коміксів у 1971 році у якості ворога Людини Павука. Режисера для майбутнього фільму почали шукати у квітні 2018 року. Вибір зупинився на шведському режисері чілійського походження Даніелеві Еспінозі. Сценарій нового фільму написали Метт Сазама та Берк Шарплесс. Вони презентували його у листопаді 2018 року.</p>
                            </div>
                        </div>

                        <div className={s.buyWrapper}>
                            <div className={s.buttonBuyTicket}><Link href={`/buy/3`}><button>Придбати квиток</button></Link></div>
                            <div className={s.buttonBuyTicket2}><Link href={`/buy/3`}><button>Забронювати</button></Link></div>
                        </div>


                        <div className={s.comments}>

                            <h2>Коментарі:</h2>
                            <p className={s.idGen}><span className={s.idComment}>1. Валерій</span></p>
                            <p className={s.descComment}>Непоганий фільм, 8/10</p>
                            <p className={s.idGen}><span className={s.idComment}>2. Ольга</span></p>
                            <p className={s.descComment}>Була вчора на фільмі, дуже сподобався.</p>
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