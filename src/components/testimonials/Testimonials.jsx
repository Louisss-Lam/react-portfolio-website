import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et maiores mollitia illo accusamus quas recusandae perspiciatis, necessitatibus temporibus doloribus nesciunt doloremque voluptas dolorem adipisci. Repellat amet et ipsam ipsa.'
  },
  {
    avatar: AVTR2,
    name: 'April Szeto',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et maiores mollitia illo accusamus quas recusandae perspiciatis, necessitatibus temporibus doloribus nesciunt doloremque voluptas dolorem adipisci. Repellat amet et ipsam ipsa.'
  },
  {
    avatar: AVTR3,
    name: 'Louis Lam',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et maiores mollitia illo accusamus quas recusandae perspiciatis, necessitatibus temporibus doloribus nesciunt doloremque voluptas dolorem adipisci. Repellat amet et ipsam ipsa.'
  },
  {
    avatar: AVTR4,
    name: 'Jason Wong',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et maiores mollitia illo accusamus quas recusandae perspiciatis, necessitatibus temporibus doloribus nesciunt doloremque voluptas dolorem adipisci. Repellat amet et ipsam ipsa.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials