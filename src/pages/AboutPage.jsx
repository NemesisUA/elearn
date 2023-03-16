import React from 'react'
import '../assets/AboutPage.css'

const AboutPage = () => {
  return (
    <main>
      <div className="wrapper">
        <section className="task">
        <h2 className='task__title'>Task</h2>
        <p>Твоя задача — створити застосунок для навчання. Для цього вже підготовлено API <code>https://www.postman.com/aninix/workspace/genesis-front-end-school/overview</code>, його необхідно буде форкнути у свій акаунт postman та можна працювати.</p>
        <p>Застосунок має гарно виглядати, але для інженера код важливіший. Тому можна вільно використати готові UI-бібліотеки. На ваш розсуд, які дані ви будете показувати користувачу.</p>
        <h4>Додаток містить дві сторінки:</h4>
        <ul>
          <li>сторінка з курсами;</li>
          <li>сторінка з переглядом уроку; </li>
        </ul>
        <h4>Детально про сторінки:</h4>
        <ul>
          <li>В стрічці з курсами необхідно відобразити останні 10 курсів. Курс містить:
            <ul>
              <li>Заголовок.</li>
              <li>Фото курсу.</li>
              <li>Заголовок курсу.</li>
              <li>Кількість уроків, навички та рейтинг.</li>
              <li>На сторінці виводимо 10 курсів і додаємо пагінацію.</li>
              <li>Додатково: при ховері відтворювати відео без звуку.</li>
            </ul>
          </li>
          <li>На сторінці з переглядом курсу відображається перше відео з даного курсу, деталі про курс та список уроків:
            <ul>
              <li>При кліку на урок (якщо він не заблокований) для перегляду відкриється поточне відео, користувач повинен розуміти, який урок з курсу переглядає. </li>
              <li>Необхідно зберігати прогрес перегляду відео та уроку курсу (зберігати локально).</li>
              <li>Якщо урок заблокований показати це користувачу.</li>
              <li>Додатково:
                <ol>
                  <li>Зробити функціонал picture in picture (без сторонніх бібліотек):
                    <ul>
                      <li>Відео можна вивести поверх сторінки при кліку. При цьому відео знаходиться у правому нижньому куті сторінки й можна ходити по інших сторінках.</li>
                    </ul>
                  </li>
                  <li>Додати зміну швидкості програвання відео через клавіатуру (без сторонніх бібліотек) (комбінація клавіш на власний розсуд):
                    <ul>
                      <li>Так же вивести інформацію біля відео як цим користуватись.</li>
                    </ul>
                  </li>
                </ol>
              </li>
            </ul>
          </li>
        </ul>
        <h4>Додаткові завдання:</h4> 
        <ul>
          <li>пропрацювати помилки від API (помилка мережі, ...);</li>
          <li>адаптив під мобільну версію;</li>
          <li>анімація завантаження відео;</li>
          <li>код покритий тестами;</li>
        </ul>
        <h4>Технічні деталі:</h4> 
        <p>Щоб показати зображення:</p>
        <ul>
          <li>для курсу: <code>previewImageLink + '/cover.webp'</code></li>
          <li>для уроку: <code>previewImageLink + '/' + lesson.order + '.webp'</code></li>          
        </ul>
        <p>В реалізації використовувати стандартний відеоплеєр.</p>
        <p>При роботі з відео рекомендуємо користуватись <code>hls.js</code>.</p> 
        </section>
      </div>
    </main>
  )
}

export { AboutPage }