import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout';
import Link from 'next/link';
import s from '../../styles/Items.module.css'
import Head from 'next/head';

import Image from 'next/image';
import film2 from '../../public/films/film2.jpg'

export default function Film() {

    return (
        <MainLayout>

            <Head>
                <title>
                    Бетмен
                </title>
            </Head>

            <div>
                <div className={s.itemTop}>
                    <h1 className={s.title}>Бетмен <span className={s.spanFilmTitle}>(16+)</span></h1>
                    <Link href={'/films'}>
                        <a className={s.backButton}>Назад</a>
                    </Link>
                </div>

                <hr />

                <div className={s.productContainer}>

                    <div className={s.imageWrapperFilm}>
                        <Image
                            src={film2}
                            width={320}
                            height={472}
                        />
                    </div>

                    <div className={s.textProduct}>

                        <div className={s.wrapPost}>
                            <h2>Бетмен</h2>
                            <p>Минуло майже 2 роки, відколи Бетмен (Роберт Паттінсон) з’явився на вулицях Ґотема. Самотній борець за правосуддя став утіленням розплати для мешканців міста.</p>
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
                                екшн, бойовик, драма, кримінал, DC
                                <br />
                                <span className={s.spanFilmInfo}>У головних ролях: </span>
                                Роберт Паттінсон, Зої Кравіц, Колін Фаррелл, Пол Дано, Енді Серкіс, Пітер Сарсґаард, Джон Туртурро
                                <br />
                                <span className={s.spanFilmInfo}>Режисер: </span>
                                Метт Рівз
                                <br />
                                <span className={s.spanFilmInfo}>Сценарій: </span>
                                Білл Фінгер, Боб Кейн, Метт Рівз
                                <br />
                                <span className={s.spanFilmInfo}>Прокат: </span>
                                З 12 травня 2022 до 15 червня 2022
                                <br />
                                <span className={s.spanFilmInfo}>Знижки: </span>
                                З 19 травня 2022
                                <br />
                                <span className={s.spanFilmInfo}>Тривалість: </span>
                                176 хв.
                                <br />
                                <span className={s.spanFilmInfo}>Вікові обмеження: </span>
                                16+
                            </p>
                            <div className={s.generalInfo}>
                                <p>Місто, яке кишить корумпованими чиновниками і високопосадовцями. Там Брюс Вейн може довіряти лише двом людям: Альфреду Пенніворту (Енді Серкіс) і лейтенанту Джеймсу Ґордону (Джеффрі Райт). Одного дня Бетмен натрапляє на загадкового вбивцю, який по-садистському переслідує еліту Ґотема. Слід дивних доказів веде розслідування найкращого детектива у самісіньке пекло злочинного світу, на дно Ґотем-сіті. Там він зустрічає Селіну Кайл/Жінку-кішку (Зої Кравіц), Освальда Кобблпота/Пінгвіна (Колін Фаррелл), Кармайна Фальконе (Джон Туртурро) і Едварда Наштона/Загадника. Коли доказів стає більше, масштаби планів злочинця починають набувати обрисів. Тепер Бетмену доведеться не лише знайти нових союзників і викрити злочинця, але й відновити справедливість у Ґотем-сіті, яке вразила виразка корупції та зловживання владою.

                                    Кримінальний бойовик «Бетмен» зняв режисер Метт Рівз. Фільм є перезавантаженням історії про Бетмена. У планах авторів – зйомки трилогії. Розробка проекту почалася ще у 2013 році і тоді Бен Аффлек мав виконати головну роль та стати режисером, сценаристом і продюсером. Згодом він вибув з проекту. Сценарій переписали, зосередившись на детективних здібностях Бетмена та надихаючись оригінальними коміксами, що вийшли у 1970-х роках. Зйомки велися у Великобританії та двічі переривалися: через пандемію та хворобу Роберта Паттінсона. Даний фільм – 13-а поява персонажа на великому екрані. Паттінсон став девятим актором, який втілив героя.</p>
                            </div>
                        </div>

                        <div className={s.buyWrapper}>
                            <div className={s.buttonBuyTicket}><Link href={`/buy/2`}><button>Придбати квиток</button></Link></div>
                            <div className={s.buttonBuyTicket2}><Link href={`/buy/2`}><button>Забронювати</button></Link></div>
                        </div>


                        <div className={s.comments}>

                            <h2>Коментарі:</h2>
                            <p className={s.idGen}><span className={s.idComment}>1. Олег</span></p>
                            <p className={s.descComment}>Дуже атмосферно, рекомендую!</p>
                            <p className={s.idGen}><span className={s.idComment}>2. Анна</span></p>
                            <p className={s.descComment}>“Камера, світло вимкнути, мотор»
                                Паттісон в ролі Бетмена виглядає круто, однак для багатьох фільм суперечливий. Заснути під час фільму реально, а питання «де логіка?» буде виникати часто. Впевнений, що знайдуться ті, яким фільм сподобається, як і мені.
                                4/5</p>
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