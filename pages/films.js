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

export default function Films() {

    return <MainLayout>
        <Head>
            <title>
                Зараз в прокаті
            </title>
        </Head>
        <h1 className={s.textJourney}>Обери свій фільм!</h1>

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
                        <p>Пан Вовчара очолює зграю справжнісіньких поганців. Разом вони здатні поцупити усе, що не так лежить. Герої планують пограбування, рівних якому не було і навряд чи буде.</p>

                        <div className={s.dateTimePriceBlock}>

                            <div className={s.firstPart}>
                                <div className={s.dateTour}>23 червня, четвер</div>
                                <div className={s.timeTour}>
                                    <p className={s.timeTourText}>Тривалість: </p>
                                    <p className={s.timeTourTextData}>1h 34m</p>
                                </div>
                            </div>

                            <div className={s.priceTour}>50 грн.</div>

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
                        <p>Супергеройський кримінально-детективний фільм режисера Метта Рівза, знятий за мотивами коміксів про Бетмена.
                            Роберт Паттінсон вперше зіграв роль Брюса Вейна / Бетмена.</p>

                        <div className={s.dateTimePriceBlock}>

                            <div className={s.firstPart}>
                                <div className={s.dateTour}>10 червня, пятниця</div>
                                <div className={s.timeTour}>
                                    <p className={s.timeTourText}>Тривалість: </p>
                                    <p className={s.timeTourTextData}>2h 56m</p>
                                </div>
                            </div>

                            <div className={s.priceTour}>120 грн.</div>

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
                        <p>Лауреат Нобелівської премії з хімії доктор Майкл Морбіус (Джаред Лето) страждає від рідкісного захворювання крові. Випробувавши всі відомі методи лікування, він наважується стати учасником експерименту із застосуванням кажанів.</p>

                        <div className={s.dateTimePriceBlock}>

                            <div className={s.firstPart}>
                                <div className={s.dateTour}>11 червня, субота</div>
                                <div className={s.timeTour}>
                                    <p className={s.timeTourText}>Тривалість: </p>
                                    <p className={s.timeTourTextData}>1h 48m</p>
                                </div>
                            </div>

                            <div className={s.priceTour}>110 грн.</div>

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
                        <p>Джеймс Рід (Кріс Пайн) за своє життя навчився вправно воювати. Це єдине, що він вміє. Коли чоловіка примусово звільняють із морської піхоти, йому не лишається іншого вибору, як долучитися до воєнізованого спецзагону.</p>

                        <div className={s.dateTimePriceBlock}>

                            <div className={s.firstPart}>
                                <div className={s.dateTour}>12 червня, неділя</div>
                                <div className={s.timeTour}>
                                    <p className={s.timeTourText}>Тривалість: </p>
                                    <p className={s.timeTourTextData}>1h 43m</p>
                                </div>
                            </div>

                            <div className={s.priceTour}>130 грн.</div>

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
                        <p>Віктор Салліван вербує Натана Дрейка, щоб він допоміг йому знайти втрачене багатство Фердинанда Магеллана. Однак вони стикаються з конкуренцією з боку Сантьяго Монкади, який вважає, що скарб належить йому.</p>

                        <div className={s.dateTimePriceBlock}>

                            <div className={s.firstPart}>
                                <div className={s.dateTour}>13 червня, понеділок</div>
                                <div className={s.timeTour}>
                                    <p className={s.timeTourText}>Тривалість: </p>
                                    <p className={s.timeTourTextData}>1h 56m</p>
                                </div>
                            </div>

                            <div className={s.priceTour}>90 грн.</div>

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
                        <p>Доктор Стівен Стрендж застосовує заборонене заклинання, яке відкриває портал у мультивсесвіт. Проте з’являється загроза, яка може бути занадто великою для його команди.</p>

                        <div className={s.dateTimePriceBlock}>

                            <div className={s.firstPart}>
                                <div className={s.dateTour}>14 червня, вівторок</div>
                                <div className={s.timeTour}>
                                    <p className={s.timeTourText}>Тривалість: </p>
                                    <p className={s.timeTourTextData}>2h 6m</p>
                                </div>
                            </div>

                            <div className={s.priceTour}>250 грн.</div>

                        </div>

                    </div>

                </li>
            </Link>

        </ul>

    </MainLayout>
}