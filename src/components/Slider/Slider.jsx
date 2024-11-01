import React from "react";
import Slider from "react-slick";
import s from './Slider.module.css';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className={s.skiderr} {...settings}>
      <div>
        <img className={s.kartinka} src="https://avatars.mds.yandex.net/get-ydo/4362967/2a0000019036b5d9a04c52d0ec710b964a83/diploma"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://cs4.pikabu.ru/post_img/big/2014/09/03/9/1409755167_1617628755.JPG"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://i.ytimg.com/vi/AN4XL7RZCJQ/maxresdefault.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://avatars.mds.yandex.net/i?id=85afb315e4488339bad3205c9f8524a8_l-5240938-images-thumbs&n=13"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://i.ytimg.com/vi/M8PPmbaSHHQ/maxresdefault.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://yandex-images.clstorage.net/98nCpy352/d95db4An/4HoOFSn2dN1rEKVQjxETqVsYVbG2hVIMVT9ikwhcGQJG5PG8xirt2tNAtUyPCaxtosXlRj1caXPjH8P6FElhpjArDjQ9MgCszlWRIepRk5kLOYBlh5SXrBDuxrbN3QznplTBz2WN-u2wp1NeOC6rqQKARVY8nQhC4LkijqDJluFCW11G-7R2-xuxx8Xs4yI5-mjBMkf2JJxzv0KUL_6YF-MDpo7mTLqugdYiPrndmdghwGSXLrkac4FoVnxDenQBITpedcknFbqIs7VET9JyyBt5c2BWV3X8YY2h1L5O2RRTs_X_5w1JbLInsj_YbKsogTDHl83L2EHjeOatErhmorMYfacphUWYiELWJ22h4hqJ6OMgF4UFnkI8cDTvnXkXwrJUvsVfKX0TJgNsCP1K26BzJAZ-eypS0cvmD1BJt9Hgmyy3-NW1ifmDdhU8sDP5SYjiU-YHZp4B3qPV717b5wIDRq_ETJqvgFXCzJi8KHvSgdeG_br5MZBr9bwC-5WRg1sthnk2dZv44db2LNJj62pa8yIVtvfOMf6yFr082YWCsuWOt-1qztPHEA_Y_amZ0BPGFA_72zLiSvUvwTolwyNZL5foZ9TZqKKVV_wjQsm4aKNx9vYkfeLtE1Y8XZgnwLN2D_Y9-czAN5FsiH172EDRB5V9Cxgg0Gnm3UF419KCGyyUuwQ1yMiyh_XMcqO7iZtDY-f0NZyB7VG1vHzqJRNRFY2G_Igf0jXwXkltGeswIPQ07UqJAQH6RR-jakRgcNu85zkUN4lqQlcETgHRC8u7wPHGlTecgg8CJl5MO2TjI4TfFKyYfzJF8W46ftubANKGdQ2qulOT6qQcAduVo8PpzUdrhZSqCkBWBuwRgmvIKkBCZlWX_6BO83T9_Ws2U0PETtVfGg9jZxL-agxYehOyxnbfanrzMup2rCOaZ0GA-O7GSof0ailQRkdOUjBoOhkAM3R2V4-g7aJ0vH5JY"></img>
      </div>
    </Slider>
  );
}