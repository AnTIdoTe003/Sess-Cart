// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from './components/Card'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.scss'
const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data =[
    {
      key:1
    },
    {
      key:2
    },
    {
      key:3
    },
    {
      key:3
    },
    {
      key:4
    },
    {
      key:5
    },
    {
      key:6
    },
    {
      key:7
    },
  ]
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="home-content">
          <Slider className='inner-carousel' {...settings}>
          {
            data.map((ele)=>{
              return(
                <Card key={ele.key}></Card>
              )
            })
          }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default App