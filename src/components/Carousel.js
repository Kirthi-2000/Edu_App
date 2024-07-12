import React, { useState, useRef, useEffect } from 'react';
import './Carousel.css';
import Card from 'react-bootstrap/Card';

const Carousel = () => {
  const [items, setItems] = useState([
    {
      imgSrc: 'images/python.png',
      title: 'DESIGN SLIDER',
      topic: 'Python',
      shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
      longTitle: 'Aerphone GHTK',
      longDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
      specifications: {
        usedTime: '6 hours',
        chargingPort: 'Type-C',
        compatible: 'Android',
        bluetooth: '5.3',
        controlled: 'Touch',
      },
    },
    {
      imgSrc: 'images/img1.png',
      title: 'DESIGN SLIDER',
      topic: 'React Js',
      shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
      longTitle: 'Headphones XYZ',
      longDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
      specifications: {
        usedTime: '8 hours',
        chargingPort: 'Micro-USB',
        compatible: 'iOS',
        bluetooth: '5.0',
        controlled: 'Buttons',
      },
    },
    {
      imgSrc: 'images/img3.png',
      title: 'DESIGN SLIDER',
      topic: 'JAVA',
      shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
      longTitle: 'Smartwatch ABC',
      longDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
      specifications: {
        usedTime: '24 hours',
        chargingPort: 'Magnetic',
        compatible: 'All Devices',
        bluetooth: '5.2',
        controlled: 'Touch',
      },
    },
    {
      imgSrc: 'images/img4.png',
      title: 'DESIGN SLIDER',
      topic: 'HTML',
      shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
      longTitle: 'Smartwatch ABC',
      longDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
      specifications: {
        usedTime: '24 hours',
        chargingPort: 'Magnetic',
        compatible: 'All Devices',
        bluetooth: '5.2',
        controlled: 'Touch',
      },
    },
    {
      imgSrc: 'images/img5.png',
      title: 'DESIGN SLIDER',
      topic: 'CSS',
      shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
      longTitle: 'Smartwatch ABC',
      longDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
      specifications: {
        usedTime: '24 hours',
        chargingPort: 'Magnetic',
        compatible: 'All Devices',
        bluetooth: '5.2',
        controlled: 'Touch',
      },
    },
    {
      imgSrc: 'images/img6.png',
      title: 'DESIGN SLIDER',
      topic: 'JS',
      shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
      longTitle: 'Smartwatch ABC',
      longDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
      specifications: {
        usedTime: '24 hours',
        chargingPort: 'Magnetic',
        compatible: 'All Devices',
        bluetooth: '5.2',
        controlled: 'Touch',
      },
    },
  ]);

  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const unAcceppClick = useRef(null);

  const showSlider = (type) => {
    if (carouselRef.current && listRef.current) {
      carouselRef.current.classList.remove('next', 'prev');
      const currentItems = Array.from(listRef.current.children);

      if (type === 'next') {
        listRef.current.appendChild(currentItems[0]);
        carouselRef.current.classList.add('next');
      } else {
        listRef.current.insertBefore(currentItems[currentItems.length - 1], currentItems[0]);
        carouselRef.current.classList.add('prev');
      }

      unAcceppClick.current = setTimeout(() => {
        carouselRef.current.style.pointerEvents = 'auto';
      }, 2000);
    }
  };

  useEffect(() => {
    return () => clearTimeout(unAcceppClick.current);
  }, []);

  return (
    <Card className="animated-background">
        <Card.Body>
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={listRef}>
        {items.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.imgSrc} alt={item.topic} className="carousel-image"/>
            <div className="introduce">
              <div className="title">{item.title}</div>
              <div className="topic">{item.topic}</div>
              <div className="des">{item.shortDesc}</div>
              <button className="seeMore" onClick={() => carouselRef.current.classList.add('showDetail')}>SEE MORE &#8599;</button>
            </div>
            <div className="detail">
              <img src={item.imgSrc} alt={item.topic} className="modal-image"/>
              <div className="title">{item.longTitle}</div>
              <div className="des">{item.longDesc}</div>
              <div className="specifications">
                <div><p>Used Time</p><p>{item.specifications.usedTime}</p></div>
                <div><p>Charging port</p><p>{item.specifications.chargingPort}</p></div>
                <div><p>Compatible</p><p>{item.specifications.compatible}</p></div>
                <div><p>Bluetooth</p><p>{item.specifications.bluetooth}</p></div>
                <div><p>Controlled</p><p>{item.specifications.controlled}</p></div>
              </div>
              <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev" onClick={() => showSlider('prev')}>&lt;</button>
        <button id="next" onClick={() => showSlider('next')}>&gt;</button>
        <button id="back" onClick={() => carouselRef.current.classList.remove('showDetail')}>See All &#8599;</button>
      </div>
    </div>
    </Card.Body>
    </Card>
  ); 
};

export default Carousel;
