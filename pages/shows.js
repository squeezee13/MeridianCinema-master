import React from 'react'
import Head from 'next/head';
import MainLayout from '../components/MainLayout/MainLayout';
import Link from 'next/link';
import s from '../styles/Items.module.css'
import Image from 'next/image';

import film1 from '../public/films/film1.jpg'
import film2 from '../public/films/film2.jpg'
import film3 from '../public/films/film3.jpg'
import film4 from '../public/films/film4.jpg'
import film5 from '../public/films/film5.jpg'
import film6 from '../public/films/film6.jpg'

export default function Shows() {

    return <MainLayout>
        <Head>
            <title>
                Сеанси
            </title>
        </Head>
        <h1 className={s.textJourney}>Обери свій сеанс!</h1>

        <ul className={s.customUl}>

            <Link href={`/film/1`}>

                <li key={1}>

                    <div className={s.imageBlock}>
                        <Link href={`/film/1`}>
                            <Image
                                src={film1}
                                width={120}
                                height={150}
                            />
                        </Link>
                    </div>

                    <div className={s.infoBlock}>
                        <Link href={`/film/1`}>
                            <a className={s.customName}>Поганці</a>
                        </Link>

                        <div className={s.dateTimePriceBlock}>

                            <div className={s.firstPart}>
                                <div className={s.dateTour}>Сьогодні</div>
                                <p className={s.timeTourTextData}>10:50 | 14:50 | 19:20</p>
                                <div className={s.dateTour}>12 червня, неділя</div>
                                <p className={s.timeTourTextData}>12:40 | 14:50 | 19:20</p>
                                <div className={s.dateTour}>13 червня, понеділок</div>
                                <p className={s.timeTourTextData}>12:40 | 14:50 | 19:20</p>
                                <div className={s.dateTour}>14 червня, вівторок</div>
                                <p className={s.timeTourTextData}>10:50 | 14:50 | 19:20</p>
                                <div className={s.dateTour}>15 червня, середа</div>
                                <p className={s.timeTourTextData}>12:40 | 14:50 | 19:20</p>
                            </div>
                        </div>

                    </div>

                </li>
            </Link>

            <Link href={`/film/2`}>

                <li key={2}>

                    <div className={s.imageBlock}>
                        <Link href={`/film/2`}>
                            <Image
                                src={film2}
                                width={120}
                                height={150}
                            />
                        </Link>
                    </div>

                    <div className={s.infoBlock}>
                        <Link href={`/film/2`}>
                            <a className={s.customName}>Бетмен</a>
                        </Link>

                        <div className={s.dateTimePriceBlock}>

                            <div className={s.firstPart}>
                                <div className={s.dateTour}>Сьогодні</div>
                                <p className={s.timeTourTextData}>14:40 | 17:00 | 19:10</p>
                                <div className={s.dateTour}>12 червня, неділя</div>
                                <p className={s.timeTourTextData}>14:40 | 17:00 | 19:10</p>
                                <div className={s.dateTour}>13 червня, понеділок</div>
                                <p className={s.timeTourTextData}>10:50 | 17:00</p>
                                <div className={s.dateTour}>14 червня, вівторок</div>
                                <p className={s.timeTourTextData}>10:50 | 17:00 | 19:10 | 22:20</p>
                            </div>
                        </div>

                    </div>

                </li>
            </Link>

            <Link href={`/film/3`}>

                <li key={3}>

                    <div className={s.imageBlock}>
                        <Link href={`/film/3`}>
                            <Image
                                src={film3}
                                width={120}
                                height={150}
                            />
                        </Link>
                    </div>

                    <div className={s.infoBlock}>
                        <Link href={`/film/3`}>
                            <a className={s.customName}>Морбіус</a>
                        </Link>

                        <div className={s.dateTimePriceBlock}>

                            <div className={s.firstPart}>
                                <div className={s.dateTour}>Сьогодні</div>
                                <p className={s.timeTourTextData}>11:25 | 19:20</p>
                                <div className={s.dateTour}>12 червня, неділя</div>
                                <p className={s.timeTourTextData}>11:25 | 16:50 | 19:20</p>
                                <div className={s.dateTour}>13 червня, понеділок</div>
                                <p className={s.timeTourTextData}>16:50 | 19:20</p>
                                <div className={s.dateTour}>14 червня, вівторок</div>
                                <p className={s.timeTourTextData}>11:25 | 14:50</p>
                                <div className={s.dateTour}>15 червня, середа</div>
                                <p className={s.timeTourTextData}>12:40 | 14:50 | 19:20</p>
                            </div>
                        </div>

                    </div>

                </li>
            </Link>

            <Link href={`/film/4`}>

                <li key={4}>

                    <div className={s.imageBlock}>
                        <Link href={`/film/4`}>
                            <Image
                                src={film4}
                                width={120}
                                height={150}
                            />
                        </Link>
                    </div>

                    <div className={s.infoBlock}>
                        <Link href={`/film/4`}>
                            <a className={s.customName}>Найманець</a>
                        </Link>
                        <div className={s.dateTimePriceBlock}>

                            <div className={s.firstPart}>
                                <div className={s.dateTour}>Сьогодні</div>
                                <p className={s.timeTourTextData}>14:50 | 19:20</p>
                                <div className={s.dateTour}>26 червня, неділя</div>
                                <p className={s.timeTourTextData}>12:40 | 14:50 | 19:20</p>
                                <div className={s.dateTour}>27 червня, понеділок</div>
                                <p className={s.timeTourTextData}>12:40 | 14:50 | 19:20</p>
                                <div className={s.dateTour}>28 червня, вівторок</div>
                                <p className={s.timeTourTextData}>12:40 | 14:50 | 19:20</p>
                                <div className={s.dateTour}>29 червня, середа</div>
                                <p className={s.timeTourTextData}>12:40 | 14:50 | 19:20</p>
                            </div>
                        </div>

                    </div>

                </li>
            </Link>

            <Link href={`/film/5`}>

                <li key={5}>

                    <div className={s.imageBlock}>
                        <Link href={`/film/5`}>
                            <Image
                                src={film5}
                                width={120}
                                height={150}
                            />
                        </Link>
                    </div>

                    <div className={s.infoBlock}>
                        <Link href={`/film/5`}>
                            <a className={s.customName}>Uncharted: Незвідане</a>
                        </Link>

                        <div className={s.dateTimePriceBlock}>

                            <div className={s.firstPart}>
                                <div className={s.dateTour}>Сьогодні</div>
                                <p className={s.timeTourTextData}>13:50 | 19:20</p>
                                <div className={s.dateTour}>26 червня, неділя</div>
                                <p className={s.timeTourTextData}>12:40 | 13:50 | 19:20</p>
                                <div className={s.dateTour}>27 червня, понеділок</div>
                                <p className={s.timeTourTextData}>12:40 | 13:50 | 19:20</p>
                                <div className={s.dateTour}>28 червня, вівторок</div>
                                <p className={s.timeTourTextData}>12:40 | 13:50 | 19:20</p>
                                <div className={s.dateTour}>29 червня, середа</div>
                                <p className={s.timeTourTextData}>12:40 | 13:50 | 19:20</p>
                            </div>
                        </div>

                    </div>

                </li>
            </Link>

            <Link href={`/film/6`}>

                <li key={6}>

                    <div className={s.imageBlock}>
                        <Link href={`/film/6`}>
                            <Image
                                src={film6}
                                width={120}
                                height={150}
                            />
                        </Link>
                    </div>

                    <div className={s.infoBlock}>
                        <Link href={`/film/6`}>
                            <a className={s.customName}>Doctor Strange 2: Multiverse of Madness</a>
                        </Link>

                        <div className={s.dateTimePriceBlock}>

                            <div className={s.firstPart}>
                                <div className={s.dateTour}>Сьогодні</div>
                                <p className={s.timeTourTextData}>14:50 | 19:20</p>
                                <div className={s.dateTour}>12 червня, неділя</div>
                                <p className={s.timeTourTextData}>12:40 | 14:50 | 19:20</p>
                                <div className={s.dateTour}>13 червня, понеділок</div>
                                <p className={s.timeTourTextData}>12:40 | 14:50 | 19:20</p>
                                <div className={s.dateTour}>14 червня, вівторок</div>
                                <p className={s.timeTourTextData}>12:40 | 14:50 | 19:20</p>
                                <div className={s.dateTour}>15 червня, середа</div>
                                <p className={s.timeTourTextData}>12:40 | 14:50 | 19:20</p>
                            </div>
                        </div>

                    </div>

                </li>
            </Link>




        </ul>

    </MainLayout>
}