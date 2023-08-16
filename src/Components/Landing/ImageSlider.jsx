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
      <img src={item1} />
            <img src={item2} />
            <img src={item3} />
            <img src={item4} />
            <img src={item5} />
    </Carousel>
  )
}