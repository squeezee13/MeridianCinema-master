import React from 'react'
import Head from 'next/head';
import MainLayout from '../../components/MainLayout/MainLayout';

import s from '../../components/MainLayout/MainLayout.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Sertificats() {

    return <MainLayout>
        <Head>
            <title>
                Технології
            </title>
        </Head>

        <div className={s.salesPageWrap}>
            <p className={s.sertificatText1}>Проектор Barco Laser Flagship<br /><br /><span className={s.sertificatText1Span}>На відміну від традиційних поляризаційних 3D-систем, забезпечує живе і контрастне 3D-зображення: картинка формується вже в проекторі і дивитися її можна хоч одним оком, хоч обома і тримати голову під будь-яким кутом до екрану. Таким чином, 3D-фільм можна дивитися з однаковим комфортом в будь-якому місці кінозалу.</span></p>

            <div className={s.sertificat}>
                <img src="https://az877327.vo.msecnd.net/~/media/images/products/a%20-%20d/dp4k/dp4k-60l%20right%20jpg.jpg?as=0&dmc=0&thn=0&v=1&h=550&w=800" alt="img1" />

                <p className={s.sertificatOne}>Сабуфера MAG THOR</p>
                <p className={s.sertificatTwo}>Перша в Україні інсталяція сабвуфера MAG THOR продемонструвала, як глядач може не тільки чути, але й відчувати всім тілом звукові ефекти. Цей кіносабвуфер працює в частотному діапазоні від 18 Гц при потужності в 5000Вт. На основі цієї інсталяції в залі була реалізована і технологія DANA solution від Mag Audio: це рішення дозволяє передавати звукові ефекти 5.1 / 7.1 без використання процесора Dolby. До речі, і сабвуфер і технологія розроблені українською компанією. Сабвуфер розроблено і створено компанією MAG Audio - найбільшим у Східній Європі виробником професійних звукових систем для кіноконцертних комплексів, розташованим в м. Біла Церква</p>
                <img src="https://mag-cinema.com/image/cache/catalog/Cinema/2021/THOR-500x500.jpg" alt="img1" />

                <p className={s.sertificatText1Span}>Крісла D-Box, які синхронізують положення тіла глядача з тим, що відбувається на екрані, дарують глядачеві відчуття присутності всередині подій фільму.
                    По суті, людина починає отримувати враження ще й за допомогою вестибулярного апарата, і перегляд кінострічки перетворюється на незабутній досвід.</p>
                <p className={s.sertificatText1Span}>
                    Dolby Atmos та 4K. Занурюйся у серце звуку.
                </p>

            </div>
        </div>

    </MainLayout >
}
