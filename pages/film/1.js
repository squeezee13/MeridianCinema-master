import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout';
import Link from 'next/link';
import s from '../../styles/Items.module.css'
import Head from 'next/head';

import Image from 'next/image';
import film1 from '../../public/films/film1.jpg'

export default function Film() {

    return (
        <MainLayout>

            <Head>
                <title>
                    Поганці
                </title>
            </Head>

            <div>
                <div className={s.itemTop}>
                    <h1 className={s.title}>Поганці <span className={s.spanFilmTitle}>(0+)</span></h1>
                    <Link href={'/films'}>
                        <a className={s.backButton}>Назад</a>
                    </Link>
                </div>

                <hr />

                <div className={s.productContainer}>

                    <div className={s.imageWrapperFilm}>
                        <Image
                            src={film1}
                            width={320}
                            height={472}
                        />
                    </div>

                    <div className={s.textProduct}>

                        <div className={s.wrapPost}>
                            <h2>Поганці</h2>
                            <p>Пан Вовчара очолює зграю справжнісіньких поганців. Разом вони здатні поцупити усе, що не так лежить. Власникам цінного майна у їх присутності варто навіть не кліпати. Діючи злагоджено, вони спроможні влаштувати пограбування у найзахищенішому місці світу. Але трапилось так, що вони попали до рук правосуддя. Аби уникнути ув’язнення, вони укладають угоду, за якою мають робити зовсім не притаманні для них вчинки. Зміна способу життя річ складна, але важливіше для них зараз інше. Герої планують пограбування, рівних якому не було і навряд чи буде.</p>
                            <p>
                                <span className={s.spanFilmInfo}>Рік: </span>
                                2021
                                <br />
                                <span className={s.spanFilmInfo}>Країна: </span>
                                США
                                <br />
                                <span className={s.spanFilmInfo}>Мова: </span>
                                українська (дубльований)
                                <br />
                                <span className={s.spanFilmInfo}>Жанр: </span>
                                анімація, пригоди
                                <br />
                                <span className={s.spanFilmInfo}>У головних ролях: </span>
                                Аквафіна, Сем Роквелл, Ентоні Рамос, Марк Мерон, Зазі Бітц
                                <br />
                                <span className={s.spanFilmInfo}>Режисер: </span>
                                Пєр Періфель
                                <br />
                                <span className={s.spanFilmInfo}>Сценарій: </span>
                                Ітан Коен, Гіларі Вінстон
                                <br />
                                <span className={s.spanFilmInfo}>Прокат: </span>
                                З 02 червня 2022 до 15 червня 2022
                                <br />
                                <span className={s.spanFilmInfo}>Знижки: </span>
                                З 02 червня 2022
                                <br />
                                <span className={s.spanFilmInfo}>Тривалість: </span>
                                100 хв.
                                <br />
                                <span className={s.spanFilmInfo}>Вікові обмеження: </span>
                                0+
                            </p>
                            <div className={s.generalInfo}>
                                <p>Сімейна кримінальна комедія «Поганці» – це нова робота студії DreamWorks Animation. У основу сюжету покладено серію популярних дитячих графічних романів, створених Аароном Блейбі. Ці комікси були вперше видані у 2015 році. Загалом у світі надруковано понад 16 млн. примірників книг про цих персонажів. У 2018 році було оголошено про початок робіт над мультфільмом по мотивам популярної історії.</p>
                            </div>
                        </div>

                        <div className={s.buyWrapper}>
                            <div className={s.buttonBuyTicket}><Link href={`/buy/1`}><button>Придбати квиток</button></Link></div>
                            <div className={s.buttonBuyTicket2}><Link href={`/buy/1`}><button>Забронювати</button></Link></div>
                        </div>


                        <div className={s.comments}>

                            <h2>Коментарі:</h2>
                            <p className={s.idGen}><span className={s.idComment}>1. Андрій</span></p>
                            <p className={s.descComment}>Дуже класний сімейний фільм! Сподобалось!</p>
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