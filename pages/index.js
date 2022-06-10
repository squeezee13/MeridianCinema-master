import Head from 'next/head'

import React from 'react'
import MainLayout from '../components/MainLayout/MainLayout';
import s from '../components/MainLayout/MainLayout.module.css';
import Slider from '../components/Slider/Slider';
import Accordion from '../components/Accordion/Accordion';

import Image from 'next/image';

import chef1 from '../public/chefs/chefs-1.jpg'
import chef2 from '../public/chefs/chefs-2.jpg'
import chef3 from '../public/chefs/chefs-3.jpg'

export default function index() {
  return <MainLayout className={s.container}>
    <Head>
      <title>
        Головна
      </title>
    </Head>

    <div className={s.textIndexMain}>
      <p className={s.textFirst}> <span>Вітаємо!</span><br /> Ви в найсучаснішому кінотеатрі України!</p>
    </div>

    <div className={s.container} style={{
      backgroundImage: "url(" + "https://townsquare.media/site/393/files/2019/03/GettyImages-898266112.jpg" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '450px'
    }}>
      <div className={s.containerContent}>
        <h1 className={s.hello}>MeridianCinema</h1>
        <p className={s.clickJourney}>Насолоджуйтесь преміальною якістю зображення у надсучасному та інноваційному кінотеатрі.</p>
      </div>
    </div>

    <div className={s.textIndex}>
      <p className={s.textSecond}>Ми пишаємось, що першими встановили у Східній Європі висококонтрасний <span>лазерний HDR проектор</span> в синергії з унікальним сабвуфером THOR</p>
    </div>

    <p className={s.textImax}>Проектор Barco Laser Flagship, на відміну від традиційних поляризаційних 3D-систем, забезпечує живе і контрастне 3D-зображення: картинка формується вже в проекторі і дивитися її можна хоч одним оком, хоч обома і тримати голову під будь-яким кутом до екрану. Таким чином, 3D-фільм можна дивитися з однаковим комфортом в будь-якому місці кінозалу.</p>

    <div className={s.textIndex}>
      <p className={s.textSecondA}><span>Новинки фільмів!</span></p>
    </div>

    <Slider />

    <div className={s.textIndex}>
      <p className={s.textThird}><span>3D система DepthQ</span> і срібний проекційний екран знижують світлові втрати і рівень перехресних перешкод.

        Технологія дає більш високу яскравість і контрастність зображення, виключаючи при цьому можливість геометричної асиметрії між очима.

        На сьогодні <span>DepthQ®</span> успішно протестовано керівниками шести найбільших голлівудських студій і внесено у список рекомендованого обладнання The Walt Disney Studios Motion Pictures. <span>HFR 3D</span> — формат високої частоти зміни кадрів (48, 60 і більше кадрів на секунду замість звичних 24-х). Завдяки цьому формату зображення набуває кришталевої чіткості, максимально близької до того, як сприймає навколишній світ людське око.</p>
    </div>

    <div className={s.accordionGroup}>
      <Accordion
        title="📽️ Як дізнатися про нові фільми?"
        content="Ви можете знайти всі нові фільми, які вийдуть в прокат в Україні, за посиланнями «Скоро у кіно» у верхньому рядку меню, щоб знайти дати виходу майбутніх фільмів."
      />
      <Accordion
        title="🎥 Яким чином діляться місця?"
        content="Місця розподіляються за принципом «перший прийшов першим обслужений» у день показу, а місця нумеруються."
      />
      <Accordion
        title="🎞️ Чи можна вибрати свій фільм для показу?"
        content="Через обмежену кількість екранів у багатьох кінотеатрах та кількість фільмів щотижня, остаточний вибір того, які фільми показувати в яких кінотеатрах, часто визначається вибором назв, які обслуговуватимуть більшу більшість, тобто фільмів, які швидше заповнять зал. При цьому багато інших гідних фільмів часто залишаються поза увагою."
      />
    </div>

    <section id="chefs" className={s.chefs} style={{
      backgroundImage: "url(" + "https://s3.amazonaws.com/sfc-datebook-wordpress/wp-content/uploads/sites/2/2019/09/MERe8d51fcb14070a936a71eb7393b2cguild0925-1024x768.jpg" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className={s.container}>

        <div className={s.sectionTitle}>
          <h2 className={s.textBarbersFirst}>ТОП-3 <span>найрейтинговіших фільмів за версією IMDb</span></h2>
        </div>

        <div className={s.row}>

          <div className={s.firstInstructor}>
            <div className={s.member}>
              <div className={s.pic}>
                <Image
                  src={chef1}
                />
              </div>
              <div className={s.memberInfo}>
                <h4>Втеча з Шоушенка</h4>
                <span>9.9/10</span>
                <br />
                <span>Режисер: Френк Дарабонт</span>
              </div>
            </div>
          </div>

          <div className={s.secondInstructor}>
            <div className={s.member}>
              <div className={s.pic}>
                <Image
                  src={chef2}
                />
              </div>
              <div className={s.memberInfo}>
                <h4>Хрещений батько</h4>
                <span>9.8/10</span>
                <br />
                <span>Режисер: Френсіс Форд Коппола</span>
              </div >
            </div >
          </div >

          <div className={s.thirdInstructor}>
            <div className={s.member}>
              <div className={s.pic}>
                <Image
                  src={chef3}
                />
              </div>
              <div className={s.memberInfo}>
                <h4>Темний лицар</h4>
                <span>9.8/10</span>
                <br />
                <span>Режисер: 	Крістофер Нолан</span>
              </div >
            </div >
          </div >

        </div >

      </div >
    </section >

    <div className={s.map}>
      <iframe
        style={{ border: '0', width: '100%', height: '350px' }}
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"></iframe>
    </div>

  </MainLayout >

}