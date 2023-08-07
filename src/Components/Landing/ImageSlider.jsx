'use client';
import { Carousel } from 'flowbite-react';
import item1 from "../../Assets/imageSlider/item1.jpg";
import item2 from "../../Assets/imageSlider/item3.jpg";
import item3 from "../../Assets/imageSlider/item4.jpg";
import item4 from "../../Assets/imageSlider/item5.jpg";
import item5 from "../../Assets/imageSlider/item6.jpg";




export default function SlidingInterval() {
  return (
    <Carousel>
      <img alt="image" src={item1} />
            <img alt="image" src={item2} />
            <img alt="image" src={item3} />
            <img alt="image" src={item4} />
            <img alt="image" src={item5} />
    </Carousel>
  )
}