import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Paper, Typography, Button, Card, CardMedia, CardContent, CardActions, Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';

const LazadaCarousel: React.FC = () => {
  const carouselItems = [
    {
      image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-fashion-sale-banner-template-design-cc34c2027d0bb5ccc2ff90231abaa242_screen.jpg?ts=1613395464',
      title: 'Summer Fashion Sale',
      description: 'Up to 50% off on the latest summer fashion trends.',
    },
    {
      image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-sale-banner-template-design-389dc7a74f096738d1d425314404a2cd_screen.jpg?ts=1605613724',
      title: 'Summer Sale 70%',
      description: 'Unbeatable on the latest summer fashion trends..',
    },
    {
        image: 'https://marketplace.canva.com/EAFHG6sbLsQ/1/0/1600w/canva-brown-beige-simple-special-sale-banner-lQfPvhnznqs.jpg',
        title: 'Summer Sale 70%',
        description: 'Unbeatable on the latest summer fashion trends..',
      },
    // Add more items as needed
  ];

  const cardItems = [
    {
      image: 'https://img.freepik.com/free-vector/hand-drawn-summer-sale-banner-template-with-photo_23-2148961156.jpg',
      title: 'Summer Fashion Sale',
        price:'฿130.00'
    },
    {
      image: 'https://img.freepik.com/free-vector/hand-drawn-summer-sale-banner-template-with-photo_23-2148961156.jpg',
      title: 'Summer Sale 70%',
             price:'฿230.00'
    },
    {
        image: 'https://img.freepik.com/free-vector/hand-drawn-summer-sale-banner-template-with-photo_23-2148961156.jpg',
        title: 'Summer Sale 70%',
        price:'฿500.00'
      },
      {
        image: 'https://img.freepik.com/free-vector/hand-drawn-summer-sale-banner-template-with-photo_23-2148961156.jpg',
        title: 'Summer Sale 70%',
        price:'฿800.00'
      },
      {
        image: 'https://img.freepik.com/free-vector/hand-drawn-summer-sale-banner-template-with-photo_23-2148961156.jpg',
        title: 'Summer Sale 70%',
        price:'฿600.00'
      },
      {
        image: 'https://img.freepik.com/free-vector/hand-drawn-summer-sale-banner-template-with-photo_23-2148961156.jpg',
        title: 'Summer Sale 70%',
        price:'฿700.00'
      },
  ];

  return (
    <Box style={{marginTop: '1%'}}>
    <Carousel infiniteLoop={true} showThumbs={false} showStatus={false}>
      {carouselItems.map((item, index) => (
        <img src={item.image} alt={item.title} style={{width: '50%'}} />
      ))}
    </Carousel>
    </Box>
  );
};

export default LazadaCarousel;
