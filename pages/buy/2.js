import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout';
import Link from 'next/link';
import s from '../../styles/Items.module.css'
import Head from 'next/head';

import Image from 'next/image';
import film2 from '../../public/films/film2.jpg'
import film2tables from '../../public/films/film2tables.png'

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
                    <Link href={'/film/2'}>
                        <a className={s.backButton}>Назад</a>
                    </Link>
                </div>

                <hr />

                <div className={s.productContainer}>

                    <div className={s.imageWrapperFilm}>
                        <Image
                            src={film2}
                            width={310}
                            height={420}
                        />

                        <div className={s.buttonBuyTicketFinish}><Link href={`/`}><button>Придбати квиток</button></Link></div>

                    </div>


                    <div className={s.imageWrapperFilm}>
                        <Image
                            src={film2tables}
                        />

                        <p className={s.infoBuy}>
                            <span>Вікові обмеження: </span>16+
                            <br />
                            <span>Розташування: </span>Київ (Kiev Plaza)
                            <br />
                            <span>Адреса: </span>вул. Грушевського, 23, ТРЦ «Kiev Plaza»
                            <br />
                            <span>Дата: </span>13 червня, понеділок
                            <br />
                            <span>Час: </span>14:40 - 16:10
                        </p>
                    </div>

                </div>

            </div>

        </MainLayout>
    )
}