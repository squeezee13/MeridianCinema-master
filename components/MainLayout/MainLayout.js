import Link from 'next/link'
import React from 'react'
import s from '../MainLayout/MainLayout.module.css'

import fb from '../../public/socials/facebook.svg'
import insta from '../../public/socials/insta.svg'
import telegram from '../../public/socials/telegram.svg'
import twitter from '../../public/socials/twitter.svg'
import gmail from '../../public/socials/gmail.png'
import location from '../../public/socials/location.png'
import Image from 'next/image';

export default function MainLayout({ children }) {

    function getCurrentYear() {

        let newDate = new Date()
        let year = newDate.getFullYear();

        return `${year}`
    }

    return (
        <div className={s.wrapper}>

            <nav className={s.customNav}>
                <Link href={'/'}><a>MeridianCinema</a></Link>

                <div className={s.lastPartHeader}>
                    <Link href={'/films'}><a>Зараз в прокаті</a></Link>
                    <Link href={'/soon'}><a>Скоро у кіно</a></Link>
                    <Link href={'/shows'}><a>Сеанси</a></Link>
                    <Link href={'/technologies'}><a>Технології</a></Link>
                    <Link href={'/about'}><a>Про нас</a></Link>
                </div>


                <label className={s.burgerLabel}>
                    <input type="checkbox" className={s.inputCustom} />
                    <span className={s.menu}> <span className={s.hamburger}></span> </span>
                    <ul className={s.customUl}>
                        <Link href={'/films'}><a className={s.customA} href="#">Зараз в прокаті</a></Link>
                        <Link href={'/soon'}><a className={s.customA} href="#">Скоро у кіно</a></Link>
                        <Link href={'/shows'}><a className={s.customA} href="#">Сеанси</a></Link>
                        <Link href={'/technologies'}><a className={s.customA} href="#">Технології</a></Link>
                        <Link href={'/about'}><a className={s.customA} href="#">Про нас</a></Link>
                    </ul>
                </label>
            </nav>

            <main className={s.customMain}>
                {children}
            </main>

            <footer>
                <div className={s.footer}>

                    <div className={s.firstFooterBlock}>

                        <div className={s.bookingBlock}>

                            <p className={s.bookingSpan}>Бронювання: <span>(067) 992 01 05 | (096) 252 12 35</span></p>

                        </div>

                        <div className={s.gmailBlock}>

                            {/* <div className={s.wrapperLogo}>
                                <Image
                                    src={gmail}
                                    width={200}
                                    height={200}
                                />
                            </div> */}

                            <p className={s.emailSpan}>Email: </p>


                            <p>meridiancinema@gmail.com</p>

                        </div>


                        <div className={s.locationBlock}>

                            {/* <div className={s.wrapperLogo}>
                                <Image
                                    src={location}
                                    width={200}
                                    height={200}
                                />
                            </div> */}

                            <p className={s.locationSpan}>Адреса: </p>
                            <p>Київ, вул.Грушевського, 35</p>

                        </div>

                    </div>

                    <div className={s.secondFooterBlock}>

                        <p className={s.bookingSpan}>Слідкуйте: </p>

                        <div className={s.social}>
                            <Link href="#">
                                <a>
                                    <div className={s.wrapperLogo}>
                                        <Image
                                            src={fb}
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <div className={s.wrapperLogo}>
                                        <Image
                                            src={insta}
                                        />
                                    </div>
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <div className={s.wrapperLogo}>
                                        <Image
                                            src={telegram}
                                        />
                                    </div>
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <div className={s.wrapperLogo}>
                                        <Image
                                            src={twitter}
                                        />
                                    </div>
                                </a>
                            </Link>
                        </div>

                        <p className={s.dated}>
                            MeridianCinema, {getCurrentYear()}
                        </p>

                    </div>


                </div>


            </footer>

        </div>
    )
}
