import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout';
import Link from 'next/link';
import s from '../../styles/Items.module.css'
import Head from 'next/head';

import Image from 'next/image';
import film3 from '../../public/films/film3.jpg'
import film3tables from '../../public/films/film3tables.png'

export default function Buy() {

    return (
        <MainLayout>

            <Head>
                <title>
                    Купити квиток
                </title>
            </Head>

            <div>
                <div className={s.itemTop}>
                    <h1 className={s.title}>Обери своє місце</h1>
                    <Link href={'/film/3'}>
                        <a className={s.backButton}>Назад</a>
                    </Link>
                </div>

                <hr />

                <div className={s.productContainer}>

                    <div className={s.imageWrapperFilm}>
                        <Image
                            src={film3}
                            width={310}
                            height={420}
                        />

                        <div className={s.buttonBuyTicketFinish}><Link href={`/`}><button>Придбати квиток</button></Link></div>

                    </div>


                    <div className={s.imageWrapperFilm}>
                        <Image
                            src={film3tables}
                        />

                        <p className={s.infoBuy}>
                            <span>Вікові обмеження: </span>16+
                            <br />
                            <span>Розташування: </span>Київ (Kiev Plaza)
                            <br />
                            <span>Адреса: </span>вул. Грушевського, 23, ТРЦ «Kiev Plaza»
                            <br />
                            <span>Дата: </span>14 червня, вівторок
                            <br />
                            <span>Час: </span>11:25 - 13:00
                        </p>
                    </div>

                </div>

            </div>

        </MainLayout>
    )
}